import { useState, useEffect } from 'react';
import { verses, Verse } from './verseData';

export const useVerse = () => {
  const [dailyVerse, setDailyVerse] = useState<Verse | null>(null);

  useEffect(() => {
    const getDailyVerse = () => {
      const today = new Date();
      const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
      const verseIndex = dayOfYear % verses.length;
      return verses[verseIndex];
    };

    setDailyVerse(getDailyVerse());
  }, []);

  return dailyVerse;
};