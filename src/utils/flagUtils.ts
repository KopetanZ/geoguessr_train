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
  'ギリシャ': 'gr',
  // 以下、追加の国々
  'インド': 'in',
  '南アフリカ': 'za',
  'ネパール': 'np',
  'セーシェル': 'sc',
  'スウェーデン': 'se',
  'パプアニューギニア': 'pg',
  'オーストラリア': 'au',
  'トルコ': 'tr',
  'エジプト': 'eg',
  'サウジアラビア': 'sa',
  'ノルウェー': 'no',
  'フィンランド': 'fi',
  'チェコ': 'cz',
  'フィリピン': 'ph',
  'マレーシア': 'my',
  'シンガポール': 'sg',
  'ニュージーランド': 'nz',
  'アイスランド': 'is',
  'ウルグアイ': 'uy',
  'コスタリカ': 'cr',
  'イスラエル': 'il',
  'ヨルダン': 'jo',
  'ケニア': 'ke',
  'エチオピア': 'et',
  'ガーナ': 'gh',
  'ナイジェリア': 'ng',
  'チリ': 'cl',
  'ベネズエラ': 've',
  'エクアドル': 'ec',
  'パラグアイ': 'py',
  'ボリビア': 'bo',
  'ジャマイカ': 'jm',
  'スリランカ': 'lk',
  'ミャンマー': 'mm',
  'ラオス': 'la',
  'ブルネイ': 'bn',
  'モンゴル': 'mn',
  'カザフスタン': 'kz',
  'ウズベキスタン': 'uz',
  'アフガニスタン': 'af',
  'パキスタン': 'pk',
  'イラン': 'ir',
  'イラク': 'iq',
  'シリア': 'sy',
  'クウェート': 'kw',
  'アラブ首長国連邦': 'ae',
  'カタール': 'qa',
  'バーレーン': 'bh',
  'オマーン': 'om',
  'イエメン': 'ye',
  'リビア': 'ly',
  'チュニジア': 'tn',
  'アルジェリア': 'dz',
  'モロッコ': 'ma',
  'スーダン': 'sd',
  'セネガル': 'sn',
  'カメルーン': 'cm',
  'コートジボワール': 'ci',
  'ウガンダ': 'ug',
  'タンザニア': 'tz',
  'ルワンダ': 'rw',
  'ザンビア': 'zm',
  'ジンバブエ': 'zw',
  'ボツワナ': 'bw',
  'ナミビア': 'na',
  'マダガスカル': 'mg',
  'モーリシャス': 'mu',
  'フィジー': 'fj',
  // 追加の国々（重複を防ぐため、上記にないもののみ）
  'ブータン': 'bt',
  'コモロ': 'km',
  'サモア': 'ws',
  'サンマリノ': 'sm',
  'バチカン': 'va',
  'キプロス': 'cy',
  'マルタ': 'mt',
  'エストニア': 'ee',
  'ラトビア': 'lv',
  'リトアニア': 'lt',
  'スロバキア': 'sk',
  'スロベニア': 'si',
  'クロアチア': 'hr',
  'セルビア': 'rs',
  'モンテネグロ': 'me',
  'ボスニア・ヘルツェゴビナ': 'ba',
  '北マケドニア': 'mk',
  'アルバニア': 'al',
  'モルドバ': 'md',
  'ベラルーシ': 'by',
  'ルーマニア': 'ro',
  'ジョージア': 'ge',
  'アルメニア': 'am',
  'アゼルバイジャン': 'az',
  'キルギス': 'kg',
  'タジキスタン': 'tj',
  'トルクメニスタン': 'tm',
  // アフリカの追加国（重複なし）
  'マリ': 'ml',
  'ブルキナファソ': 'bf',
  'ニジェール': 'ne',
  'チャド': 'td',
  '中央アフリカ': 'cf',
  'ガボン': 'ga',
  '赤道ギニア': 'gq',
  'コンゴ共和国': 'cg',
  'コンゴ民主共和国': 'cd',
  'アンゴラ': 'ao',
  'マラウイ': 'mw',
  'モザンビーク': 'mz',
  'スワジランド': 'sz',
  'レソト': 'ls',
  'ジブチ': 'dj',
  'ソマリア': 'so',
  'エリトリア': 'er',
  '南スーダン': 'ss',
  'リベリア': 'lr',
  'シエラレオネ': 'sl',
  'ギニア': 'gn',
  'ギニアビサウ': 'gw',
  'カーボベルデ': 'cv',
  'サントメ・プリンシペ': 'st',
  // アメリカ大陸の追加国（重複なし）
  'ニカラグア': 'ni',
  'ホンジュラス': 'hn',
  'エルサルバドル': 'sv',
  'グアテマラ': 'gt',
  'ベリーズ': 'bz',
  'パナマ': 'pa',
  'スリナム': 'sr',
  'ガイアナ': 'gy',
  'フランス領ギアナ': 'gf',
  'トリニダード・トバゴ': 'tt',
  'バルバドス': 'bb',
  'グレナダ': 'gd',
  'セントビンセントおよびグレナディーン諸島': 'vc',
  'セントルシア': 'lc',
  'ドミニカ': 'dm',
  'アンティグア・バーブーダ': 'ag',
  'セントクリストファー・ネイビス': 'kn',
  'ハイチ': 'ht',
  'ドミニカ共和国': 'do',
  'キューバ': 'cu',
  'バハマ': 'bs',
  // オセアニアの追加国（重複なし）
  'トンガ': 'to',
  'クック諸島': 'ck',
  'ニウエ': 'nu'
};

// 国旗画像のサイズオプション (高さベース)
export type FlagSize = 20 | 40 | 80 | 120 | 160;

/**
 * 国名から国旗画像URLを生成する
 * Flagpedia API (https://flagpedia.net/) を使用
 */
export function getFlagImageUrl(countryName: string, size: FlagSize = 80): string {
  const countryCode = countryCodeMap[countryName];
  
  if (!countryCode) {
    console.warn(`Country code not found for: ${countryName}`);
    // フォールバック用のプレースホルダー画像
    return `https://via.placeholder.com/${Math.floor(size * 1.5)}x${size}/cccccc/666666?text=?`;
  }
  
  // Flagpedia APIを使用（高さベースのサイズ指定）
  return `https://flagpedia.net/data/flags/h${size}/${countryCode}.png`;
}

/**
 * WebP形式の国旗画像URLを取得（対応ブラウザ用）
 */
export function getFlagImageUrlWebp(countryName: string, size: FlagSize = 80): string {
  const countryCode = countryCodeMap[countryName];
  
  if (!countryCode) {
    return `https://via.placeholder.com/${Math.floor(size * 1.5)}x${size}/cccccc/666666?text=?`;
  }
  
  return `https://flagpedia.net/data/flags/h${size}/${countryCode}.webp`;
}

/**
 * REST Countries APIを使用して国旗を取得
 */
export function getRestCountriesFlagUrl(countryName: string): string {
  const countryCode = countryCodeMap[countryName];
  
  if (!countryCode) {
    return '';
  }
  
  // REST Countries API（SVGフォーマット、高品質）
  return `https://flagcdn.com/w320/${countryCode}.png`;
}

/**
 * FlagsAPI.comを使用して国旗を取得
 */
export function getFlagsApiUrl(countryName: string, size: FlagSize = 80): string {
  const countryCode = countryCodeMap[countryName];
  
  if (!countryCode) {
    return '';
  }
  
  // サイズをFlagsAPIの対応サイズにマッピング
  let apiSize = 64;
  if (size <= 24) apiSize = 24;
  else if (size <= 32) apiSize = 32;
  else if (size <= 48) apiSize = 48;
  else apiSize = 64;
  
  // FlagsAPI.com（フラットスタイル、高品質）
  return `https://flagsapi.com/${countryCode.toUpperCase()}/flat/${apiSize}.png`;
}

/**
 * 複数のフォーマットでの国旗画像URLを取得（優先順位付き）
 */
export function getFlagImageSources(countryName: string, size: FlagSize = 80) {
  return {
    flagsapi: getFlagsApiUrl(countryName, size),
    flagcdn: getRestCountriesFlagUrl(countryName),
    flagpedia: getFlagImageUrl(countryName, size),
    fallback: `https://via.placeholder.com/${Math.floor(size * 1.5)}x${size}/f0f0f0/999999?text=${encodeURIComponent(countryName)}`
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

/**
 * デバッグ用：全てのAPIソースのURLを取得
 */
export function getAllFlagUrls(countryName: string, size: FlagSize = 80) {
  const sources = getFlagImageSources(countryName, size);
  return {
    country: countryName,
    countryCode: countryCodeMap[countryName] || 'NOT_FOUND',
    sources: {
      flagsapi: sources.flagsapi,
      flagcdn: sources.flagcdn,
      flagpedia: sources.flagpedia,
      fallback: sources.fallback
    }
  };
}

/**
 * 国コードマッピングの統計情報を取得
 */
export function getFlagMappingStats() {
  const total = Object.keys(countryCodeMap).length;
  const continents = {
    asia: Object.keys(countryCodeMap).filter(country => 
      ['日本', '韓国', '中国', '台湾', 'インド', 'タイ', 'ベトナム', 'シンガポール', 'マレーシア', 'インドネシア', 'フィリピン', 'ミャンマー', 'カンボジア', 'ラオス', 'ブルネイ', 'バングラデシュ', 'スリランカ', 'ネパール', 'ブータン', 'モンゴル', 'カザフスタン', 'ウズベキスタン', 'キルギス', 'タジキスタン', 'トルクメニスタン', 'アフガニスタン', 'パキスタン', 'イラン', 'イラク', 'シリア', 'レバノン', 'ヨルダン', 'イスラエル', 'クウェート', 'アラブ首長国連邦', 'カタール', 'バーレーン', 'オマーン', 'イエメン', 'サウジアラビア', 'トルコ', 'ジョージア', 'アルメニア', 'アゼルバイジャン'].includes(country)
    ).length,
    europe: Object.keys(countryCodeMap).filter(country => 
      ['イギリス', 'フランス', 'ドイツ', 'イタリア', 'スペイン', 'ポルトガル', 'オランダ', 'ベルギー', 'スイス', 'オーストリア', 'ノルウェー', 'スウェーデン', 'フィンランド', 'デンマーク', 'アイスランド', 'ポーランド', 'チェコ', 'スロバキア', 'ハンガリー', 'ルーマニア', 'ブルガリア', 'ギリシャ', 'クロアチア', 'セルビア', 'モンテネグロ', 'ボスニア・ヘルツェゴビナ', '北マケドニア', 'アルバニア', 'スロベニア', 'エストニア', 'ラトビア', 'リトアニア', 'ウクライナ', 'ベラルーシ', 'モルドバ', 'ロシア', 'モナコ', 'アンドラ', 'リヒテンシュタイン', 'ルクセンブルク', 'サンマリノ', 'バチカン', 'マルタ', 'キプロス', 'アイルランド'].includes(country)
    ).length,
    africa: Object.keys(countryCodeMap).filter(country => 
      ['エジプト', 'リビア', 'チュニジア', 'アルジェリア', 'モロッコ', 'スーダン', '南スーダン', 'エチオピア', 'エリトリア', 'ジブチ', 'ソマリア', 'ケニア', 'ウガンダ', 'タンザニア', 'ルワンダ', 'ブルンジ', 'コンゴ民主共和国', 'コンゴ共和国', '中央アフリカ', 'チャド', 'カメルーン', 'ナイジェリア', 'ニジェール', 'マリ', 'ブルキナファソ', 'ガーナ', 'コートジボワール', 'リベリア', 'シエラレオネ', 'ギニア', 'ギニアビサウ', 'セネガル', 'ガンビア', 'カーボベルデ', 'サントメ・プリンシペ', 'ガボン', '赤道ギニア', 'アンゴラ', 'ザンビア', 'マラウイ', 'モザンビーク', 'ジンバブエ', 'ボツワナ', 'ナミビア', '南アフリカ', 'レソト', 'スワジランド', 'マダガスカル', 'モーリシャス', 'セーシェル', 'コモロ'].includes(country)
    ).length,
    americas: Object.keys(countryCodeMap).filter(country => 
      ['アメリカ', 'カナダ', 'メキシコ', 'グアテマラ', 'ベリーズ', 'エルサルバドル', 'ホンジュラス', 'ニカラグア', 'コスタリカ', 'パナマ', 'キューバ', 'ハイチ', 'ドミニカ共和国', 'ジャマイカ', 'バハマ', 'トリニダード・トバゴ', 'バルバドス', 'セントルシア', 'セントビンセントおよびグレナディーン諸島', 'グレナダ', 'ドミニカ', 'アンティグア・バーブーダ', 'セントクリストファー・ネイビス', 'ブラジル', 'アルゼンチン', 'チリ', 'ペルー', 'エクアドル', 'コロンビア', 'ベネズエラ', 'ガイアナ', 'スリナム', 'フランス領ギアナ', 'ウルグアイ', 'パラグアイ', 'ボリビア'].includes(country)
    ).length,
    oceania: Object.keys(countryCodeMap).filter(country => 
      ['オーストラリア', 'ニュージーランド', 'フィジー', 'パプアニューギニア', 'ソロモン諸島', 'バヌアツ', 'サモア', 'トンガ', 'ツバル', 'ナウル', 'キリバス', 'パラオ', 'ミクロネシア', 'マーシャル諸島', 'クック諸島', 'ニウエ'].includes(country)
    ).length
  };
  
  return {
    total,
    continents,
    coverage: `${total}カ国対応`
  };
}