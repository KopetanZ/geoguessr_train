// 国名から国コードへのマッピング
const countryCodeMap: Record<string, string> = {
  '日本': 'jp',
  'カナダ': 'ca',
  'ブラジル': 'br',
  'イタリア': 'it',
  'スペイン': 'es',
  'イギリス': 'gb',
  'フランス': 'fr',
  'ドイツ': 'de',
  'アメリカ': 'us',
  'ロシア': 'ru',
  '韓国': 'kr',
  '台湾': 'tw',
  'バングラデシュ': 'bd',
  'ペルー': 'pe',
  'レバノン': 'lb',
  'オーストリア': 'at',
  'アルゼンチン': 'ar',
  'ポルトガル': 'pt',
  'コロンビア': 'co',
  'メキシコ': 'mx',
  'ハンガリー': 'hu',
  'ブルガリア': 'bg',
  'タイ': 'th',
  'ベトナム': 'vn',
  'カンボジア': 'kh',
  'インドネシア': 'id',
  'オランダ': 'nl',
  'ベルギー': 'be',
  'スイス': 'ch',
  'モナコ': 'mc',
  'デンマーク': 'dk',
  'ポーランド': 'pl',
  'ウクライナ': 'ua',
  '中国': 'cn',
  'アイルランド': 'ie',
  'ギリシャ': 'gr'
};

// 国旗画像のサイズオプション
export type FlagSize = 16 | 24 | 32 | 48 | 64 | 128 | 256;

/**
 * 国名から国旗画像URLを生成する
 * Flagpedia API (https://flagpedia.net/) を使用
 */
export function getFlagImageUrl(countryName: string, size: FlagSize = 128): string {
  const countryCode = countryCodeMap[countryName];
  
  if (!countryCode) {
    console.warn(`Country code not found for: ${countryName}`);
    // フォールバック用のプレースホルダー画像
    return `https://via.placeholder.com/${size}x${Math.floor(size * 0.67)}/cccccc/666666?text=?`;
  }
  
  // Flagpedia APIを使用（無料、高品質、信頼性が高い）
  return `https://flagpedia.net/data/flags/w${size}/${countryCode}.webp`;
}

/**
 * PNG形式の国旗画像URLを取得（WebP未対応ブラウザ用）
 */
export function getFlagImageUrlPng(countryName: string, size: FlagSize = 128): string {
  const countryCode = countryCodeMap[countryName];
  
  if (!countryCode) {
    return `https://via.placeholder.com/${size}x${Math.floor(size * 0.67)}/cccccc/666666?text=?`;
  }
  
  return `https://flagpedia.net/data/flags/w${size}/${countryCode}.png`;
}

/**
 * 複数のフォーマットでの国旗画像URLを取得
 */
export function getFlagImageSources(countryName: string, size: FlagSize = 128) {
  return {
    webp: getFlagImageUrl(countryName, size),
    png: getFlagImageUrlPng(countryName, size),
    fallback: `https://via.placeholder.com/${size}x${Math.floor(size * 0.67)}/f0f0f0/999999?text=${encodeURIComponent(countryName)}`
  };
}

/**
 * 国名リストから利用可能な国旗があるかチェック
 */
export function hasCountryFlag(countryName: string): boolean {
  return countryName in countryCodeMap;
}

/**
 * 利用可能な全ての国のリストを取得
 */
export function getAvailableCountries(): string[] {
  return Object.keys(countryCodeMap);
}