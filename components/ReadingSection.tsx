import React from 'react';
import type { ReadingSection as ReadingSectionType } from '@/types';

interface Props {
  section: ReadingSectionType;
}

export const ReadingSection: React.FC<Props> = ({ section }) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-amber-50 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-amber-900 mb-6">{section.title}</h2>
      {section.paragraphs.map((paragraph, index) => (
        <p 
          key={index} 
          className="mb-4 text-lg leading-relaxed text-amber-950 font-['Open_Dyslexic']"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};