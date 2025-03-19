'use client';

import UploadFormInput from '@/components/upload/upload-form-input';

export default function UploadForm() {
  const handleSubmit = () => {
    console.log('Submitted');
  };
  return (
    <div>
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}
