import React from 'react';
import { Share2 } from 'lucide-react';
import type { Verse } from './verseData';

interface ShareButtonProps {
  verse: Verse;
}

const ShareButton: React.FC<ShareButtonProps> = ({ verse }) => {
  const shareVerse = async () => {
    const shareText = `"${verse.text}" - ${verse.reference}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Daily Bible Verse',
          text: shareText,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(shareText);
    }
  };

  return (
    <button
      onClick={shareVerse}
      className="inline-flex items-center gap-2 text-primary-accent hover:text-primary-accent/80 transition-colors"
      title="Share this verse"
    >
      <Share2 className="h-4 w-4" />
      <span className="text-sm">Share</span>
    </button>
  );
};

export default ShareButton;