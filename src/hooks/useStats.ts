'use client';

import { useState, useEffect, useCallback } from 'react';
import { GameStats, GameResult, CategoryStats, DifficultyLevel, GameMode } from '@/types/quiz';

const STATS_STORAGE_KEY = 'geoguesser-stats';

const initialStats: GameStats = {
  totalGames: 0,
  totalQuestions: 0,
  totalCorrect: 0,
  bestScore: 0,
  averageScore: 0,
  categoryStats: {},
  difficultyStats: {},
  gameHistory: [],
  endlessHighScore: 0,
  endlessGames: 0
};

export function useStats() {
  const [stats, setStats] = useState<GameStats>(initialStats);

  // ローカルストレージから統計を読み込み
  useEffect(() => {
    const saved = localStorage.getItem(STATS_STORAGE_KEY);
    if (saved) {
      try {
        const parsedStats = JSON.parse(saved);
        // 新しいフィールドが追加された場合のマイグレーション
        const migratedStats = {
          ...initialStats,
          ...parsedStats,
          endlessHighScore: parsedStats.endlessHighScore ?? 0,
          endlessGames: parsedStats.endlessGames ?? 0
        };
        setStats(migratedStats);
      } catch (error) {
        console.error('Failed to parse stats:', error);
        setStats(initialStats);
      }
    }
  }, []);

  // 統計をローカルストレージに保存
  const saveStats = useCallback((newStats: GameStats) => {
    setStats(newStats);
    localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(newStats));
  }, []);

  // ゲーム結果を記録
  const recordGameResult = useCallback((
    score: number,
    totalQuestions: number,
    categoryResults: CategoryStats[],
    difficulty?: DifficultyLevel,
    timeSpent: number = 0,
    gameMode?: GameMode
  ) => {
    const gameResult: GameResult = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      score,
      totalQuestions,
      difficulty,
      timeSpent,
      categoryResults,
      gameMode,
      isEndless: gameMode === 'endless'
    };

    setStats(prevStats => {
      const newStats = { ...prevStats };
      
      // 基本統計を更新
      newStats.totalGames += 1;
      newStats.totalQuestions += totalQuestions;
      newStats.totalCorrect += score;
      newStats.bestScore = Math.max(newStats.bestScore, score);
      newStats.averageScore = newStats.totalCorrect / newStats.totalQuestions;

      // エンドレスモード専用統計を更新
      if (gameMode === 'endless') {
        newStats.endlessGames += 1;
        newStats.endlessHighScore = Math.max(newStats.endlessHighScore, score);
      }

      // カテゴリー別統計を更新
      categoryResults.forEach(categoryResult => {
        const category = categoryResult.category;
        if (!newStats.categoryStats[category]) {
          newStats.categoryStats[category] = {
            category,
            total: 0,
            correct: 0
          };
        }
        newStats.categoryStats[category].total += categoryResult.total;
        newStats.categoryStats[category].correct += categoryResult.correct;
      });

      // 難易度別統計を更新
      if (difficulty) {
        if (!newStats.difficultyStats[difficulty]) {
          newStats.difficultyStats[difficulty] = {
            category: difficulty,
            total: 0,
            correct: 0
          };
        }
        newStats.difficultyStats[difficulty].total += totalQuestions;
        newStats.difficultyStats[difficulty].correct += score;
      }

      // ゲーム履歴を追加（最新100件まで保持）
      newStats.gameHistory = [gameResult, ...newStats.gameHistory].slice(0, 100);

      // ローカルストレージに保存
      localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(newStats));
      
      return newStats;
    });
  }, []);

  // 統計をリセット
  const resetStats = useCallback(() => {
    saveStats(initialStats);
  }, [saveStats]);

  // 正答率を計算
  const getAccuracy = useCallback((correct: number, total: number) => {
    return total > 0 ? Math.round((correct / total) * 100) : 0;
  }, []);

  return {
    stats,
    recordGameResult,
    resetStats,
    getAccuracy
  };
}