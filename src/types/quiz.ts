export type DifficultyLevel = 'easy' | 'medium' | 'hard';
export type GameMode = 'normal' | 'timeattack' | 'endless';

export interface QuizQuestion {
  id: string;
  category: 'flag' | 'language' | 'phone' | 'architecture' | 'road' | 'infrastructure' | 'nature' | 'business' | 'hemisphere' | 'coverage' | 'car-meta' | 'bollard' | 'sign-meta' | 'script' | 'advanced-meta' | 'japan-specific';
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
  gameMode: GameMode;
  totalTimeBonus: number;
  lives?: number;
  isEndlessMode?: boolean;
}

export interface CategoryStats {
  category: string;
  total: number;
  correct: number;
}

export interface GameStats {
  totalGames: number;
  totalQuestions: number;
  totalCorrect: number;
  bestScore: number;
  averageScore: number;
  categoryStats: { [category: string]: CategoryStats };
  difficultyStats: { [difficulty: string]: CategoryStats };
  gameHistory: GameResult[];
  endlessHighScore: number;
  endlessGames: number;
}

export interface GameResult {
  id: string;
  date: string;
  score: number;
  totalQuestions: number;
  difficulty?: DifficultyLevel;
  timeSpent: number;
  categoryResults: CategoryStats[];
  gameMode?: GameMode;
  isEndless?: boolean;
}