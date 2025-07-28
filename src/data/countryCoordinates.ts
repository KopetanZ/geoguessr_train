// 世界各国の座標データ（首都または地理的中心点）
export interface CountryCoordinate {
  name: string;
  lat: number;
  lng: number;
  continent: string;
}

export const countryCoordinates: { [key: string]: CountryCoordinate } = {
  // アジア
  '日本': { name: '日本', lat: 36.2048, lng: 138.2529, continent: 'アジア' },
  '中国': { name: '中国', lat: 35.8617, lng: 104.1954, continent: 'アジア' },
  '韓国': { name: '韓国', lat: 35.9078, lng: 127.7669, continent: 'アジア' },
  'インド': { name: 'インド', lat: 20.5937, lng: 78.9629, continent: 'アジア' },
  'タイ': { name: 'タイ', lat: 15.8700, lng: 100.9925, continent: 'アジア' },
  'ベトナム': { name: 'ベトナム', lat: 14.0583, lng: 108.2772, continent: 'アジア' },
  'インドネシア': { name: 'インドネシア', lat: -0.7893, lng: 113.9213, continent: 'アジア' },
  'フィリピン': { name: 'フィリピン', lat: 12.8797, lng: 121.7740, continent: 'アジア' },
  'マレーシア': { name: 'マレーシア', lat: 4.2105, lng: 101.9758, continent: 'アジア' },
  'シンガポール': { name: 'シンガポール', lat: 1.3521, lng: 103.8198, continent: 'アジア' },
  'モンゴル': { name: 'モンゴル', lat: 46.8625, lng: 103.8467, continent: 'アジア' },
  'カザフスタン': { name: 'カザフスタン', lat: 48.0196, lng: 66.9237, continent: 'アジア' },
  'ウズベキスタン': { name: 'ウズベキスタン', lat: 41.3775, lng: 64.5853, continent: 'アジア' },

  // ヨーロッパ
  'ドイツ': { name: 'ドイツ', lat: 51.1657, lng: 10.4515, continent: 'ヨーロッパ' },
  'フランス': { name: 'フランス', lat: 46.2276, lng: 2.2137, continent: 'ヨーロッパ' },
  'イタリア': { name: 'イタリア', lat: 41.8719, lng: 12.5674, continent: 'ヨーロッパ' },
  'スペイン': { name: 'スペイン', lat: 40.4637, lng: -3.7492, continent: 'ヨーロッパ' },
  'イギリス': { name: 'イギリス', lat: 55.3781, lng: -3.4360, continent: 'ヨーロッパ' },
  'ロシア': { name: 'ロシア', lat: 61.5240, lng: 105.3188, continent: 'ヨーロッパ' },
  'ポーランド': { name: 'ポーランド', lat: 51.9194, lng: 19.1451, continent: 'ヨーロッパ' },
  'オランダ': { name: 'オランダ', lat: 52.1326, lng: 5.2913, continent: 'ヨーロッパ' },
  'ベルギー': { name: 'ベルギー', lat: 50.5039, lng: 4.4699, continent: 'ヨーロッパ' },
  'スイス': { name: 'スイス', lat: 46.8182, lng: 8.2275, continent: 'ヨーロッパ' },
  'オーストリア': { name: 'オーストリア', lat: 47.5162, lng: 14.5501, continent: 'ヨーロッパ' },
  'チェコ': { name: 'チェコ', lat: 49.8175, lng: 15.4730, continent: 'ヨーロッパ' },
  'スウェーデン': { name: 'スウェーデン', lat: 60.1282, lng: 18.6435, continent: 'ヨーロッパ' },
  'ノルウェー': { name: 'ノルウェー', lat: 60.4720, lng: 8.4689, continent: 'ヨーロッパ' },
  'デンマーク': { name: 'デンマーク', lat: 56.2639, lng: 9.5018, continent: 'ヨーロッパ' },
  'フィンランド': { name: 'フィンランド', lat: 61.9241, lng: 25.7482, continent: 'ヨーロッパ' },

  // 北アメリカ
  'アメリカ': { name: 'アメリカ', lat: 37.0902, lng: -95.7129, continent: '北アメリカ' },
  'カナダ': { name: 'カナダ', lat: 56.1304, lng: -106.3468, continent: '北アメリカ' },
  'メキシコ': { name: 'メキシコ', lat: 23.6345, lng: -102.5528, continent: '北アメリカ' },

  // 南アメリカ
  'ブラジル': { name: 'ブラジル', lat: -14.2350, lng: -51.9253, continent: '南アメリカ' },
  'アルゼンチン': { name: 'アルゼンチン', lat: -38.4161, lng: -63.6167, continent: '南アメリカ' },
  'チリ': { name: 'チリ', lat: -35.6751, lng: -71.5430, continent: '南アメリカ' },
  'ペルー': { name: 'ペルー', lat: -9.1900, lng: -75.0152, continent: '南アメリカ' },
  'コロンビア': { name: 'コロンビア', lat: 4.5709, lng: -74.2973, continent: '南アメリカ' },
  'ベネズエラ': { name: 'ベネズエラ', lat: 6.4238, lng: -66.5897, continent: '南アメリカ' },

  // アフリカ
  'エジプト': { name: 'エジプト', lat: 26.0975, lng: 31.4917, continent: 'アフリカ' },
  '南アフリカ': { name: '南アフリカ', lat: -30.5595, lng: 22.9375, continent: 'アフリカ' },
  'ナイジェリア': { name: 'ナイジェリア', lat: 9.0820, lng: 8.6753, continent: 'アフリカ' },
  'ケニア': { name: 'ケニア', lat: -0.0236, lng: 37.9062, continent: 'アフリカ' },
  'モロッコ': { name: 'モロッコ', lat: 31.7917, lng: -7.0926, continent: 'アフリカ' },
  'エチオピア': { name: 'エチオピア', lat: 9.1450, lng: 40.4897, continent: 'アフリカ' },
  'ガーナ': { name: 'ガーナ', lat: 7.9465, lng: -1.0232, continent: 'アフリカ' },

  // オセアニア
  'オーストラリア': { name: 'オーストラリア', lat: -25.2744, lng: 133.7751, continent: 'オセアニア' },
  'ニュージーランド': { name: 'ニュージーランド', lat: -40.9006, lng: 174.8860, continent: 'オセアニア' },
  'パプアニューギニア': { name: 'パプアニューギニア', lat: -6.3150, lng: 143.9555, continent: 'オセアニア' },

  // 中東
  'サウジアラビア': { name: 'サウジアラビア', lat: 23.8859, lng: 45.0792, continent: '中東' },
  'イラン': { name: 'イラン', lat: 32.4279, lng: 53.6880, continent: '中東' },
  'トルコ': { name: 'トルコ', lat: 38.9637, lng: 35.2433, continent: '中東' },
  'イスラエル': { name: 'イスラエル', lat: 31.0461, lng: 34.8516, continent: '中東' },
  'アラブ首長国連邦': { name: 'アラブ首長国連邦', lat: 23.4241, lng: 53.8478, continent: '中東' },

  // その他のヨーロッパ
  'アイスランド': { name: 'アイスランド', lat: 64.9631, lng: -19.0208, continent: 'ヨーロッパ' },
  'ギリシャ': { name: 'ギリシャ', lat: 39.0742, lng: 21.8243, continent: 'ヨーロッパ' },
  'ポルトガル': { name: 'ポルトガル', lat: 39.3999, lng: -8.2245, continent: 'ヨーロッパ' },
  'アイルランド': { name: 'アイルランド', lat: 53.4129, lng: -8.2439, continent: 'ヨーロッパ' },
  'ウクライナ': { name: 'ウクライナ', lat: 48.3794, lng: 31.1656, continent: 'ヨーロッパ' },
  'ルクセンブルク': { name: 'ルクセンブルク', lat: 49.8153, lng: 6.1296, continent: 'ヨーロッパ' },
  'モナコ': { name: 'モナコ', lat: 43.7384, lng: 7.4246, continent: 'ヨーロッパ' },
  'アンドラ': { name: 'アンドラ', lat: 42.5063, lng: 1.5218, continent: 'ヨーロッパ' },
  'リヒテンシュタイン': { name: 'リヒテンシュタイン', lat: 47.1660, lng: 9.5554, continent: 'ヨーロッパ' },
  'セルビア': { name: 'セルビア', lat: 44.0165, lng: 21.0059, continent: 'ヨーロッパ' },
  'クロアチア': { name: 'クロアチア', lat: 45.1000, lng: 15.2000, continent: 'ヨーロッパ' },
  'ハンガリー': { name: 'ハンガリー', lat: 47.1625, lng: 19.5033, continent: 'ヨーロッパ' },
  'ブルガリア': { name: 'ブルガリア', lat: 42.7339, lng: 25.4858, continent: 'ヨーロッパ' },
  'ルーマニア': { name: 'ルーマニア', lat: 45.9432, lng: 24.9668, continent: 'ヨーロッパ' },

  // 拡張アジア
  'ネパール': { name: 'ネパール', lat: 28.3949, lng: 84.1240, continent: 'アジア' },
  'バングラデシュ': { name: 'バングラデシュ', lat: 23.6850, lng: 90.3563, continent: 'アジア' },
  'スリランカ': { name: 'スリランカ', lat: 7.8731, lng: 80.7718, continent: 'アジア' },
  'ミャンマー': { name: 'ミャンマー', lat: 21.9162, lng: 95.9560, continent: 'アジア' },
  'カンボジア': { name: 'カンボジア', lat: 12.5657, lng: 104.9910, continent: 'アジア' },
  'ラオス': { name: 'ラオス', lat: 19.8563, lng: 102.4955, continent: 'アジア' },
  'ブルネイ': { name: 'ブルネイ', lat: 4.5353, lng: 114.7277, continent: 'アジア' },
  'アフガニスタン': { name: 'アフガニスタン', lat: 33.9391, lng: 67.7100, continent: 'アジア' },
  'パキスタン': { name: 'パキスタン', lat: 30.3753, lng: 69.3451, continent: 'アジア' },
  '台湾': { name: '台湾', lat: 23.6978, lng: 120.9605, continent: 'アジア' },
  '香港': { name: '香港', lat: 22.3193, lng: 114.1694, continent: 'アジア' },
  'マカオ': { name: 'マカオ', lat: 22.1987, lng: 113.5439, continent: 'アジア' },

  // 中東拡張
  'イラク': { name: 'イラク', lat: 33.2232, lng: 43.6793, continent: '中東' },
  'シリア': { name: 'シリア', lat: 34.8021, lng: 38.9968, continent: '中東' },
  'レバノン': { name: 'レバノン', lat: 33.8547, lng: 35.8623, continent: '中東' },
  'ヨルダン': { name: 'ヨルダン', lat: 30.5852, lng: 36.2384, continent: '中東' },
  'クウェート': { name: 'クウェート', lat: 29.3117, lng: 47.4818, continent: '中東' },
  'カタール': { name: 'カタール', lat: 25.3548, lng: 51.1839, continent: '中東' },
  'バーレーン': { name: 'バーレーン', lat: 25.9304, lng: 50.6378, continent: '中東' },
  'オマーン': { name: 'オマーン', lat: 21.4735, lng: 55.9754, continent: '中東' },
  'イエメン': { name: 'イエメン', lat: 15.5527, lng: 48.5164, continent: '中東' },

  // アフリカ拡張
  'リビア': { name: 'リビア', lat: 26.3351, lng: 17.2283, continent: 'アフリカ' },
  'チュニジア': { name: 'チュニジア', lat: 33.8869, lng: 9.5375, continent: 'アフリカ' },
  'アルジェリア': { name: 'アルジェリア', lat: 28.0339, lng: 1.6596, continent: 'アフリカ' },
  'スーダン': { name: 'スーダン', lat: 12.8628, lng: 30.2176, continent: 'アフリカ' },
  'セネガル': { name: 'セネガル', lat: 14.4974, lng: -14.4524, continent: 'アフリカ' },
  'カメルーン': { name: 'カメルーン', lat: 7.3697, lng: 12.3547, continent: 'アフリカ' },
  'コートジボワール': { name: 'コートジボワール', lat: 7.5400, lng: -5.5471, continent: 'アフリカ' },
  'ウガンダ': { name: 'ウガンダ', lat: 1.3733, lng: 32.2903, continent: 'アフリカ' },
  'タンザニア': { name: 'タンザニア', lat: -6.3690, lng: 34.8888, continent: 'アフリカ' },
  'ルワンダ': { name: 'ルワンダ', lat: -1.9403, lng: 29.8739, continent: 'アフリカ' },
  'ザンビア': { name: 'ザンビア', lat: -13.1339, lng: 27.8493, continent: 'アフリカ' },
  'ジンバブエ': { name: 'ジンバブエ', lat: -19.0154, lng: 29.1549, continent: 'アフリカ' },
  'ボツワナ': { name: 'ボツワナ', lat: -22.3285, lng: 24.6849, continent: 'アフリカ' },
  'ナミビア': { name: 'ナミビア', lat: -22.9576, lng: 18.4904, continent: 'アフリカ' },
  'マダガスカル': { name: 'マダガスカル', lat: -18.7669, lng: 46.8691, continent: 'アフリカ' },
  'モーリシャス': { name: 'モーリシャス', lat: -20.3484, lng: 57.5522, continent: 'アフリカ' },
  'セーシェル': { name: 'セーシェル', lat: -4.6796, lng: 55.4920, continent: 'アフリカ' },

  // 南アメリカ拡張
  'エクアドル': { name: 'エクアドル', lat: -1.8312, lng: -78.1834, continent: '南アメリカ' },
  'パラグアイ': { name: 'パラグアイ', lat: -23.4425, lng: -58.4438, continent: '南アメリカ' },
  'ボリビア': { name: 'ボリビア', lat: -16.2902, lng: -63.5887, continent: '南アメリカ' },
  'ウルグアイ': { name: 'ウルグアイ', lat: -32.5228, lng: -55.7658, continent: '南アメリカ' },

  // 北アメリカ・カリブ海拡張
  'ジャマイカ': { name: 'ジャマイカ', lat: 18.1096, lng: -77.2975, continent: '北アメリカ' },
  'コスタリカ': { name: 'コスタリカ', lat: 9.7489, lng: -83.7534, continent: '北アメリカ' },
  'グリーンランド': { name: 'グリーンランド', lat: 71.7069, lng: -42.6043, continent: '北アメリカ' },
  'フェロー諸島': { name: 'フェロー諸島', lat: 61.8926, lng: -6.9118, continent: 'ヨーロッパ' },

  // オセアニア拡張
  'フィジー': { name: 'フィジー', lat: -16.5782, lng: 179.4144, continent: 'オセアニア' },
  'トンガ': { name: 'トンガ', lat: -21.1789, lng: -175.1982, continent: 'オセアニア' },
};

// 国名から座標を取得する関数
export function getCountryCoordinate(countryName: string): CountryCoordinate | null {
  return countryCoordinates[countryName] || null;
}

// 大陸別の色分け
export const continentColors: { [key: string]: string } = {
  'アジア': '#22c55e',
  'ヨーロッパ': '#3b82f6', 
  '北アメリカ': '#f59e0b',
  '南アメリカ': '#ef4444',
  'アフリカ': '#8b5cf6',
  'オセアニア': '#06b6d4',
  '中東': '#f97316',
};

// 座標から地図上の位置を計算（簡易的な正距円筒図法）
export function latLngToMapPosition(lat: number, lng: number, mapWidth: number, mapHeight: number) {
  // 経度：-180〜180を0〜mapWidthにマッピング
  const x = ((lng + 180) * mapWidth) / 360;
  
  // 緯度：-90〜90を0〜mapHeightにマッピング（簡易版）
  // 上下を反転（北が上）
  const y = ((90 - lat) * mapHeight) / 180;
  
  return { x, y };
}