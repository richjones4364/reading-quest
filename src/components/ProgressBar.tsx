import React from 'react';
import { Trophy } from 'lucide-react';

interface Props {
  weeklyPoints: number;
  correctAnswers: number;
  totalAttempts: number;
}

export const ProgressBar: React.FC<Props> = ({ 
  weeklyPoints, 
  correctAnswers, 
  totalAttempts 
}) => {
  const progress = (weeklyPoints / 50) * 100;
  
  return (
    <div className="max-w-2xl mx-auto mb-8 p-4 bg-teal-50 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <Trophy className="w-5 h-5 text-teal-600 mr-2" />
          <span className="text-teal-900 font-semibold">
            Weekly Progress: {weeklyPoints}/100 points
          </span>
        </div>
        <span className="text-teal-700">
          Correct: {correctAnswers}/{totalAttempts}
        </span>
      </div>
      <div className="w-full h-4 bg-teal-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-teal-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};