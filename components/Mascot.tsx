import React from 'react';
import { BookOpen } from 'lucide-react';

interface Props {
  message: string;
  showTrophy?: boolean;
}

export const Mascot: React.FC<Props> = ({ message, showTrophy }) => {
  return (
    <div className="flex items-center gap-4 max-w-2xl mx-auto p-4 bg-amber-50 rounded-lg shadow-sm mb-6">
      <div className="flex-shrink-0 w-20 h-20 bg-amber-200 rounded-full flex items-center justify-center">
        <BookOpen className="w-12 h-12 text-amber-800" />
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-amber-900 mb-1">Booky the Owl says:</h3>
        <p className="text-amber-800">{message}</p>
      </div>
    </div>
  );
};