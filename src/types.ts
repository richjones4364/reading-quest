export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface ReadingSection {
  id: number;
  title: string;
  paragraphs: string[];
  questions: Question[];
}

export interface UserProgress {
  currentSection: number;
  weeklyPoints: number;
  correctAnswers: number;
  totalAttempts: number;
}