import { Pizza } from 'lucide-react';
import React from 'react';

export default function DemoSection() {
  return (
    <section className="relative">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <Pizza className="w-6 h-6 text-rose-500" />
          <h3 className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6">
            Watch how Sommaire transforms{' '}
            <span className="bg-linear-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
              this Next.js course PDF
            </span>{' '}
            into an easy-to-read summary!
          </h3>
        </div>
      </div>
    </section>
  );
}
