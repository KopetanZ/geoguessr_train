# 🌍 Geoguesser トレーニング

![Demo](https://img.shields.io/badge/Demo-Live-green) ![Next.js](https://img.shields.io/badge/Next.js-15-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC)

Geoguessrでの国判別スキル向上のための最新Webクイズアプリです。国旗、言語、電話番号、建築様式から国を当てるゲームを通じて、楽しみながら地理の知識を深めることができます。

## 📸 スクリーンショット

> **注意**: アプリのデプロイ後、実際のスクリーンショットに更新してください

```
🎮 ゲーム画面の例:

┌─────────────────────────────────────┐
│ 🌍 Geoguesser トレーニング           │
│ 国旗・言語・電話番号・建築で国を当てよう！ │
├─────────────────────────────────────┤
│ 問題 3/10                スコア: 2   │
│ [████████░░] 80%         🔥連続: 1   │
├─────────────────────────────────────┤
│ 🏁 国旗                    ⏱️ 25s   │
│                                     │
│           🇯🇵                      │
│                                     │
│ この国旗はどの国のものですか？         │
│                                     │
│ A. 日本     B. 韓国                │
│ C. 台湾     D. バングラデシュ        │
│                                     │
│ ✅ 正解: 日本                       │
│ 日の丸と呼ばれる白地に赤い丸の旗です。  │
│                                     │
│ 💡 豆知識: 日本の国旗は世界で最も     │
│ シンプルなデザインの一つです。        │
└─────────────────────────────────────┘
```

## 🚀 機能

### クイズカテゴリー
- **🏁 国旗**: 世界各国の国旗から国を当てる
- **💬 言語**: 挨拶やフレーズから言語と国を推測
- **📞 電話番号**: 国際電話番号から国を特定
- **🏛️ 建築**: 建築様式や特徴から地域を推測

### ゲーム機能
- ⏱️ **制限時間**: 各問題30秒の時間制限
- 📊 **スコア表示**: リアルタイムスコア追跡
- 🔥 **連続正解**: ストリーク機能
- 💡 **豆知識**: 各問題の解説と興味深い事実
- 📱 **レスポンシブ**: PC・スマホ両対応
- 🎯 **カテゴリー別統計**: 得意・不得意分野の把握

## 🎮 ゲームの流れ

1. **問題表示**: カテゴリーアイコンと問題文が表示
2. **4択回答**: A、B、C、Dから正解を選択
3. **即座判定**: 正解・不正解を色分けで表示
4. **豆知識**: 解答後に関連する豆知識を表示
5. **結果画面**: 全10問終了後、カテゴリー別成績を表示

## 🏆 活用方法

### Geoguessrプレイヤー向け
- 国の特徴的なヒントを覚える
- 電話番号や言語での国判別練習
- 建築様式から地域を推測する力を養う

### 地理学習者向け
- 楽しみながら世界地理を学習
- 国旗と国名の関連付け
- 各国の文化的特徴を理解

## 🛠️ 技術スタック

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **State Management**: React Hooks

## 📦 セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番環境で起動
npm start
```

## 🌐 デプロイ

### Vercel でのデプロイ（推奨）

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/geoguesser-training)

1. **GitHubにプッシュ**
   ```bash
   git add .
   git commit -m "Initial commit: Geoguesser training app"
   git remote add origin https://github.com/your-username/geoguesser-training.git
   git push -u origin main
   ```

2. **Vercelでデプロイ**
   - [Vercel](https://vercel.com) にログイン
   - "New Project" をクリック
   - GitHubリポジトリを選択
   - プロジェクト設定を確認（Next.jsが自動検出される）
   - "Deploy" をクリック

3. **自動デプロイ設定**
   - mainブランチへのプッシュで自動デプロイ
   - プレビューURLで確認可能
   - 本番環境URLが発行される

### その他のデプロイオプション

- **Netlify**: `npm run build` してdistフォルダをアップロード
- **GitHub Pages**: Static Export設定が必要
- **Firebase Hosting**: Firebase CLIでデプロイ可能

## 🎯 今後の予定

- [ ] 難易度設定（初級・中級・上級）
- [ ] 更多くのクイズカテゴリー追加
- [ ] ユーザープロフィール機能
- [ ] リーダーボード
- [ ] ダークモード対応
- [ ] 多言語対応

## 🛠️ 開発者向け情報

### プロジェクト構造

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # グローバルスタイル
│   ├── layout.tsx      # レイアウトコンポーネント
│   └── page.tsx        # メインページ
├── components/         # Reactコンポーネント
│   ├── GameComplete.tsx # ゲーム完了画面
│   ├── QuizCard.tsx    # クイズカード
│   └── ScoreBoard.tsx  # スコアボード
├── data/              # データとロジック
│   └── questions.ts   # クイズ問題データ
├── hooks/             # カスタムフック
│   └── useGameLogic.ts # ゲームロジック
└── types/             # TypeScript型定義
    └── quiz.ts        # クイズ関連の型
```

### 技術的詳細

- **フレームワーク**: Next.js 15 with App Router
- **型システム**: TypeScript 5.0
- **スタイリング**: Tailwind CSS 3.0
- **状態管理**: React Hooks (useState, useEffect, useCallback)
- **ビルドツール**: Turbopack (開発時)
- **リンター**: ESLint + Next.js config
- **デプロイ**: Vercel (Zero-config deployment)

### パフォーマンス

- **初期ロード**: ~105KB (First Load JS)
- **コード分割**: 自動的に実行
- **画像最適化**: Next.js Image component使用
- **静的生成**: Build時にページを事前生成

## 🤝 コントリビューション

### バグ報告・機能要望

1. [Issues](https://github.com/your-username/geoguesser-training/issues) で報告
2. 明確なタイトルと詳細な説明を記載
3. 再現手順があれば含める

### 開発に参加

1. **フォーク & クローン**
   ```bash
   git clone https://github.com/your-username/geoguesser-training.git
   cd geoguesser-training
   npm install
   ```

2. **機能ブランチ作成**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **開発 & テスト**
   ```bash
   npm run dev      # 開発サーバー
   npm run build    # ビルドテスト
   npm run lint     # リンター実行
   ```

4. **プルリクエスト**
   - 変更内容を明確に説明
   - テストが通ることを確認
   - スクリーンショットがあれば添付

### コントリビューションガイドライン

- 🎯 **コミットメッセージ**: [Conventional Commits](https://conventionalcommits.org/ja/)に従う
- 🔧 **コード品質**: ESLintルールに準拠
- 📱 **レスポンシブ**: モバイルファーストで開発
- ♿ **アクセシビリティ**: WCAG 2.1 AA基準を目指す

## 📄 ライセンス

MIT License

---

**Happy Guessing! 🌍✨**
