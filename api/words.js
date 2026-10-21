// api/words.js
// Vercel Serverless Function

// インメモリデータ（Vercel KVやDatabaseを接続する場合はここをDB操作に差し替えます）
let vocabularyDatabase = [
  {
    id: "1",
    word: "Delegate",
    meaning: "代表（国代表）",
    phonetic: "/ˈdɛl.ɪ.ɡət/",
    partOfSpeech: "noun",
    example: "The delegate of Japan motioned for an unmoderated caucus.",
    tags: ["Basic", "Roles"],
    status: "learning"
  },
  {
    id: "2",
    word: "Resolution",
    meaning: "決議案",
    phonetic: "/ˌrɛz.əˈluː.ʃən/",
    partOfSpeech: "noun",
    example: "The draft resolution was passed with a two-thirds majority.",
    tags: ["Documents", "Core"],
    status: "reviewing"
  },
  {
    id: "3",
    word: "Unmoderated Caucus",
    meaning: "自由討議（非公式協議）",
    phonetic: "/ʌnˈmɒd.ər.eɪ.tɪd ˈkɔː.kəs/",
    partOfSpeech: "phrase",
    example: "Delegates entered an unmoderated caucus to draft clauses together.",
    tags: ["Motions", "Discussion"],
    status: "learning"
  }
];

export default async function handler(req, res) {
  // CORS ヘッダーの設定
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // GET: 単語一覧の取得
  if (req.method === 'GET') {
    return res.status(200).json({
      success: true,
      count: vocabularyDatabase.length,
      data: vocabularyDatabase
    });
  }

  // POST: 新しい単語の追加
  if (req.method === 'POST') {
    const { word, meaning, example, tags, phonetic, partOfSpeech } = req.body;

    if (!word || !meaning) {
      return res.status(400).json({
        success: false,
        error: 'Word and meaning are required fields.'
      });
    }

    const newEntry = {
      id: Date.now().toString(),
      word,
      meaning,
      phonetic: phonetic || '',
      partOfSpeech: partOfSpeech || 'noun',
      example: example || '',
      tags: tags || ['Custom'],
      status: 'learning'
    };

    vocabularyDatabase.push(newEntry);

    return res.status(201).json({
      success: true,
      data: newEntry
    });
  }

  // その他のリクエストメソッド
  return res.status(405).json({
    success: false,
    error: 'Method Not Allowed'
  });
}
