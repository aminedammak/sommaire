import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl">
      <div>
        <div className="flex">
          <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
            <Badge
              variant="secondary"
              className="relative px-6 py-2 text-base font-medium rounded-full bg-white group-hover:bg-rose-200 transition-colors duration-200"
            >
              <Sparkles className="w-6 h-6 mr-2 text-rose-600 animate-pulse" />
              <p className="text-base text-rose-600">Powered By AI</p>
            </Badge>
          </div>
        </div>
        <h1 className="font-bold py-6 text-center">
          Transform PDFs into concise summaries
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600">
          Get a beautiful summary reel of the document in seconds.
        </h2>
        <Button>Try Sommaire</Button>
      </div>
    </section>
  );
}

export default HeroSection;
