import { BrainCircuit, FileOutput, FileText } from 'lucide-react';
import React from 'react';

export default function HowItWorksSection() {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8  lg:pt-12">
        <div className="text-center mb-16">
          <h2
            className="font-bold text-xl uppercase mb-4 text-rose-500"
            style={{ opacity: 1, transform: 'none' }}
          >
            How it works
          </h2>
          <h3>
            Transform any PDF into an easy-to-digest summary in three simple
            steps
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          <div
            className="relative flex items-stretch"
            style={{ opacity: 1, transform: 'none' }}
          >
            <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 hover:border-rose-500/50 transition-colors group w-full">
              <div className="flex flex-col gap-4 h-full">
                <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-gradient-to-br from-rose-500/10 to-transparent group-hover:from-rose-500/20 transition-colors">
                  <div className="text-rose-500">
                    <FileText size={64} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex flex-col flex-1 gap-1 justify-between">
                  <h4 className="text-center font-bold text-xl">
                    Upload your PDF
                  </h4>
                  <p className="text-center text-gray-600 text-sm">
                    Simply drag and drop your PDF document or click to upload
                  </p>
                </div>
              </div>
            </div>
            <div
              className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10"
              style={{ opacity: 0 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-move-right text-rose-400"
              >
                <path d="M18 8L22 12L18 16"></path>
                <path d="M2 12H22"></path>
              </svg>
            </div>
          </div>
          <div
            className="relative flex items-stretch"
            style={{ opacity: 1, transform: 'none' }}
          >
            <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 hover:border-rose-500/50 transition-colors group w-full">
              <div className="flex flex-col gap-4 h-full">
                <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-gradient-to-br from-rose-500/10 to-transparent group-hover:from-rose-500/20 transition-colors">
                  <div className="text-rose-500">
                    <BrainCircuit size={64} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex flex-col flex-1 gap-1 justify-between">
                  <h4 className="text-center font-bold text-xl">AI Analysis</h4>
                  <p className="text-center text-gray-600 text-sm">
                    Our advanced AI processes and analyzes your document
                    instantly
                  </p>
                </div>
              </div>
            </div>
            <div
              className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10"
              style={{ opacity: 0 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-move-right text-rose-400"
              >
                <path d="M18 8L22 12L18 16"></path>
                <path d="M2 12H22"></path>
              </svg>
            </div>
          </div>
          <div
            className="relative flex items-stretch"
            style={{ opacity: 1, transform: 'none' }}
          >
            <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 hover:border-rose-500/50 transition-colors group w-full">
              <div className="flex flex-col gap-4 h-full">
                <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-gradient-to-br from-rose-500/10 to-transparent group-hover:from-rose-500/20 transition-colors">
                  <div className="text-rose-500">
                    <FileOutput size={64} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex flex-col flex-1 gap-1 justify-between">
                  <h4 className="text-center font-bold text-xl">Get Summary</h4>
                  <p className="text-center text-gray-600 text-sm">
                    Receive a clear, concise summary of your document
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
