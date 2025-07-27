'use client';

import { useState, useEffect, useCallback } from 'react';
import { QuizQuestion, GameState, CategoryStats } from '@/types/quiz';
import { getRandomQuestions } from '@/data/questions';

const QUESTION_TIME_LIMIT = 30; // 30秒

export function useGameLogic(questionCount: number = 10) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [gameState, setGameState] = useState<GameState>({
    currentQuestionIndex: 0,
    score: 0,
    totalQuestions: questionCount,
    isGameComplete: false,
    selectedAnswer: null,
    showAnswer: false,
    timeRemaining: QUESTION_TIME_LIMIT,
  });
  const [answers, setAnswers] = useState<{ question: QuizQuestion; userAnswer: string; correct: boolean }[]>([]);
  const [streak, setStreak] = useState(0);

  // ゲーム初期化
  const initializeGame = useCallback(() => {
    const newQuestions = getRandomQuestions(questionCount);
    setQuestions(newQuestions);
    setGameState({
      currentQuestionIndex: 0,
      score: 0,
      totalQuestions: questionCount,
      isGameComplete: false,
      selectedAnswer: null,
      showAnswer: false,
      timeRemaining: QUESTION_TIME_LIMIT,
    });
    setAnswers([]);
    setStreak(0);
  }, [questionCount]);

  // タイマー
  useEffect(() => {
    if (gameState.isGameComplete || gameState.showAnswer) return;

    const timer = setInterval(() => {
      setGameState(prev => {
        if (prev.timeRemaining <= 1) {
          // 時間切れ
          const currentQuestion = questions[prev.currentQuestionIndex];
          setAnswers(prevAnswers => [
            ...prevAnswers,
            { question: currentQuestion, userAnswer: '', correct: false }
          ]);
          setStreak(0);
          return {
            ...prev,
            selectedAnswer: '',
            showAnswer: true,
          };
        }
        return { ...prev, timeRemaining: prev.timeRemaining - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState.isGameComplete, gameState.showAnswer, gameState.currentQuestionIndex, questions]);

  // 回答処理
  const handleAnswer = useCallback((answer: string) => {
    if (gameState.showAnswer) return;

    const currentQuestion = questions[gameState.currentQuestionIndex];
    const isCorrect = answer === currentQuestion.answer;

    setGameState(prev => ({
      ...prev,
      selectedAnswer: answer,
      showAnswer: true,
      score: prev.score + (isCorrect ? 1 : 0),
    }));

    setAnswers(prev => [
      ...prev,
      { question: currentQuestion, userAnswer: answer, correct: isCorrect }
    ]);

    setStreak(prev => isCorrect ? prev + 1 : 0);

    // 効果音（ブラウザの場合）
    if (typeof window !== 'undefined') {
      try {
        if (isCorrect) {
          // 正解音
          const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmESBEen');
          audio.volume = 0.3;
          audio.play().catch(() => {});
        } else {
          // 不正解音
          const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmESBEen');
          audio.volume = 0.2;
          audio.play().catch(() => {});
        }
      } catch {
        // 音声再生エラーは無視
      }
    }
  }, [gameState.showAnswer, questions, gameState.currentQuestionIndex]);

  // 次の問題へ
  const nextQuestion = () => {
    if (gameState.currentQuestionIndex + 1 >= questions.length) {
      setGameState(prev => ({ ...prev, isGameComplete: true }));
    } else {
      setGameState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        selectedAnswer: null,
        showAnswer: false,
        timeRemaining: QUESTION_TIME_LIMIT,
      }));
    }
  };

  // カテゴリー別統計
  const getCategoryStats = (): CategoryStats[] => {
    const stats: { [key: string]: CategoryStats } = {};
    
    answers.forEach(answer => {
      const category = answer.question.category;
      if (!stats[category]) {
        stats[category] = { category, total: 0, correct: 0 };
      }
      stats[category].total++;
      if (answer.correct) {
        stats[category].correct++;
      }
    });

    return Object.values(stats);
  };

  // ゲーム再開
  const restartGame = () => {
    initializeGame();
  };

  // 初期化
  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  return {
    questions,
    gameState,
    currentQuestion: questions[gameState.currentQuestionIndex],
    answers,
    streak,
    categoryStats: getCategoryStats(),
    handleAnswer,
    nextQuestion,
    restartGame,
  };
}