export default async function handler(req, res) {
  // POSTリクエストのみ許可
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'テキストが指定されていません' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'OpenAI APIキーがVercel側で設定されていません' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // コストパフォーマンスに優れたモデル
        messages: [
          {
            role: 'system',
            content: 'あなたは英語教育のプロです。提示されたテキストから重要な英単語・熟語を最大5〜10個抽出してください。出力は必ず以下のJSON配列形式のみで答えてください。余計な文章やMarkdown修飾（```jsonなど）は含めないでください。[{"term": "英単語", "meaning": "日本語の意味", "example": "例文"}]'
          },
          {
            role: 'user',
            content: text
          }
        ],
        temperature: 0.3
      })
    });

    const data = await response.json();
    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    const content = data.choices[0].message.content.trim();
    // JSON文字列としてパース
    const cards = JSON.parse(content);
    return res.status(200).json({ cards });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'AI生成中にエラーが発生しました' });
  }
}
