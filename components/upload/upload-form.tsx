'use client';

import UploadFormInput from '@/components/upload/upload-form-input';
import { useUploadThing } from '@/utils/uploadthing';
import { z } from 'zod';
import { toast } from 'sonner';
import { generatePdfSummary } from '@/actions/upload-actions';
const schema = z.object({
  file: z
    .instanceof(File, { message: 'Invalid file' })
    .refine((file) => file.size < 20 * 1024 * 1024, {
      message: 'File size should be less than 20MB',
    })
    .refine((file) => file.type.startsWith('application/pdf'), {
      message: 'File must be a PDF',
    }),
});

export default function UploadForm() {
  const { startUpload, routeConfig } = useUploadThing('pdfUploader', {
    onClientUploadComplete: () => {
      console.log('uploaded successfully!');
    },
    onUploadError: (err) => {
      console.error('error occurred while uploading', err);
      toast('Error occured while uploading', {
        description: err.message,
      });
    },
    onUploadBegin: ({ file }) => {
      console.log('upload has begun for', file);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted');

    const formData = new FormData(e.currentTarget);
    const file = formData.get('file') as File;

    //validating the fields
    const validatedFields = schema.safeParse({ file });
    console.log(validatedFields);

    if (!validatedFields.success) {
      toast('Something went wrong', {
        description:
          validatedFields.error.flatten().fieldErrors.file?.[0] ??
          'Invalid file',
      });
      return;
    }

    //upload the file to uploadthing
    toast('📄 Uploading PDF', {
      description: 'We are uploading PDF!',
    });

    const resp = await startUpload([file]);
    if (!resp) {
      toast.error('Something went wrong', {
        description: 'please use different type',
      });
      return;
    }
    toast.info('📄 Procession PDF', {
      description: 'Hang tight! our AI is processing your document ⚡️',
    });
    //Parse the pdf using lang chain
    const summary = await generatePdfSummary(resp);
    console.log('_____   sssssssss    ______    ', { summary });
    //summarize the pdf using AI
    //save the summary to the database
    //redirect to the [id] summary page
  };
  return (
    <div>
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}
