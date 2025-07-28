# 推奨画像ソース

## 著作権フリー画像サイト

### 1. **Unsplash** (https://unsplash.com/)
- ライセンス: Unsplash License (商用利用可)
- 高品質な写真が豊富
- 検索例: "stop sign", "pagoda", "eucalyptus forest"

### 2. **Pixabay** (https://pixabay.com/)
- ライセンス: Pixabay License (商用利用可)
- 写真、イラスト、ベクター画像
- 日本語検索も可能

### 3. **Pexels** (https://pexels.com/)
- ライセンス: Pexels License (商用利用可)
- 高解像度写真
- カテゴリ別検索が便利

### 4. **Wikimedia Commons** (https://commons.wikimedia.org/)
- ライセンス: 各画像ごとに異なる（CC0, CC BY-SA等）
- 教育的な画像が豊富
- 地理・建築・インフラ系の画像が多い

## 各カテゴリの推奨検索キーワード

### 道路標識
- 英語: "stop sign octagonal", "yield sign triangular", "speed limit circular"
- 日本語: "道路標識", "停止標識", "制限速度"

### 建築物
- 英語: "pagoda architecture", "tudor house", "colonial building"
- 日本語: "塔建築", "チューダー様式", "コロニアル建築"

### 自然景観
- 英語: "eucalyptus forest", "birch trees", "palm tree avenue"
- 日本語: "ユーカリ林", "白樺の森", "ヤシの木並木"

### インフラ
- 英語: "french bollard", "concrete utility pole", "british red postbox"
- 日本語: "ボラード", "コンクリート電柱", "赤いポスト"

## 画像選択の注意点

1. **解像度**: 最低400x300px、推奨800x600px以上
2. **アスペクト比**: 4:3または16:9が理想的
3. **ファイルサイズ**: 1MB以下推奨（表示速度のため）
4. **画質**: 圧縮しすぎない、鮮明な画像を選ぶ
5. **内容**: 問題に直接関係する特徴が明確に写っているもの

## ファイル命名規則

画像ファイル名は以下の規則に従ってください：
- 小文字のみ使用
- 単語間はハイフン(-)で区切る
- 拡張子は.jpg推奨
- 例: `stop-sign-octagonal.jpg`, `tudor-house-example.jpg`

## 画像追加手順

1. 上記ソースから適切な画像をダウンロード
2. リサイズ・最適化 (必要に応じて)
3. `public/images/カテゴリ/ファイル名.jpg` に配置
4. アプリで表示を確認
5. 必要に応じて `src/utils/imageUtils.ts` の説明文を調整