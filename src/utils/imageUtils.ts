'use client';

export interface ProblemImage {
  id: string;
  url: string;
  alt: string;
  category: 'road-sign' | 'architecture' | 'nature' | 'infrastructure' | 'cultural';
  country?: string;
  description?: string;
}

// 実際の問題画像データベース
export const problemImages: ProblemImage[] = [
  // 道路標識
  {
    id: 'stop-sign-octagonal',
    url: '/images/road-signs/stop-octagonal.jpg',
    alt: '八角形の赤いSTOPサイン',
    category: 'road-sign',
    country: 'アメリカ',
    description: '北米で一般的な八角形のSTOPサイン'
  },
  {
    id: 'yield-triangular',
    url: '/images/road-signs/yield-triangular.jpg', 
    alt: '三角形の譲れサイン',
    category: 'road-sign',
    country: 'ヨーロッパ',
    description: 'ヨーロッパで一般的な逆三角形の譲れサイン'
  },
  {
    id: 'speed-limit-circular',
    url: '/images/road-signs/speed-limit-circular.jpg',
    alt: '円形の制限速度サイン',
    category: 'road-sign', 
    country: 'イギリス',
    description: 'イギリス・オーストラリアで見られる円形制限速度サイン'
  },
  
  // 建築物
  {
    id: 'pagoda-architecture',
    url: '/images/architecture/pagoda.jpg',
    alt: '多層の塔建築',
    category: 'architecture',
    country: '日本',
    description: 'アジア圏特有の多層塔建築'
  },
  {
    id: 'tudor-house',
    url: '/images/architecture/tudor-house.jpg',
    alt: 'チューダー様式の住宅',
    category: 'architecture',
    country: 'イギリス',
    description: 'イギリス特有の木骨造り住宅'
  },
  {
    id: 'colonial-architecture',
    url: '/images/architecture/colonial.jpg',
    alt: 'コロニアル様式建築',
    category: 'architecture',
    country: 'アメリカ',
    description: 'アメリカ東部で見られるコロニアル様式'
  },
  
  // 自然景観
  {
    id: 'eucalyptus-forest',
    url: '/images/nature/eucalyptus.jpg',
    alt: 'ユーカリの森',
    category: 'nature',
    country: 'オーストラリア',
    description: 'オーストラリア特有のユーカリの森'
  },
  {
    id: 'birch-forest',
    url: '/images/nature/birch-forest.jpg',
    alt: '白樺の森',
    category: 'nature',
    country: 'ロシア',
    description: '北欧・ロシアで見られる白樺の森'
  },
  {
    id: 'palm-trees',
    url: '/images/nature/palm-trees.jpg',
    alt: 'ヤシの木並木',
    category: 'nature',
    country: 'タイ',
    description: '熱帯地域特有のヤシの木景観'
  },
  
  // インフラ
  {
    id: 'bollard-metal',
    url: '/images/infrastructure/bollard-metal.jpg',
    alt: '金属製のボラード',
    category: 'infrastructure',
    country: 'フランス',
    description: 'ヨーロッパで一般的な金属製ボラード'
  },
  {
    id: 'utility-pole-concrete',
    url: '/images/infrastructure/utility-pole-concrete.jpg',
    alt: 'コンクリート製電柱',
    category: 'infrastructure',
    country: '日本',
    description: '日本で一般的なコンクリート製電柱'
  },
  {
    id: 'mailbox-red',
    url: '/images/infrastructure/mailbox-red.jpg',
    alt: '赤いポスト',
    category: 'infrastructure',
    country: 'イギリス',
    description: 'イギリス特有の赤い郵便ポスト'
  },
];

// 画像IDから画像情報を取得
export function getProblemImage(imageId: string): ProblemImage | undefined {
  return problemImages.find(img => img.id === imageId);
}

// カテゴリー別の画像を取得
export function getImagesByCategory(category: ProblemImage['category']): ProblemImage[] {
  return problemImages.filter(img => img.category === category);
}

// 国別の画像を取得
export function getImagesByCountry(country: string): ProblemImage[] {
  return problemImages.filter(img => img.country === country);
}

// 画像URLの有効性をチェック
export function checkImageExists(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

// フォールバック画像を取得
export function getFallbackImageForCategory(category: ProblemImage['category']): string {
  const fallbacks = {
    'road-sign': '🚦',
    'architecture': '🏛️', 
    'nature': '🌲',
    'infrastructure': '⚡',
    'cultural': '🏛️'
  };
  return fallbacks[category] || '📷';
}