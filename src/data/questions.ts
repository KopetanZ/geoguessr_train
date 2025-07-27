import { QuizQuestion } from '@/types/quiz';

export const quizQuestions: QuizQuestion[] = [
  // 国旗問題
  {
    id: '1',
    category: 'flag',
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
    question: 'この国旗はどの国のものですか？',
    answer: 'ブラジル',
    options: ['ブラジル', 'アルゼンチン', 'ポルトガル', 'コロンビア'],
    explanation: '緑地に黄色い菱形と青い円があるブラジルの国旗です。',
    funFact: '国旗の青い円には「ORDEM E PROGRESSO」（秩序と進歩）という標語が書かれています。',
    imageUrl: 'flag',
    flagCountry: 'ブラジル'
  },

  // 言語問題
  {
    id: '4',
    category: 'language',
    question: '「Bonjour」はどの国の言葉ですか？',
    answer: 'フランス',
    options: ['フランス', 'ベルギー', 'スイス', 'イタリア'],
    explanation: 'フランス語で「こんにちは」を意味します。',
    funFact: 'フランス語は5大陸で2億8000万人に話されている国際言語です。',
  },
  {
    id: '5',
    category: 'language', 
    question: '「Guten Tag」はどの国の言葉ですか？',
    answer: 'ドイツ',
    options: ['ドイツ', 'オーストリア', 'オランダ', 'デンマーク'],
    explanation: 'ドイツ語で「こんにちは」を意味します。',
    funFact: 'ドイツ語は EU内で最も多く話されている母語です。',
  },
  {
    id: '6',
    category: 'language',
    question: '「Здравствуйте」はどの国の言葉ですか？',
    answer: 'ロシア',
    options: ['ロシア', 'ウクライナ', 'ポーランド', 'ブルガリア'],
    explanation: 'ロシア語で「こんにちは」（丁寧語）を意味します。',
    funFact: 'ロシア語はキリル文字を使用し、世界で8番目に多く話されている言語です。',
  },

  // 電話番号問題
  {
    id: '7',
    category: 'phone',
    question: '電話番号が「+1」で始まる国はどこですか？',
    answer: 'アメリカ',
    options: ['アメリカ', 'カナダ', 'メキシコ', 'イギリス'],
    explanation: '+1は北アメリカ番号計画（NANP）の国際電話番号です。',
    funFact: '+1にはアメリカとカナダの他、カリブ海諸国も含まれています。',
  },
  {
    id: '8',
    category: 'phone',
    question: '電話番号が「+81」で始まる国はどこですか？',
    answer: '日本',
    options: ['日本', '韓国', '中国', 'タイ'],
    explanation: '+81は日本の国際電話番号です。',
    funFact: '81という番号は「Japan」の「J」がアルファベットの8番目、「A」が1番目から来ています。',
  },
  {
    id: '9',
    category: 'phone',
    question: '電話番号が「+44」で始まる国はどこですか？',
    answer: 'イギリス',
    options: ['イギリス', 'アイルランド', 'フランス', 'ドイツ'],
    explanation: '+44はイギリス（英国）の国際電話番号です。',
    funFact: 'イギリスは世界で最も早く電話システムを確立した国の一つです。',
  },

  // 建築問題
  {
    id: '10',
    category: 'architecture',
    question: 'この建築様式が特徴的な国はどこですか？（赤い瓦屋根と白い壁）',
    answer: 'スペイン',
    options: ['スペイン', 'イタリア', 'ギリシャ', 'ポルトガル'],
    explanation: '地中海様式の建築で、スペインでよく見られます。',
    funFact: 'この建築様式は暑い気候に適応するために発展しました。',
  },
  {
    id: '11',
    category: 'architecture',
    question: '木造の高床式住宅が特徴的な東南アジアの国はどこですか？',
    answer: 'タイ',
    options: ['タイ', 'ベトナム', 'カンボジア', 'インドネシア'],
    explanation: '洪水対策と風通しを良くするための伝統的建築です。',
    funFact: 'この建築様式は1000年以上前から続いています。',
  },
  {
    id: '12',
    category: 'architecture',
    question: 'チューダー様式（木組みと白壁）の建物が特徴的な国はどこですか？',
    answer: 'イギリス',
    options: ['イギリス', 'ドイツ', 'フランス', 'オランダ'],
    explanation: '16世紀のイギリスで発展した建築様式です。',
    funFact: 'シェイクスピアの時代に栄えた建築様式で、現在も多くの建物が残っています。',
  },

  // 追加の多様な問題
  {
    id: '13',
    category: 'flag',
    question: 'この国旗はどの国のものですか？',
    answer: 'イタリア',
    options: ['イタリア', 'メキシコ', 'ハンガリー', 'ブルガリア'],
    explanation: 'イタリアの三色旗（トリコローレ）です。',
    funFact: 'この旗の色は「希望、信念、愛」を表していると言われています。',
    imageUrl: 'flag',
    flagCountry: 'イタリア'
  },
  {
    id: '16',
    category: 'flag',
    question: 'この国旗はどの国のものですか？',
    answer: 'イギリス',
    options: ['イギリス', 'オーストラリア', 'ニュージーランド', 'アイルランド'],
    explanation: 'ユニオンジャックと呼ばれるイギリスの国旗です。',
    funFact: 'この旗はイングランド、スコットランド、北アイルランドの旗を組み合わせたものです。',
    imageUrl: 'flag',
    flagCountry: 'イギリス'
  },
  {
    id: '17',
    category: 'flag',
    question: 'この国旗はどの国のものですか？',
    answer: 'スペイン',
    options: ['スペイン', 'ポルトガル', 'コロンビア', 'ベネズエラ'],
    explanation: '赤と黄色のストライプが特徴的なスペインの国旗です。',
    funFact: '中央の紋章には「Plus Ultra（更なる彼方へ）」という標語が書かれています。',
    imageUrl: 'flag',
    flagCountry: 'スペイン'
  },
  {
    id: '18',
    category: 'flag',
    question: 'この国旗はどの国のものですか？',
    answer: 'ドイツ',
    options: ['ドイツ', 'ベルギー', 'オーストリア', 'オランダ'],
    explanation: '黒、赤、黄金の横縞が特徴的なドイツの国旗です。',
    funFact: 'この色は19世紀の自由主義運動のシンボルカラーでした。',
    imageUrl: 'flag',
    flagCountry: 'ドイツ'
  },
  {
    id: '14',
    category: 'language',
    question: '「Hola」はどの国の言葉ですか？',
    answer: 'スペイン',
    options: ['スペイン', 'イタリア', 'ポルトガル', 'フランス'],
    explanation: 'スペイン語で「こんにちは」を意味します。',
    funFact: 'スペイン語は世界で4億5000万人以上に話されている言語です。',
  },
  {
    id: '15',
    category: 'phone',
    question: '電話番号が「+33」で始まる国はどこですか？',
    answer: 'フランス',
    options: ['フランス', 'ベルギー', 'スイス', 'モナコ'],
    explanation: '+33はフランスの国際電話番号です。',
    funFact: 'フランスは世界で最も多くの観光客が訪れる国です。',
  },

  // 道路・標識問題
  {
    id: '19',
    category: 'road',
    question: '道路の中央線が黄色い実線の国はどこですか？',
    answer: 'アメリカ',
    options: ['アメリカ', 'カナダ', 'イギリス', 'オーストラリア'],
    explanation: 'アメリカでは追い越し禁止区間で黄色い実線が使われます。',
    funFact: 'アメリカの道路標示は世界で最も詳細なルールが定められています。',
  },
  {
    id: '20',
    category: 'road',
    question: '青い道路標識が特徴的なヨーロッパの国はどこですか？',
    answer: 'ドイツ',
    options: ['ドイツ', 'フランス', 'イタリア', 'スペイン'],
    explanation: 'ドイツのアウトバーンでは青い標識が使用されています。',
    funFact: 'ドイツのアウトバーンの一部区間では速度制限がありません。',
  },
  {
    id: '21',
    category: 'road',
    question: '左側通行で、ボラードに赤白のストライプがある国はどこですか？',
    answer: 'イギリス',
    options: ['イギリス', '日本', 'オーストラリア', 'ニュージーランド'],
    explanation: 'イギリスの特徴的な道路設備です。',
    funFact: 'イギリスのボラードのデザインは地域によって微妙に異なります。',
  },
  {
    id: '22',
    category: 'road',
    question: '道路脇に黒と白のストライプポールがよく見られる国はどこですか？',
    answer: 'ロシア',
    options: ['ロシア', 'ポーランド', 'ウクライナ', 'ベラルーシ'],
    explanation: 'ロシアや旧ソ連諸国でよく見られる道路標識です。',
    funFact: 'このポールは「キロメートルポスト」と呼ばれ、距離を示しています。',
  },

  // 公共物・インフラ問題
  {
    id: '23',
    category: 'infrastructure',
    question: '赤い丸型のポストボックスが特徴的な国はどこですか？',
    answer: 'イギリス',
    options: ['イギリス', 'アイルランド', 'カナダ', 'オーストラリア'],
    explanation: 'イギリス発祥の赤い円筒形郵便ポストです。',
    funFact: 'このデザインは1879年から使用され、世界中に広まりました。',
  },
  {
    id: '24',
    category: 'infrastructure',
    question: '木製の電柱が多く使われている国はどこですか？',
    answer: '日本',
    options: ['日本', '韓国', '中国', 'タイ'],
    explanation: '日本では地震対策として木製電柱が多用されています。',
    funFact: '日本の電柱密度は世界最高レベルで、約3600万本が設置されています。',
  },
  {
    id: '25',
    category: 'infrastructure',
    question: 'コンクリート製の四角い電柱が特徴的な国はどこですか？',
    answer: 'ドイツ',
    options: ['ドイツ', 'フランス', 'オランダ', 'ベルギー'],
    explanation: 'ドイツやオランダでは実用性を重視したコンクリート電柱が主流です。',
    funFact: 'これらの電柱は50年以上の耐久性を持つよう設計されています。',
  },
  {
    id: '26',
    category: 'infrastructure',
    question: '黄色い消火栓やマンホールの蓋が特徴的な国はどこですか？',
    answer: 'アメリカ',
    options: ['アメリカ', 'カナダ', 'オーストラリア', 'ニュージーランド'],
    explanation: 'アメリカでは消火栓が黄色く塗装されることが多いです。',
    funFact: '色は水圧や管の太さを示しており、地域によって異なります。',
  },

  // 植物・自然問題
  {
    id: '27',
    category: 'nature',
    question: 'ヤシの木が街路樹として植えられている地域として最も可能性が高いのは？',
    answer: '地中海沿岸',
    options: ['地中海沿岸', '北欧', '東欧', '中央アジア'],
    explanation: 'ヤシの木は温暖な気候の地域でよく見られます。',
    funFact: '地中海性気候では、観光地としてヤシの木が多く植樹されています。',
  },
  {
    id: '28',
    category: 'nature',
    question: '桜の木が街中に多く植えられている国はどこですか？',
    answer: '日本',
    options: ['日本', '韓国', '中国', 'アメリカ'],
    explanation: '日本では春の象徴として桜が広く植樹されています。',
    funFact: '日本には約600種類の桜があり、世界の桜の種類の大部分を占めています。',
  },
  {
    id: '29',
    category: 'nature',
    question: 'ユーカリの木が自生している国はどこですか？',
    answer: 'オーストラリア',
    options: ['オーストラリア', 'ニュージーランド', '南アフリカ', 'チリ'],
    explanation: 'ユーカリはオーストラリア原産の植物です。',
    funFact: 'ユーカリは600種以上あり、コアラの主食としても有名です。',
  },
  {
    id: '30',
    category: 'nature',
    question: 'トウヒやモミの針葉樹林が広がる地域はどこですか？',
    answer: '北欧',
    options: ['北欧', '地中海沿岸', '東南アジア', '中東'],
    explanation: '冷涼な気候の北欧では針葉樹林（タイガ）が広がっています。',
    funFact: 'この森林はタイガと呼ばれ、地球の陸地面積の約11%を占めています。',
  },

  // 企業・ブランド問題
  {
    id: '31',
    category: 'business',
    question: 'セブンイレブンの看板で、緑と赤のストライプが特徴的な国はどこですか？',
    answer: '日本',
    options: ['日本', 'アメリカ', 'タイ', '台湾'],
    explanation: '日本のセブンイレブンは独特の緑・赤・オレンジの配色です。',
    funFact: '日本のセブンイレブンは世界最多の約21,000店舗を展開しています。',
  },
  {
    id: '32',
    category: 'business',
    question: 'ガソリンスタンドで「Esso」ブランドがよく見られる地域はどこですか？',
    answer: 'ヨーロッパ',
    options: ['ヨーロッパ', '東アジア', '南米', 'アフリカ'],
    explanation: 'Essoはヨーロッパで広く展開されているガソリンスタンドです。',
    funFact: 'EssoはStandard Oil（S.O.）の略から来ており、エクソンモービルの一部です。',
  },
  {
    id: '33',
    category: 'business',
    question: '「Circle K」コンビニエンスストアが多く見られる国はどこですか？',
    answer: 'アメリカ',
    options: ['アメリカ', 'カナダ', 'メキシコ', 'イギリス'],
    explanation: 'Circle Kは北米を中心に展開するコンビニチェーンです。',
    funFact: 'Circle Kは1951年にアメリカで創業し、現在世界26か国に展開しています。',
  },
  {
    id: '34',
    category: 'business',
    question: '「ICA」スーパーマーケットがよく見られる北欧の国はどこですか？',
    answer: 'スウェーデン',
    options: ['スウェーデン', 'ノルウェー', 'フィンランド', 'デンマーク'],
    explanation: 'ICAはスウェーデン最大のスーパーマーケットチェーンです。',
    funFact: 'ICAは1917年創業で、スウェーデンの食料品市場の約36%を占めています。',
  }
];

export const getRandomQuestions = (count: number = 10): QuizQuestion[] => {
  const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, quizQuestions.length));
};

export const getQuestionsByCategory = (category: QuizQuestion['category']): QuizQuestion[] => {
  return quizQuestions.filter(q => q.category === category);
};