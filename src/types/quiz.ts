export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface QuizQuestion {
  id: string;
  category: 'flag' | 'language' | 'phone' | 'architecture' | 'road' | 'infrastructure' | 'nature' | 'business';
  difficulty: DifficultyLevel;
  question: string;
  answer: string;
  options: string[];
  explanation: string;
  funFact: string;
  imageUrl?: string;
  flagCountry?: string; // 国旗問題の場合の国名
}

export interface GameState {
  currentQuestionIndex: number;
  score: number;
  totalQuestions: number;
  isGameComplete: boolean;
  selectedAnswer: string | null;
  showAnswer: boolean;
  timeRemaining: number;
  selectedDifficulty: DifficultyLevel;
}

export interface CategoryStats {
  category: string;
  total: number;
  correct: number;
}