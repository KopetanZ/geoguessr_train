import { QuizQuestion, DifficultyLevel } from '@/types/quiz';

export const quizQuestions: QuizQuestion[] = [
  // 国旗問題 - 簡単レベル (有名な国)
  {
    id: '1',
    category: 'flag',
    difficulty: 'easy',
    question: 'この国旗はどの国のものですか？',
    answer: '日本',
    options: ['日本', '韓国', '台湾', 'バングラデシュ'],
    explanation: '日の丸と呼ばれる白地に赤い丸の旗です。',
    funFact: '日本の国旗は世界で最もシンプルなデザインの一つです。',
    imageUrl: 'flag',
    flagCountry: '日本'
  },
  {
    id: '2', 
    category: 'flag',
    difficulty: 'easy',
    question: 'この国旗はどの国のものですか？',
    answer: 'カナダ',
    options: ['カナダ', 'ペルー', 'レバノン', 'オーストリア'],
    explanation: '赤いメープルリーフが特徴的なカナダの国旗です。',
    funFact: 'メープルリーフは秋になると美しく紅葉し、カナダのシンボルとなっています。',
    imageUrl: 'flag',
    flagCountry: 'カナダ'
  },
  {
    id: '3',
    category: 'flag',
    difficulty: 'easy',
    question: 'この国旗はどの国のものですか？',
    answer: 'アメリカ',
    options: ['アメリカ', 'リベリア', 'マレーシア', 'チリ'],
    explanation: '星条旗と呼ばれるアメリカの国旗です。',
    funFact: '50個の星は50州を、13本のストライプは独立時の13植民地を表しています。',
    imageUrl: 'flag',
    flagCountry: 'アメリカ'
  },
  {
    id: '4',
    category: 'flag',
    difficulty: 'easy',
    question: 'この国旗はどの国のものですか？',
    answer: 'イギリス',
    options: ['イギリス', 'オーストラリア', 'ニュージーランド', 'アイルランド'],
    explanation: 'ユニオンジャックと呼ばれるイギリスの国旗です。',
    funFact: 'この旗はイングランド、スコットランド、北アイルランドの旗を組み合わせたものです。',
    imageUrl: 'flag',
    flagCountry: 'イギリス'
  },
  {
    id: '5',
    category: 'flag',
    difficulty: 'easy',
    question: 'この国旗はどの国のものですか？',
    answer: 'フランス',
    options: ['フランス', 'オランダ', 'ロシア', 'チェコ'],
    explanation: 'トリコロール（三色旗）と呼ばれるフランスの国旗です。',
    funFact: '青・白・赤は自由・平等・博愛を表すとされています。',
    imageUrl: 'flag',
    flagCountry: 'フランス'
  },

  // 国旗問題 - 中級レベル
  {
    id: '6',
    category: 'flag',
    difficulty: 'medium',
    question: 'この国旗はどの国のものですか？',
    answer: 'ブラジル',
    options: ['ブラジル', 'アルゼンチン', 'ポルトガル', 'コロンビア'],
    explanation: '緑地に黄色い菱形と青い円があるブラジルの国旗です。',
    funFact: '国旗の青い円には「ORDEM E PROGRESSO」（秩序と進歩）という標語が書かれています。',
    imageUrl: 'flag',
    flagCountry: 'ブラジル'
  },
  {
    id: '7',
    category: 'flag',
    difficulty: 'medium',
    question: 'この国旗はどの国のものですか？',
    answer: 'インド',
    options: ['インド', 'アイルランド', 'コートジボワール', 'ニジェール'],
    explanation: 'サフラン・白・緑の横縞に中央に法輪があるインドの国旗です。',
    funFact: '中央の法輪は「アショーカ・チャクラ」と呼ばれ、24本のスポークがあります。',
    imageUrl: 'flag',
    flagCountry: 'インド'
  },
  {
    id: '8',
    category: 'flag',
    difficulty: 'medium',
    question: 'この国旗はどの国のものですか？',
    answer: '南アフリカ',
    options: ['南アフリカ', 'ブラジル', 'ガーナ', 'ガイアナ'],
    explanation: '6色を使った南アフリカの国旗です。',
    funFact: 'この国旗は1994年にアパルトヘイト終了後に採用された「虹の国旗」です。',
    imageUrl: 'flag',
    flagCountry: '南アフリカ'
  },

  // 国旗問題 - 難しいレベル
  {
    id: '9',
    category: 'flag',
    difficulty: 'hard',
    question: 'この国旗はどの国のものですか？',
    answer: 'ネパール',
    options: ['ネパール', 'ブータン', 'ミャンマー', 'ラオス'],
    explanation: '世界で唯一の三角形の国旗です。',
    funFact: '2つの三角形は太陽と月を表し、国の永続性を象徴しています。',
    imageUrl: 'flag',
    flagCountry: 'ネパール'
  },
  {
    id: '10',
    category: 'flag',
    difficulty: 'hard',
    question: 'この国旗はどの国のものですか？',
    answer: 'セーシェル',
    options: ['セーシェル', 'モーリシャス', 'コモロ', 'マダガスカル'],
    explanation: '5色の放射状デザインが特徴的なセーシェルの国旗です。',
    funFact: '色は青（海）・黄（太陽）・赤（国民）・白（正義）・緑（自然）を表しています。',
    imageUrl: 'flag',
    flagCountry: 'セーシェル'
  },

  // 電話番号問題 - 全難易度
  {
    id: '11',
    category: 'phone',
    difficulty: 'easy',
    question: '電話番号が「+1」で始まる国はどこですか？',
    answer: 'アメリカ',
    options: ['アメリカ', 'イギリス', 'オーストラリア', 'カナダ'],
    explanation: '+1は北アメリカ番号計画（NANP）の国際電話番号です。',
    funFact: '+1にはアメリカとカナダの他、カリブ海諸国も含まれています。',
  },
  {
    id: '12',
    category: 'phone',
    difficulty: 'easy',
    question: '電話番号が「+81」で始まる国はどこですか？',
    answer: '日本',
    options: ['日本', '韓国', '中国', 'タイ'],
    explanation: '+81は日本の国際電話番号です。',
    funFact: '81という番号は「Japan」の「J」がアルファベットの8番目、「A」が1番目から来ています。',
  },
  {
    id: '13',
    category: 'phone',
    difficulty: 'easy',
    question: '電話番号が「+44」で始まる国はどこですか？',
    answer: 'イギリス',
    options: ['イギリス', 'アイルランド', 'フランス', 'ドイツ'],
    explanation: '+44はイギリス（英国）の国際電話番号です。',
    funFact: 'イギリスは世界で最も早く電話システムを確立した国の一つです。',
  },
  {
    id: '14',
    category: 'phone',
    difficulty: 'medium',
    question: '電話番号が「+86」で始まる国はどこですか？',
    answer: '中国',
    options: ['中国', '台湾', '香港', 'マカオ'],
    explanation: '+86は中華人民共和国の国際電話番号です。',
    funFact: '中国は世界最大の携帯電話利用者数を誇り、14億台以上が使用されています。',
  },
  {
    id: '15',
    category: 'phone',
    difficulty: 'medium',
    question: '電話番号が「+91」で始まる国はどこですか？',
    answer: 'インド',
    options: ['インド', 'パキスタン', 'バングラデシュ', 'スリランカ'],
    explanation: '+91はインドの国際電話番号です。',
    funFact: 'インドは世界第2位の携帯電話市場で、毎月数百万台の新規契約があります。',
  },
  {
    id: '16',
    category: 'phone',
    difficulty: 'hard',
    question: '電話番号が「+358」で始まる国はどこですか？',
    answer: 'フィンランド',
    options: ['フィンランド', 'ノルウェー', 'スウェーデン', 'デンマーク'],
    explanation: '+358はフィンランドの国際電話番号です。',
    funFact: 'フィンランドはNokiaの本拠地で、携帯電話技術のパイオニアです。',
  },
  {
    id: '17',
    category: 'phone',
    difficulty: 'hard',
    question: '電話番号が「+212」で始まる国はどこですか？',
    answer: 'モロッコ',
    options: ['モロッコ', 'チュニジア', 'アルジェリア', 'エジプト'],
    explanation: '+212はモロッコの国際電話番号です。',
    funFact: 'モロッコの電話番号は9桁で、地域によって異なるエリアコードが使われています。',
  },

  // 言語問題 - 全難易度
  {
    id: '18',
    category: 'language',
    difficulty: 'easy',
    question: '「Hello」はどの国の言葉ですか？',
    answer: 'アメリカ',
    options: ['アメリカ', 'オーストラリア', 'カナダ', 'イギリス'],
    explanation: '英語で「こんにちは」を意味します。',
    funFact: '英語は世界で最も学習されている第二言語です。',
  },
  {
    id: '19',
    category: 'language',
    difficulty: 'easy',
    question: '「Bonjour」はどの国の言葉ですか？',
    answer: 'フランス',
    options: ['フランス', 'ベルギー', 'スイス', 'イタリア'],
    explanation: 'フランス語で「こんにちは」を意味します。',
    funFact: 'フランス語は5大陸で2億8000万人に話されている国際言語です。',
  },
  {
    id: '20',
    category: 'language', 
    difficulty: 'medium',
    question: '「Guten Tag」はどの国の言葉ですか？',
    answer: 'ドイツ',
    options: ['ドイツ', 'オーストリア', 'オランダ', 'デンマーク'],
    explanation: 'ドイツ語で「こんにちは」を意味します。',
    funFact: 'ドイツ語は EU内で最も多く話されている母語です。',
  },
  {
    id: '21',
    category: 'language',
    difficulty: 'medium',
    question: '「Здравствуйте」はどの国の言葉ですか？',
    answer: 'ロシア',
    options: ['ロシア', 'ウクライナ', 'ポーランド', 'ブルガリア'],
    explanation: 'ロシア語で「こんにちは」（丁寧語）を意味します。',
    funFact: 'ロシア語はキリル文字を使用し、世界で8番目に多く話されている言語です。',
  },
  {
    id: '22',
    category: 'language',
    difficulty: 'hard',
    question: '「สวัสดี」はどの国の言葉ですか？',
    answer: 'タイ',
    options: ['タイ', 'ラオス', 'カンボジア', 'ミャンマー'],
    explanation: 'タイ語で「こんにちは」を意味します。',
    funFact: 'タイ語は声調言語で、5つの異なる声調があります。',
  },

  // 建築問題 - 全難易度
  {
    id: '23',
    category: 'architecture',
    difficulty: 'easy',
    question: 'この建築様式が特徴的な国はどこですか？（赤い瓦屋根と白い壁）',
    answer: 'スペイン',
    options: ['スペイン', 'イタリア', 'ギリシャ', 'ポルトガル'],
    explanation: '地中海様式の建築で、スペインでよく見られます。',
    funFact: 'この建築様式は暑い気候に適応するために発展しました。',
  },
  {
    id: '24',
    category: 'architecture',
    difficulty: 'medium',
    question: '木造の高床式住宅が特徴的な東南アジアの国はどこですか？',
    answer: 'タイ',
    options: ['タイ', 'ベトナム', 'カンボジア', 'インドネシア'],
    explanation: '洪水対策と風通しを良くするための伝統的建築です。',
    funFact: 'この建築様式は1000年以上前から続いています。',
  },
  {
    id: '25',
    category: 'architecture',
    difficulty: 'hard',
    question: 'チューダー様式（木組みと白壁）の建物が特徴的な国はどこですか？',
    answer: 'イギリス',
    options: ['イギリス', 'ドイツ', 'フランス', 'オランダ'],
    explanation: '16世紀のイギリスで発展した建築様式です。',
    funFact: 'シェイクスピアの時代に栄えた建築様式で、現在も多くの建物が残っています。',
  },

  // 道路・標識問題 - 全難易度
  {
    id: '26',
    category: 'road',
    difficulty: 'easy',
    question: '道路の中央線が黄色い実線の国はどこですか？',
    answer: 'アメリカ',
    options: ['アメリカ', 'カナダ', 'イギリス', 'オーストラリア'],
    explanation: 'アメリカでは追い越し禁止区間で黄色い実線が使われます。',
    funFact: 'アメリカの道路標示は世界で最も詳細なルールが定められています。',
  },
  {
    id: '27',
    category: 'road',
    difficulty: 'medium',
    question: '青い道路標識が特徴的なヨーロッパの国はどこですか？',
    answer: 'ドイツ',
    options: ['ドイツ', 'フランス', 'イタリア', 'スペイン'],
    explanation: 'ドイツのアウトバーンでは青い標識が使用されています。',
    funFact: 'ドイツのアウトバーンの一部区間では速度制限がありません。',
  },
  {
    id: '28',
    category: 'road',
    difficulty: 'hard',
    question: 'オレンジ色のガードレールが特徴的な国はどこですか？',
    answer: 'オランダ',
    options: ['オランダ', 'ベルギー', 'デンマーク', 'スウェーデン'],
    explanation: 'オランダでは視認性向上のためオレンジ色のガードレールが使用されています。',
    funFact: 'オレンジはオランダ王室の色で、国のシンボルカラーです。',
  },

  // 公共物・インフラ問題 - 全難易度
  {
    id: '29',
    category: 'infrastructure',
    difficulty: 'easy',
    question: '赤い丸型のポストボックスが特徴的な国はどこですか？',
    answer: 'イギリス',
    options: ['イギリス', 'アイルランド', 'カナダ', 'オーストラリア'],
    explanation: 'イギリス発祥の赤い円筒形郵便ポストです。',
    funFact: 'このデザインは1879年から使用され、世界中に広まりました。',
  },
  {
    id: '30',
    category: 'infrastructure',
    difficulty: 'medium',
    question: '木製の電柱が多く使われている国はどこですか？',
    answer: '日本',
    options: ['日本', '韓国', '中国', 'タイ'],
    explanation: '日本では地震対策として木製電柱が多用されています。',
    funFact: '日本の電柱密度は世界最高レベルで、約3600万本が設置されています。',
  },
  {
    id: '31',
    category: 'infrastructure',
    difficulty: 'hard',
    question: '地下に巨大な排水システム「G-Cans」がある国はどこですか？',
    answer: '日本',
    options: ['日本', 'オランダ', 'シンガポール', '韓国'],
    explanation: '埼玉県にある世界最大級の地下放水路です。',
    funFact: '地下神殿とも呼ばれ、高さ18mの巨大な柱が59本立っています。',
  },

  // 自然・植物問題 - 全難易度
  {
    id: '32',
    category: 'nature',
    difficulty: 'easy',
    question: 'ヤシの木が街路樹として植えられている地域として最も可能性が高いのは？',
    answer: '地中海沿岸',
    options: ['地中海沿岸', '北欧', '東欧', '中央アジア'],
    explanation: 'ヤシの木は温暖な気候の地域でよく見られます。',
    funFact: '地中海性気候では、観光地としてヤシの木が多く植樹されています。',
  },
  {
    id: '33',
    category: 'nature',
    difficulty: 'medium',
    question: '桜の木が街中に多く植えられている国はどこですか？',
    answer: '日本',
    options: ['日本', '韓国', '中国', 'アメリカ'],
    explanation: '日本では春の象徴として桜が広く植樹されています。',
    funFact: '日本には約600種類の桜があり、世界の桜の種類の大部分を占めています。',
  },
  {
    id: '34',
    category: 'nature',
    difficulty: 'hard',
    question: 'バオバブの木が自生している大陸はどこですか？',
    answer: 'アフリカ',
    options: ['アフリカ', '南米', 'オーストラリア', 'アジア'],
    explanation: 'バオバブは主にアフリカ大陸に自生する巨木です。',
    funFact: 'バオバブは「生命の木」と呼ばれ、幹に大量の水を蓄えることができます。',
  },

  // 企業・ブランド問題 - 全難易度
  {
    id: '35',
    category: 'business',
    difficulty: 'easy',
    question: 'セブンイレブンの看板で、緑と赤のストライプが特徴的な国はどこですか？',
    answer: '日本',
    options: ['日本', 'アメリカ', 'タイ', '台湾'],
    explanation: '日本のセブンイレブンは独特の緑・赤・オレンジの配色です。',
    funFact: '日本のセブンイレブンは世界最多の約21,000店舗を展開しています。',
  },
  {
    id: '36',
    category: 'business',
    difficulty: 'medium',
    question: 'ガソリンスタンドで「Esso」ブランドがよく見られる地域はどこですか？',
    answer: 'ヨーロッパ',
    options: ['ヨーロッパ', '東アジア', '南米', 'アフリカ'],
    explanation: 'Essoはヨーロッパで広く展開されているガソリンスタンドです。',
    funFact: 'EssoはStandard Oil（S.O.）の略から来ており、エクソンモービルの一部です。',
  },
  {
    id: '37',
    category: 'business',
    difficulty: 'hard',
    question: '「Oxxo」コンビニエンスストアチェーンが多く見られる国はどこですか？',
    answer: 'メキシコ',
    options: ['メキシコ', 'ブラジル', 'アルゼンチン', 'コロンビア'],
    explanation: 'OxxoはメキシコとCEMEXが展開する大手コンビニチェーンです。',
    funFact: 'Oxxoはメキシコで20,000店舗以上を展開し、国内最大のコンビニチェーンです。',
  },

  // 新しい拡張問題をここから追加

  // 国旗問題をさらに追加
  {
    id: '38',
    category: 'flag',
    difficulty: 'easy',
    question: 'この国旗はどの国のものですか？',
    answer: 'ドイツ',
    options: ['ドイツ', 'ベルギー', 'オーストリア', 'オランダ'],
    explanation: '黒、赤、黄金の横縞が特徴的なドイツの国旗です。',
    funFact: 'この色は19世紀の自由主義運動のシンボルカラーでした。',
    imageUrl: 'flag',
    flagCountry: 'ドイツ'
  },
  {
    id: '39',
    category: 'flag',
    difficulty: 'easy',
    question: 'この国旗はどの国のものですか？',
    answer: 'イタリア',
    options: ['イタリア', 'メキシコ', 'ハンガリー', 'ブルガリア'],
    explanation: 'イタリアの三色旗（トリコローレ）です。',
    funFact: 'この旗の色は「希望、信念、愛」を表していると言われています。',
    imageUrl: 'flag',
    flagCountry: 'イタリア'
  },
  {
    id: '40',
    category: 'flag',
    difficulty: 'medium',
    question: 'この国旗はどの国のものですか？',
    answer: 'スウェーデン',
    options: ['スウェーデン', 'ノルウェー', 'フィンランド', 'デンマーク'],
    explanation: '青地に黄色い十字があるスウェーデンの国旗です。',
    funFact: '北欧十字は北欧諸国に共通するデザインパターンです。',
    imageUrl: 'flag',
    flagCountry: 'スウェーデン'
  },
  {
    id: '41',
    category: 'flag',
    difficulty: 'hard',
    question: 'この国旗はどの国のものですか？',
    answer: 'パプアニューギニア',
    options: ['パプアニューギニア', 'ジャマイカ', 'ソロモン諸島', 'バヌアツ'],
    explanation: '極楽鳥と南十字星が描かれたパプアニューギニアの国旗です。',
    funFact: '極楽鳥は国鳥で、現地では「クムル」と呼ばれています。',
    imageUrl: 'flag',
    flagCountry: 'パプアニューギニア'
  },

  // 電話番号問題をさらに追加
  {
    id: '42',
    category: 'phone',
    difficulty: 'easy',
    question: '電話番号が「+49」で始まる国はどこですか？',
    answer: 'ドイツ',
    options: ['ドイツ', 'オーストリア', 'スイス', 'オランダ'],
    explanation: '+49はドイツの国際電話番号です。',
    funFact: 'ドイツでは携帯電話番号が01で始まり、地域ごとの番号体系があります。',
  },
  {
    id: '43',
    category: 'phone',
    difficulty: 'medium',
    question: '電話番号が「+61」で始まる国はどこですか？',
    answer: 'オーストラリア',
    options: ['オーストラリア', 'ニュージーランド', '南アフリカ', 'ナイジェリア'],
    explanation: '+61はオーストラリアの国際電話番号です。',
    funFact: 'オーストラリアの携帯電話番号は04で始まり、8桁の番号が続きます。',
  },
  {
    id: '44',
    category: 'phone',
    difficulty: 'hard',
    question: '電話番号が「+963」で始まる国はどこですか？',
    answer: 'シリア',
    options: ['シリア', 'レバノン', 'ヨルダン', 'イラク'],
    explanation: '+963はシリアの国際電話番号です。',
    funFact: 'シリアの電話番号システムは内戦の影響で一部地域で不安定な状況が続いています。',
  },

  // 道路・標識問題をさらに追加
  {
    id: '45',
    category: 'road',
    difficulty: 'easy',
    question: '左側通行で、ボラードに赤白のストライプがある国はどこですか？',
    answer: 'イギリス',
    options: ['イギリス', '日本', 'オーストラリア', 'ニュージーランド'],
    explanation: 'イギリスの特徴的な道路設備です。',
    funFact: 'イギリスのボラードのデザインは地域によって微妙に異なります。',
  },
  {
    id: '46',
    category: 'road',
    difficulty: 'medium',
    question: '道路脇に黒と白のストライプポールがよく見られる国はどこですか？',
    answer: 'ロシア',
    options: ['ロシア', 'ポーランド', 'ウクライナ', 'ベラルーシ'],
    explanation: 'ロシアや旧ソ連諸国でよく見られる道路標識です。',
    funFact: 'このポールは「キロメートルポスト」と呼ばれ、距離を示しています。',
  },
  {
    id: '47',
    category: 'road',
    difficulty: 'hard',
    question: '道路標識に絵文字のような可愛いデザインが使われている国はどこですか？',
    answer: 'アイスランド',
    options: ['アイスランド', 'ノルウェー', 'デンマーク', 'スウェーデン'],
    explanation: 'アイスランドでは観光客向けにユニークな道路標識が設置されています。',
    funFact: 'エルフの横断注意などのユーモアあふれる標識で有名です。',
  },

  // インフラ問題をさらに追加
  {
    id: '48',
    category: 'infrastructure',
    difficulty: 'medium',
    question: '黄色い消火栓やマンホールの蓋が特徴的な国はどこですか？',
    answer: 'アメリカ',
    options: ['アメリカ', 'カナダ', 'オーストラリア', 'ニュージーランド'],
    explanation: 'アメリカでは消火栓が黄色く塗装されることが多いです。',
    funFact: '色は水圧や管の太さを示しており、地域によって異なります。',
  },
  {
    id: '49',
    category: 'infrastructure',
    difficulty: 'hard',
    question: '風車による風力発電が景観の一部となっている国はどこですか？',
    answer: 'オランダ',
    options: ['オランダ', 'デンマーク', 'ドイツ', 'スペイン'],
    explanation: 'オランダは風力発電の先進国で、伝統的な風車も多く残っています。',
    funFact: 'オランダの電力の約15%が風力発電によって賄われています。',
  },

  // 自然問題をさらに追加
  {
    id: '50',
    category: 'nature',
    difficulty: 'medium',
    question: 'ユーカリの木が自生している国はどこですか？',
    answer: 'オーストラリア',
    options: ['オーストラリア', 'ニュージーランド', '南アフリカ', 'チリ'],
    explanation: 'ユーカリはオーストラリア原産の植物です。',
    funFact: 'ユーカリは600種以上あり、コアラの主食としても有名です。',
  },
  {
    id: '51',
    category: 'nature',
    difficulty: 'hard',
    question: 'セコイアの巨木が自生している国はどこですか？',
    answer: 'アメリカ',
    options: ['アメリカ', 'カナダ', 'チリ', 'ニュージーランド'],
    explanation: 'セコイアはカリフォルニア州に自生する世界最大の樹木です。',
    funFact: '最も高いセコイアは115メートルを超え、ビル30階分の高さに相当します。',
  }
];

export const getRandomQuestions = (count: number = 10, difficulty?: DifficultyLevel): QuizQuestion[] => {
  let filteredQuestions = quizQuestions;
  
  if (difficulty) {
    filteredQuestions = quizQuestions.filter(q => q.difficulty === difficulty);
  }
  
  const shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, filteredQuestions.length));
};

export const getQuestionsByCategory = (category: QuizQuestion['category'], difficulty?: DifficultyLevel): QuizQuestion[] => {
  let filteredQuestions = quizQuestions.filter(q => q.category === category);
  
  if (difficulty) {
    filteredQuestions = filteredQuestions.filter(q => q.difficulty === difficulty);
  }
  
  return filteredQuestions;
};

export const getQuestionsByDifficulty = (difficulty: DifficultyLevel): QuizQuestion[] => {
  return quizQuestions.filter(q => q.difficulty === difficulty);
};