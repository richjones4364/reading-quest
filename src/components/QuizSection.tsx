import React from 'react';
import type { Question } from '../types';
import { CheckCircle, XCircle } from 'lucide-react';

interface Props {
  questions: Question[];
  onAnswer: (questionId: number, selectedAnswer: number) => void;
  answeredQuestions: Record<number, number>;
  isCorrect: Record<number, boolean>;
}

export const QuizSection: React.FC<Props> = ({ 
  questions, 
  onAnswer, 
  answeredQuestions,
  isCorrect 
}) => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-rose-50 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-rose-900 mb-6">
        Reading Comprehension Questions
      </h3>
      {questions.map((question) => (
        <div key={question.id} className="mb-6">
          <p className="text-lg text-rose-950 mb-3">{question.text}</p>
          <div className="space-y-2">
            {question.options.map((option, index) => {
              const isAnswered = answeredQuestions[question.id] !== undefined;
              const isSelected = answeredQuestions[question.id] === index;
              const showResult = isAnswered && isSelected;
              
              return (
                <button
                  key={index}
                  onClick={() => !isAnswered && onAnswer(question.id, index)}
                  disabled={isAnswered}
                  className={`
                    w-full text-left p-3 rounded-lg flex items-center justify-between
                    ${isAnswered ? 'cursor-not-allowed' : 'hover:bg-rose-100'}
                    ${isSelected ? 'bg-rose-100' : 'bg-white'}
                    transition-colors duration-200
                  `}
                >
                  <span>{option}</span>
                  {showResult && (
                    isCorrect[question.id] ? (
                      <CheckCircle className="text-green-500 w-5 h-5" />
                    ) : (
                      <XCircle className="text-red-500 w-5 h-5" />
                    )
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};