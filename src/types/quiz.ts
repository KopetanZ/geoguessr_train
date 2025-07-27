export interface QuizQuestion {
  id: string;
  category: 'flag' | 'language' | 'phone' | 'architecture';
  question: string;
  answer: string;
  options: string[];
  explanation: string;
  funFact: string;
  imageUrl?: string;
}

export interface GameState {
  currentQuestionIndex: number;
  score: number;
  totalQuestions: number;
  isGameComplete: boolean;
  selectedAnswer: string | null;
  showAnswer: boolean;
  timeRemaining: number;
}

export interface CategoryStats {
  category: string;
  total: number;
  correct: number;
}