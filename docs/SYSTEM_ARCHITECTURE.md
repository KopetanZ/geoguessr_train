# 🏗️ システム構成・機能仕様書

> **Geoguesser Training App - 完全システム文書**  
> 作成日: 2025年1月  
> 目的: 開発継続・デバッグ時の状況把握とシステム理解

## 📋 概要

### プロジェクト基本情報
- **プロジェクト名**: Geoguesser Training App
- **技術スタック**: Next.js 15 + TypeScript + Tailwind CSS
- **目的**: Geoguessrでの国判別スキル向上のための学習アプリ
- **現在のバージョン**: v1.2 (255問対応, 画像問題実装済み)

### 主要機能概要
1. **多カテゴリークイズシステム** (16カテゴリー, 255問)
2. **3つのゲームモード** (Normal/TimeAttack/Endless)
3. **難易度システム** (Easy/Medium/Hard)
4. **世界地図表示** (正解後の位置表示)
5. **統計・履歴管理** (詳細成績追跡)
6. **PWA対応** (オフライン対応, インストール可能)
7. **問題画像システム** (実写画像による出題)

## 🗂️ ディレクトリ構成

```
geoguesser_train/
├── public/                     # 静的ファイル
│   ├── images/                # 問題用画像
│   │   ├── road-signs/       # 道路標識画像
│   │   ├── architecture/     # 建築物画像
│   │   ├── nature/           # 自然景観画像
│   │   └── infrastructure/   # インフラ画像
│   ├── world-map.jpg         # 世界地図ベース画像
│   └── manifest.json         # PWA設定
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── globals.css       # グローバルスタイル
│   │   ├── layout.tsx        # アプリケーションレイアウト
│   │   └── page.tsx          # メインページ
│   ├── components/           # Reactコンポーネント
│   │   ├── AudioToggle.tsx   # 音声ON/OFF切り替え
│   │   ├── DetailedStats.tsx # 詳細統計表示
│   │   ├── DifficultySelector.tsx # 難易度・モード選択
│   │   ├── FlagImage.tsx     # 国旗画像表示
│   │   ├── GameComplete.tsx  # ゲーム完了画面
│   │   ├── ProblemImage.tsx  # 問題用画像表示 ⭐ 新機能
│   │   ├── PWAInstaller.tsx  # PWAインストール促進
│   │   ├── QuizCard.tsx      # 問題表示カード
│   │   ├── ScoreBoard.tsx    # スコア表示
│   │   ├── StatsModal.tsx    # 統計モーダル
│   │   ├── ThemeToggle.tsx   # ダークモード切り替え
│   │   └── WorldMap.tsx      # 世界地図表示
│   ├── contexts/
│   │   └── ThemeContext.tsx  # テーマ管理コンテキスト
│   ├── data/
│   │   ├── countryCoordinates.ts # 国座標データベース
│   │   └── questions.ts      # 問題データベース (255問)
│   ├── hooks/
│   │   ├── useGameLogic.ts   # ゲームロジック管理
│   │   ├── useOfflineStorage.ts # オフライン対応
│   │   └── useStats.ts       # 統計データ管理
│   ├── types/
│   │   └── quiz.ts           # TypeScript型定義
│   └── utils/
│       ├── audioUtils.ts     # 音声効果
│       ├── flagUtils.ts      # 国旗ユーティリティ
│       └── imageUtils.ts     # 画像管理ユーティリティ ⭐ 新機能
├── docs/                     # プロジェクト文書
│   ├── roadmap.md           # 開発ロードマップ
│   ├── image-sources.md     # 画像ソース情報
│   └── SYSTEM_ARCHITECTURE.md # このファイル
├── scripts/
│   └── download-sample-images.sh # サンプル画像DL
└── image_requirements.md    # 画像要件定義
```

## 🧩 コンポーネント構成

### Core Components (コア機能)

#### 1. **DifficultySelector.tsx** - ゲーム設定画面
```typescript
// 機能: ゲームモード・難易度選択
// 状態: 現在の問題数 255問 (54 easy, 88 medium, 113 hard)
// 特徴: 16カテゴリー別問題数表示, 3ゲームモード対応
```

#### 2. **QuizCard.tsx** - メイン問題表示
```typescript
// 機能: 問題表示, 選択肢表示, 画像表示, キーボードショートカット
// 対応画像種別:
//   - 'flag': 国旗 (FlagImage使用)
//   - 'image:xxx': 実写画像 (ProblemImage使用) ⭐ 新機能
//   - その他: 絵文字アイコン
// カテゴリー対応: 16種類の問題カテゴリー
```

#### 3. **GameComplete.tsx** - 結果表示
```typescript
// 機能: 最終スコア, カテゴリー別成績, リスタート
// 統計: useStats hookと連携
```

### Display Components (表示系)

#### 4. **WorldMap.tsx** - 世界地図表示 ⭐ 重要機能
```typescript
// 機能: 正解国の位置を世界地図上にマーカー表示
// 地図: /public/world-map.jpg (Wikimedia Commons)
// 座標: countryCoordinates.ts (150+国のlat/lng)
// 表示: SVGマーカー, アニメーション, 座標情報
```

#### 5. **FlagImage.tsx** - 国旗表示
```typescript
// 機能: 国旗画像表示, フォールバック対応
// ソース: flagsapi.com, flagcdn.com, flagpedia.net
// サイズ: 80px (オーバーフロー修正済み)
```

#### 6. **ProblemImage.tsx** - 問題画像表示 ⭐ 新機能
```typescript
// 機能: 実写画像表示, ローディング状態, エラーハンドリング
// 対応画像: 道路標識, 建築物, 自然景観, インフラ (12種類)
// フォールバック: 画像なし時の説明文表示
```

#### 7. **ScoreBoard.tsx** - スコア表示
```typescript
// 機能: リアルタイムスコア, プログレスバー, 連続正解数
// ゲームモード対応: Normal/TimeAttack/Endless
```

### Utility Components (ユーティリティ)

#### 8. **ThemeToggle.tsx** - テーマ切り替え
```typescript
// 機能: ライト/ダークモード切り替え
// 保存: localStorage永続化
```

#### 9. **AudioToggle.tsx** - 音声切り替え
```typescript
// 機能: 正解・不正解音の ON/OFF
// 音声: Web Audio API使用
```

#### 10. **PWAInstaller.tsx** - PWAインストール
```typescript
// 機能: アプリインストール促進バナー
// 対応: beforeinstallprompt イベント
```

## 📊 データ構造

### Question Data Structure (問題データ)
```typescript
interface QuizQuestion {
  id: string;                    // 問題ID
  category: string;              // カテゴリー (16種類)
  difficulty: 'easy'|'medium'|'hard';  // 難易度
  question: string;              // 問題文
  answer: string;                // 正解
  options: string[];             // 選択肢 (4択) ⭐ ランダム化実装済み
  explanation: string;           // 解説
  funFact: string;              // 豆知識
  imageUrl?: string;            // 画像URL/種別
  flagCountry?: string;         // 国旗の場合の国名
}
```

### Current Categories (現在の16カテゴリー)
```typescript
// 問題数は2025年1月時点
'flag': 124問          // 国旗クイズ
'phone': 50問          // 電話番号
'language': 20問       // 言語
'road': 10問           // 道路・標識 (画像3問含む)
'nature': 9問          // 自然・植物 (画像3問含む)
'infrastructure': 8問  // 公共物 (画像3問含む)
'architecture': 7問    // 建築 (画像3問含む)
'business': 4問        // 企業・店舗
'hemisphere': 3問      // 半球判定
'coverage': 3問        // カバレッジ
'bollard': 3問         // ボラード
'sign-meta': 3問       // 標識メタ
'script': 3問          // 文字・言語
'advanced-meta': 3問   // 上級メタ
'japan-specific': 3問  // 日本特化
'car-meta': 2問        // 車メタ
```

### Game State Structure (ゲーム状態)
```typescript
interface GameState {
  currentQuestionIndex: number;   // 現在の問題番号
  score: number;                 // スコア
  totalQuestions: number;        // 総問題数
  isGameComplete: boolean;       // ゲーム完了フラグ
  selectedAnswer: string | null; // 選択した回答
  showAnswer: boolean;           // 解答表示フラグ
  timeRemaining: number;         // 残り時間
  selectedDifficulty: DifficultyLevel; // 選択難易度
  gameMode: GameMode;            // ゲームモード
  totalTimeBonus: number;        // タイムボーナス合計
  lives?: number;                // エンドレスモードのライフ
  isEndlessMode: boolean;        // エンドレスモードフラグ
}
```

## 🎮 ゲームロジック

### Game Modes (ゲームモード)
1. **Normal Mode**: 制限時間30秒, 落ち着いて解答
2. **TimeAttack Mode**: 制限時間15秒, 速答ボーナス (+残り時間÷5ポイント)
3. **Endless Mode**: 制限時間20秒, 3ミスでゲームオーバー

### Scoring System (スコアリング)
- **基本点**: 正解 1点
- **タイムボーナス**: TimeAttackモードのみ (最大3ポイント)
- **連続正解**: ストリーク表示 (スコアへの加点なし)

### Question Selection Logic (問題選択)
```typescript
// 1. 難易度フィルタリング (指定時)
// 2. 問題シャッフル
// 3. 選択肢ランダム化 ⭐ 新機能 (正解位置の偏り修正)
// 4. 指定問題数まで切り出し
```

## 🛠️ 技術実装詳細

### State Management (状態管理)
- **React Hooks**: useState, useEffect, useCallback
- **Custom Hooks**: 
  - `useGameLogic`: ゲーム進行制御
  - `useStats`: 統計データ管理  
  - `useOfflineStorage`: オフライン対応
- **Context**: ThemeContext (ダークモード)

### Data Storage (データ保存)
- **localStorage**: 
  - テーマ設定
  - 音声設定
  - 統計データ (オフライン対応)
- **Memory**: ゲーム進行状態

### Image Handling (画像処理) ⭐ 新システム
```typescript
// imageUtils.ts - 画像データベース管理
interface ProblemImage {
  id: string;                    // 画像ID
  url: string;                   // 画像URL
  alt: string;                   // 代替テキスト
  category: string;              // カテゴリー
  country?: string;              // 関連国
  description?: string;          // 説明文
}

// 現在12画像登録:
// - 道路標識: 3画像 (stop-octagonal, yield-triangular, speed-limit-circular)
// - 建築: 3画像 (pagoda, tudor-house, colonial)
// - 自然: 3画像 (eucalyptus, birch-forest, palm-trees)  
// - インフラ: 3画像 (bollard-metal, utility-pole-concrete, mailbox-red)
```

### PWA Implementation (PWA実装)
- **Service Worker**: オフライン対応, キャッシュ管理
- **Manifest**: アプリインストール設定
- **Icons**: 各サイズ対応 (72px～512px)

### Responsive Design (レスポンシブ)
- **Breakpoints**: Tailwind CSS標準
- **Mobile-First**: スマホ優先設計
- **Touch Friendly**: タッチ操作最適化

## 🔧 設定・環境

### Development Environment (開発環境)
```bash
Node.js: 18+ 推奨
npm: 包含パッケージマネージャー
Next.js: 15.4.4 (Turbopack使用)
TypeScript: 5.0+
Tailwind CSS: 3.0+
```

### Build & Deploy (ビルド・デプロイ)
```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動  
npm start

# デプロイ: Vercel推奨 (自動デプロイ設定済み)
```

### Environment Variables (環境変数)
現在、外部環境変数は不要。全てstatic build可能。

## 🐛 既知の問題・制限事項

### 解決済み問題
- ✅ 国旗表示のオーバーフロー問題 (FlagImage size調整)
- ✅ 世界地図の座標ズレ問題 (Equirectangular projection採用)
- ✅ 選択肢の正解位置偏り (ランダム化実装)

### 現在の制限事項
- 📱 iOS Safari でのPWAインストール (ブラウザ制約)
- 🖼️ 画像の著作権・ライセンス確認が必要
- 🌐 多言語対応未実装
- 📊 サーバーサイド統計機能なし

### パフォーマンス指標
- **初回ロード**: ~800ms (Turbopack)
- **画像ロード**: 遅延読み込み対応済み
- **バンドルサイズ**: 最適化可能 (将来の改善点)

## 🚀 拡張ポイント

### 近日実装予定
1. **新カテゴリー**: 通貨、時差、気候、料理 (105問追加予定)
2. **地域特化モード**: アジア、ヨーロッパ等の地域限定問題
3. **アチーブメント**: 連続正解、満点等の実績システム
4. **ランキング**: ローカルハイスコア機能

### 技術的改善点
1. **バンドル最適化**: コード分割、Tree shaking
2. **画像最適化**: WebP対応、適応的サイズ
3. **アクセシビリティ**: WCAG 2.1 AA準拠
4. **国際化**: i18n対応

## 📞 重要な技術判断・決定事項

### アーキテクチャ決定
1. **Next.js App Router採用**: ファイルベースルーティング, RSC対応
2. **TypeScript全面採用**: 型安全性の確保
3. **Tailwind CSS**: ユーティリティファースト, 高速開発
4. **クライアントサイド完結**: サーバー不要のstatic export

### データ設計決定
1. **問題データJSON形式**: 拡張性・可読性重視
2. **選択肢配列**: ランダム化前提の設計
3. **画像参照方式**: URL直接 vs ID参照 (ID参照採用)

### UI/UX決定
1. **4択形式固定**: 選択肢数の一貫性
2. **制限時間表示**: ゲーム性とプレッシャーのバランス
3. **世界地図統合**: 学習効果の向上

---

## 🆘 緊急時の対応方法

### 開発再開手順
1. `git status` でブランチ・変更状況確認
2. `npm install` で依存関係解決
3. `npm run dev` で開発サーバー起動
4. このドキュメントとroadmap.mdで状況把握

### よくある問題と解決方法
```bash
# ポート競合エラー
→ Next.jsが自動的に別ポート (3001等) を使用

# 画像が表示されない
→ public/images/ 配下のファイル存在確認
→ scripts/download-sample-images.sh 実行

# ビルドエラー
→ TypeScript型エラーの可能性、src/types/quiz.ts確認

# 統計データ消失
→ localStorage クリアが原因、開発時は正常動作
```

---

**📝 最終更新**: 2025年1月 (Claude Code Session)  
**✍️ 作成者**: Claude AI + User Collaboration  
**🎯 目的**: 開発継続性の確保とシステム理解促進