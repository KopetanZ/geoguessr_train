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
  }
];

export const getRandomQuestions = (count: number = 10): QuizQuestion[] => {
  const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, quizQuestions.length));
};

export const getQuestionsByCategory = (category: QuizQuestion['category']): QuizQuestion[] => {
  return quizQuestions.filter(q => q.category === category);
};