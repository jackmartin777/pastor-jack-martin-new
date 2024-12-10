export interface Verse {
  text: string;
  reference: string;
  theme?: string;
}

export const verses: Verse[] = [
  {
    text: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
    reference: "Jeremiah 29:11",
    theme: "hope"
  },
  {
    text: "Cast your burden on the Lord, and he will sustain you; he will never permit the righteous to be moved.",
    reference: "Psalm 55:22",
    theme: "comfort"
  },
  {
    text: "Come to me, all who labor and are heavy laden, and I will give you rest.",
    reference: "Matthew 11:28",
    theme: "healing"
  },
  {
    text: "Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.",
    reference: "John 14:27",
    theme: "peace"
  },
  {
    text: "But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.",
    reference: "Isaiah 40:31",
    theme: "strength"
  }
];