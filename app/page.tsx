'use client';

import { useState } from 'react';
import { ReadingSection } from '@/components/ReadingSection';
import { QuizSection } from '@/components/QuizSection';
import { ProgressBar } from '@/components/ProgressBar';
import { Mascot } from '@/components/Mascot';
import { readingSections } from '@/src/data/sampleText';
import type { UserProgress } from '@/types';

export default function Home() {
  const [progress, setProgress] = useState<UserProgress>({
    currentSection: 0,
    weeklyPoints: 0,
    correctAnswers: 0,
    totalAttempts: 0,
  });

  const [answeredQuestions, setAnsweredQuestions] = useState<
    Record<number, number>
  >({});
  const [isCorrect, setIsCorrect] = useState<Record<number, boolean>>({});
  const [showEncouragement, setShowEncouragement] = useState(false);
  const [encouragementMessage, setEncouragementMessage] = useState('');

  const currentSection = readingSections[progress.currentSection];

  const getRandomEncouragement = (correct: number, total: number) => {
    if (correct >= 3) {
      const messages = [
        "Fantastic job! You're becoming such a great reader! 🌟",
        'Wow! You really understood that passage well! 📚',
        "You're making amazing progress! Keep it up! ⭐",
        "You're a reading superstar! Ready for the next challenge? 🎯",
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    } else {
      const messages = [
        "Don't worry! Every attempt helps us learn. Let's try again! 💪",
        "You're getting closer! Want to review the passage together? 📖",
        'Practice makes perfect! Shall we give it another shot? 🎯',
        'Keep going! I believe in you! 🌟',
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    }
  };

  const handleAnswer = (questionId: number, selectedAnswer: number) => {
    const question = currentSection.questions.find((q) => q.id === questionId);
    if (!question) return;

    const correct = selectedAnswer === question.correctAnswer;

    setAnsweredQuestions((prev) => ({
      ...prev,
      [questionId]: selectedAnswer,
    }));

    setIsCorrect((prev) => ({
      ...prev,
      [questionId]: correct,
    }));

    setProgress((prev) => ({
      ...prev,
      correctAnswers: prev.correctAnswers + (correct ? 1 : 0),
      totalAttempts: prev.totalAttempts + 1,
    }));

    // Check if all questions are answered
    const allAnswered =
      Object.keys(answeredQuestions).length ===
      currentSection.questions.length - 1;
    if (allAnswered) {
      const totalCorrect =
        Object.values(isCorrect).filter(Boolean).length + (correct ? 1 : 0);

      // Show encouragement message
      setEncouragementMessage(
        getRandomEncouragement(totalCorrect, currentSection.questions.length)
      );
      setShowEncouragement(true);

      if (totalCorrect >= 3) {
        // Award points and move to next section
        setTimeout(() => {
          setProgress((prev) => ({
            ...prev,
            weeklyPoints: prev.weeklyPoints + totalCorrect,
            currentSection: prev.currentSection + 1,
          }));
          setAnsweredQuestions({});
          setIsCorrect({});
          setShowEncouragement(false);
        }, 3000);
      } else {
        // Reset section after delay
        setTimeout(() => {
          setAnsweredQuestions({});
          setIsCorrect({});
          setShowEncouragement(false);
        }, 3000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-amber-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-amber-900 text-center mb-8">
          Reading Adventure
        </h1>

        <ProgressBar
          weeklyPoints={progress.weeklyPoints}
          correctAnswers={progress.correctAnswers}
          totalAttempts={progress.totalAttempts}
        />

        {progress.weeklyPoints >= 100 ? (
          <>
            <Mascot
              message="Congratulations! You've reached your weekly reading goal! You're amazing! 🎉"
              showTrophy={true}
            />
            <div className="text-center p-8 bg-teal-50 rounded-lg">
              <h2 className="text-2xl font-bold text-teal-900 mb-4">
                Congratulations! 🎉
              </h2>
              <p className="text-teal-800">
                You've completed your weekly reading goal!
              </p>
            </div>
          </>
        ) : currentSection ? (
          <>
            {!showEncouragement ? (
              <>
                <Mascot message="Let's read this passage together! Take your time and enjoy the story. 📚" />
                <ReadingSection section={currentSection} />
                <QuizSection
                  questions={currentSection.questions}
                  onAnswer={handleAnswer}
                  answeredQuestions={answeredQuestions}
                  isCorrect={isCorrect}
                />
              </>
            ) : (
              <Mascot message={encouragementMessage} />
            )}
          </>
        ) : (
          <>
            <Mascot message="Wow! You've read all the available stories! Come back soon for more adventures! 🌟" />
            <div className="text-center p-8 bg-amber-50 rounded-lg">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">
                All Done!
              </h2>
              <p className="text-amber-800">
                You've completed all available reading sections.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
