import React from 'react';
import { useVerse } from './useVerse';
import ShareButton from './ShareButton';
import { Quote } from 'lucide-react';

const DailyVerse: React.FC = () => {
  const verse = useVerse();

  if (!verse) return null;

  return (
    <section className="section-padding bg-gradient-light">
      <div className="container-padding">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary-accent" />
            <Quote className="h-8 w-8 text-primary-accent/20 absolute top-4 right-4" />
            
            <div className="space-y-6">
              <blockquote className="font-serif text-xl md:text-2xl text-primary-dark leading-relaxed">
                "{verse.text}"
              </blockquote>
              
              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <cite className="text-primary-gray font-medium not-italic">
                  {verse.reference}
                </cite>
                <ShareButton verse={verse} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyVerse;