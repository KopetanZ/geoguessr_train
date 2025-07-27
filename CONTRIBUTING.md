# 🤝 Geoguesser トレーニング プロジェクトへの貢献

Geoguesser トレーニングプロジェクトへの貢献に興味を持っていただき、ありがとうございます！このガイドでは、効果的に貢献する方法を説明します。

## 📋 目次

- [プロジェクトについて](#プロジェクトについて)
- [開発環境のセットアップ](#開発環境のセットアップ)
- [貢献の方法](#貢献の方法)
- [コーディング規約](#コーディング規約)
- [プルリクエストのプロセス](#プルリクエストのプロセス)

## 🎯 プロジェクトについて

このプロジェクトは、Geoguessrプレイヤーの国判別スキル向上を目的としたWebクイズアプリです。

### 主な目標
- 楽しく学習できるユーザーエクスペリエンス
- Geoguessrで実際に役立つ知識の提供
- 高品質でメンテナブルなコード

## 🛠️ 開発環境のセットアップ

### 必要な環境
- **Node.js**: 18.x 以上
- **npm**: 9.x 以上
- **Git**: 最新版

### セットアップ手順

1. **リポジトリをフォーク & クローン**
   ```bash
   git clone https://github.com/your-username/geoguesser-training.git
   cd geoguesser-training
   ```

2. **依存関係をインストール**
   ```bash
   npm install
   ```

3. **開発サーバーを起動**
   ```bash
   npm run dev
   ```

4. **ブラウザで確認**
   [http://localhost:3000](http://localhost:3000) にアクセス

## 🚀 貢献の方法

### 1. バグ報告
- [Issues](https://github.com/your-username/geoguesser-training/issues) で報告
- バグレポートテンプレートを使用
- 再現手順を明確に記載

### 2. 機能要望
- [Issues](https://github.com/your-username/geoguesser-training/issues) で提案
- 機能要望テンプレートを使用
- Geoguessrトレーニングとの関連性を説明

### 3. コード貢献

#### 🎯 優先度の高い貢献領域
- **クイズ問題の追加**: 新しい国や地域の問題
- **UI/UX改善**: ユーザビリティの向上
- **アクセシビリティ**: 誰でも使いやすいアプリに
- **パフォーマンス最適化**: より高速な読み込み

#### 🛑 避けるべき変更
- 大規模なアーキテクチャ変更（事前に議論が必要）
- 依存関係の大幅な変更
- 破壊的変更

## 📏 コーディング規約

### TypeScript/React
```typescript
// ✅ Good
interface QuizQuestion {
  id: string;
  category: 'flag' | 'language' | 'phone' | 'architecture';
  question: string;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswer }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      {/* ... */}
    </div>
  );
};

// ❌ Bad
const QuizCard = (props: any) => {
  return <div style={{backgroundColor: 'white'}}>
    {/* ... */}
  </div>
}
```

### ファイル命名規約
- **コンポーネント**: PascalCase (`QuizCard.tsx`)
- **フック**: camelCase + use prefix (`useGameLogic.ts`)
- **型定義**: camelCase (`quiz.ts`)
- **ユーティリティ**: camelCase (`helpers.ts`)

### コミットメッセージ
[Conventional Commits](https://conventionalcommits.org/ja/) に従う

```bash
# 例
feat(quiz): add architecture category questions
fix(timer): resolve timer not stopping on answer
docs(readme): update deployment instructions
style(ui): improve mobile responsiveness
```

## 🔄 プルリクエストのプロセス

### 事前チェック
```bash
# リンターとビルドを確認
npm run lint
npm run build
npm run type-check
```

### プルリクエスト作成

1. **ブランチ作成**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **変更をコミット**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

3. **プッシュ**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **プルリクエスト作成**
   - 変更内容を明確に説明
   - 関連するIssueがあればリンク
   - スクリーンショットを添付（UI変更の場合）

### レビュープロセス
- 自動CI/CDチェックが実行される
- コードレビューが行われる
- フィードバックがあれば修正
- 承認後にマージされる

## 🎮 クイズ問題の追加

新しいクイズ問題を追加する場合：

```typescript
// src/data/questions.ts に追加
{
  id: 'unique-id',
  category: 'flag', // flag, language, phone, architecture
  question: '問題文',
  answer: '正解',
  options: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
  explanation: '解説',
  funFact: '豆知識',
  imageUrl: '🇯🇵' // 絵文字または画像URL（オプション）
}
```

### 問題作成のガイドライン
- **正確性**: 事実に基づいた正確な情報
- **教育的価値**: Geoguessrで実際に役立つ知識
- **バランス**: 各カテゴリーの問題数のバランス
- **多様性**: 様々な地域・国をカバー

## 📞 質問・サポート

- **一般的な質問**: [Discussions](https://github.com/your-username/geoguesser-training/discussions)
- **バグ報告**: [Issues](https://github.com/your-username/geoguesser-training/issues)
- **機能要望**: [Issues](https://github.com/your-username/geoguesser-training/issues)

## 🏆 貢献者の皆様

全ての貢献者の皆様に感謝いたします！プロジェクトの向上にご協力いただき、ありがとうございます。

---

**Happy Contributing! 🌍✨**