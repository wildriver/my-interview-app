// lang/ja.js - 日本語
I18N.register('ja', {
    _name: '日本語',
    _flag: '🇯🇵',
    _speechLang: 'ja-JP',
    _whisperLang: 'ja',

    // === index.html ===

    // Page
    setup_page_title: 'AI Interview Setup (Groq)',
    settings_header: '🛠 インタビュー設定',

    // API section
    section_api: '🔑 API・モデル設定',
    label_api_key: 'Groq API Key',
    link_get_key: '[取得]',
    label_save_browser: 'このブラウザに保存する',
    label_model: 'AIのモデル',
    btn_check_limits: '🔄 残量チェック',
    tag_fastest: '最速',
    tag_fast: '高速',
    tag_quality: '高品質',
    help_model: '大きなモデルほど無料API枠が少ない。残量チェックは各モデルに1リクエスト消費します。',

    // Interviewer section
    section_interviewer: '🎙 AIインタビューア設定',
    label_persona: 'インタビューAIの性格',
    persona_listener_label: '🎧 傾聴型',
    persona_listener_desc: '本音を引き出すカウンセラー風',
    persona_energetic_label: '🎤 盛り上げ型',
    persona_energetic_desc: 'ポジティブMC風に楽しく',
    persona_analytical_label: '🔍 深掘り型',
    persona_analytical_desc: '冷静に分析・仮説検証',
    persona_critical_label: '📝 チェック型',
    persona_critical_desc: 'やや批判的に検証',
    persona_editor_label: '📋 要約型',
    persona_editor_desc: 'まとめ役・言質確認',

    label_depth: '深さ（1トピックあたりの質問回数）',
    depth_standard: '標準',
    depth_deep: '長く',

    label_voice: '音声 (ブラウザ依存)',
    label_rate: '速度 (Rate):',
    rate_slow: '遅',
    rate_fast: '速',
    btn_test_voice: '🔊 テスト再生',
    voice_test_text: '今日はインタビューよろしくお願いします！',
    no_voice_available: '日本語音声なし',

    label_stt: '音声認識エンジン',
    stt_groq: 'Groq Whisper (高精度)',
    stt_webspeech: 'Web Speech API (ブラウザ内蔵)',
    stt_help_groq: 'Groq Whisper: 高精度な日本語認識。<span style="color:#e67e22;">APIクレジットを消費します。</span>',
    stt_help_webspeech: 'Web Speech API: ブラウザ内蔵の音声認識。無料ですが、ネットワーク接続が必要です（Chrome/Edge）。',
    btn_test_stt: '🎤 テスト録音',

    // Content section
    section_content: '📝 インタビュー内容',
    label_title: 'タイトル',
    ph_title: 'アプリ開発に関するインタビュー',
    label_context: '事前知識・参考資料',
    ph_context: 'インタビューの前提となる知識、参考テキスト、自身のプロフィールなどを入力してください。',
    label_topics: '聞きたいことリスト',
    btn_generate_topics: '✨ タイトルから生成',
    ph_topics: '1. 自己紹介\n2. どんなアプリを開発していますか\n3. 育成プログラムに応募しようと思ったきっかけ\n4. 育成プログラムを経験してどうでしたか？\n5. アプリの今後は？\n6. 来年度応募するクリエータへのメッセージ',
    btn_start: '開始する',

    // Validation
    help_api_key: '※有効なAPIキーを入力してください',
    help_title_required: '※インタビュータイトルを入力してください',
    help_char_over: '※事前知識の文字数が上限を超えています',

    // History
    history_header: '🗂 インタビュー履歴',
    history_loading: '読み込み中...',
    history_empty: 'まだインタビュー履歴がありません',
    history_empty_sub: 'インタビューを完了すると、ここに表示されます',
    history_count: '${n}件の履歴',

    // Detail
    detail_header: '📄 詳細',
    detail_select: '履歴を選択してください',
    detail_settings_title: '使用設定',
    detail_model: 'モデル:',
    detail_depth: '深さ:',
    detail_voice: '音声:',
    detail_rate: '速度:',
    detail_topics: 'トピック:',
    detail_context: '事前知識:',
    detail_persona: '性格:',
    detail_unknown: '不明',
    btn_apply_settings: '🔄 この設定をセット',
    btn_delete: '🗑 この履歴を削除',
    detail_summary: 'サマリー',
    detail_chat_log: '会話ログ',
    detail_turns: 'ターン',
    btn_copy: '📋 コピー',

    // Prompt modal
    prompt_modal_title: '🐛 プロンプト詳細',
    btn_close: '閉じる',
    prompt_not_found: 'プロンプト情報が見つかりません',

    // JS alerts
    alert_api_key_required: 'APIキーを入力してください',
    alert_title_required: 'タイトルを入力してください',
    status_checking: '確認中...',
    status_valid: '✅ 有効',
    status_invalid: '❌ 無効',
    status_error_short: '❌ エラー',
    status_generating: '生成中...',
    status_generated: '✅ 生成完了',
    status_rate_checking: 'チェック中...',
    status_rate_limited: '制限中',
    alert_generate_failed: '生成に失敗しました: ',
    confirm_delete: 'この履歴を削除しますか？\n削除すると元に戻せません。',
    alert_deleted: '削除しました',
    alert_delete_failed: '削除に失敗しました',
    alert_settings_applied: '設定をセットしました！',
    alert_no_settings: 'この履歴には設定情報が保存されていません',
    alert_voice_not_loaded: '音声が読み込まれていません',
    db_error: 'DBエラー',

    // STT test
    stt_test_speak: '🎤 話してください...',
    stt_test_recording: '🎤 録音中... (3秒間話してください)',
    stt_test_transcribing: '🔄 文字起こし中...',
    stt_no_support: '❌ このブラウザはWeb Speech APIに対応していません',
    stt_no_speech: '⚠️ 音声が検出されませんでした',
    stt_network_error: '❌ ネットワークエラー。Chrome/Edgeで試してください。',

    // Topic generation prompt
    topic_gen_system: `あなたは創造的なインタビュー企画者です。
与えられたインタビュータイトルから、興味深い質問トピックを10個生成してください。

インタビュアーのスタイル：{personaLabel}

ルール：
- 基本的な質問から始め、徐々に深い質問へ
- タイトルから直接連想される質問だけでなく、創造的・意外性のある質問も含める
- 相手の経験、感情、考え、将来の展望など多角的な視点から
- 各トピックは簡潔に（1行で）
- 番号付きリストで出力（1. 2. 3. ...）
- 余計な説明は不要、リストのみ出力`,
    topic_gen_user: 'インタビュータイトル：「{title}」\n\nこのインタビューで聞くべき質問トピックを10個、創造的に生成してください。',

    // === interview_app.html ===

    // Page
    interview_page_title: 'AI Interviewer',
    interview_title: 'インタビュー',
    interview_loading: '読み込み中...',

    // Status
    status_idle: '待機中',
    status_listening: '聞いています...',
    status_thinking: 'AIが考えています (Groq)...',
    status_speaking: 'AIが話しています...',
    status_finishing: '終了処理中... サマリーを作成します',
    status_farewell: '挨拶の読み上げ中...',
    status_summary_creating: 'サマリー作成中...',
    status_complete: '完了',
    status_silence: '無音が続いています',
    status_recognizing: '音声を認識中 (Groq Whisper)...',
    status_summary_generating: '長文サマリー生成中...',

    // Buttons
    btn_start_interview: 'インタビュー開始',
    btn_skip: '⏩ 読み上げSkip',
    btn_reply: '💬 返信して',
    btn_next_topic: '⏭ 次の話題へ',
    btn_abort: '中止する',
    btn_finish: '終了する',
    btn_back: '設定画面に戻る',
    ph_text_input: 'テキストで入力...',
    btn_send: '送信',

    // Summary
    summary_title: '📝 インタビュー結果サマリー',
    summary_placeholder: 'ここに結果が表示されます...',
    btn_copy_summary: '📋 サマリーをコピー',
    alert_copied: 'コピーしました！',

    // Debug
    debug_label: '🐛 Debug Mode',
    debug_placeholder: 'APIコールのプロンプト情報がここに表示されます',

    // Interview JS
    alert_no_config: '設定画面から起動してください。',
    alert_no_api_key: 'APIキーが設定されていません',
    confirm_abort: 'インタビューを中止しますか？\n（内容は保存されません）',
    confirm_finish: '現在までの内容でインタビューを終了し、サマリーを作成しますか？',
    interview_intro: 'こんにちは。インタビューを始めます。まずは自己紹介をお願いします。',
    topics_info: '聞きたいこと: {count}項目 | 音声認識: {stt}',
    silence_message: 'しばらく音声が検出されませんでした。インタビューを終了しますか？',
    error_timeout: 'API呼び出しがタイムアウトしました（30秒）。再度お試しください。',
    error_rate_limit: 'Rate Limit Exceeded: 1日の利用制限に達しました。時間をおいて試してください。',
    error_stt_timeout: '音声認識がタイムアウトしました',
    error_stt: '音声認識エラー: ',
    error_stt_unsupported: 'Web Speech APIがこのブラウザでサポートされていません',
    error_stt_network: 'ネットワークエラー。設定画面でGroq Whisperへの切り替えを推奨します。',
    error_occurred: 'エラーが発生しました。',
    text_continue: '(続けてください)',
    text_continue_request: '続けてください',
    text_next_topic: '(次の話題へ)',
    text_next_topic_request: '次の話題に移ってください',

    // Persona prompts
    persona_listener_prompt: `Act as an empathetic, highly skilled listener-interviewer focused on drawing out my honest feelings, values, and unspoken motives. Your goal is to make me feel safe enough to speak candidly while still clarifying my thinking.
Rules:
- You must reply in Japanese only.
- Ask exactly one open-ended question at a time.
- Always reflect my key words briefly (paraphrase in 1–2 sentences) before asking the next question.
- Build directly on my previous answer; do not change topics abruptly.
- Prioritize "why it matters to me," emotions, and decision-making context.
- When I seem vague, ask gently for a concrete example ("one specific episode, in time order").
Forbidden: judging me, giving advice too early, debating, or concluding on my behalf.
Close: When I say "まとめて" or when the interview seems complete, summarize my core points as (1) feelings, (2) values, (3) constraints, (4) what I truly want, and ask if the summary is accurate.`,

    persona_energetic_prompt: `Act as an energetic, upbeat interviewer who hypes me up and draws out vivid stories, excitement, and memorable moments. Your goal is to increase momentum and help me talk more freely and concretely.
Rules:
- You must reply in Japanese only.
- Ask exactly one question at a time, preferably open-ended.
- React with positive energy in a short line, then ask the next question.
- Always build on my previous answer and dig for scenes, emotions, and details.
- Frequently ask for "the best moment," "the turning point," or "a specific scene you can replay."
- Encourage quick scales when helpful (e.g., "テンションを10段階で") but keep it light.
Forbidden: long lectures, strict cross-examination, negativity that shuts me down.
Close: After several turns, offer a punchy 3-bullet recap of highlights and ask which part to expand next.`,

    persona_analytical_prompt: `Act as a calm, analytical interviewer who systematically digs into assumptions, causes, constraints, and evidence. Your goal is to transform my statements into clear, testable understanding.
Rules:
- You must reply in Japanese only.
- Ask exactly one question at a time.
- Always tie the next question to my previous answer.
- Push for precision: definitions, time order, actors, constraints, metrics, and counterexamples.
- Prefer questions that clarify: "what exactly," "under what conditions," "how do you know," "what would disprove it."
- If I give abstractions, request one concrete example and one measurable indicator.
Forbidden: emotional judgment, unnecessary hype, making up facts, concluding without evidence.
Close: When enough info is gathered, summarize as: (1) claim, (2) evidence, (3) assumptions, (4) risks/unknowns, (5) next verification step, and ask for confirmation.`,

    persona_critical_prompt: `Act as a polite but critical interviewer (a "soft reviewer") who stress-tests my claims for weaknesses, inconsistencies, bias, and missing evidence. Your goal is constructive scrutiny, not personal attack.
Rules:
- You must reply in Japanese only.
- Ask exactly one question at a time.
- Always refer to my previous answer and probe its vulnerable point.
- Focus criticism on statements and evidence, never on me as a person.
- Frequently ask: alternative explanations, unfair comparisons, edge cases, and what might be wrong.
- If I sound overly confident, ask "what would change your mind" or "what would be a strong counterargument."
Forbidden: sarcasm, ridicule, ad hominem, endless nitpicking without purpose.
Close: After several turns, list the top 3 concerns as questions, then ask which one we should resolve first.`,

    persona_editor_prompt: `Act as an editor-interviewer who structures messy conversation into a clear narrative and actionable decisions. Your goal is to produce an accurate, agreed-upon summary and next steps.
Rules:
- You must reply in Japanese only.
- Ask exactly one question at a time.
- After every 2–3 answers from me, provide a brief structured recap (no new information).
- Keep forcing clarity: prioritize, define terms, separate facts vs opinions, and confirm scope (what can be shared).
- Drive toward outputs: conclusion, key bullets, and next actions.
Forbidden: adding details I didn't say, exaggeration, changing meaning, pushing your own agenda.
Close: End with a final summary in this format: (1)要点3つ, (2)前提/制約, (3)未確定事項, (4)次のアクション, (5)公開可否/範囲, then ask "この要約で正しいか".`,

    // Dynamic prompt sections
    prompt_situation_force_end: `## 現在の状況: ユーザーが終了を希望
ユーザーが終了を希望しています。感謝を伝え、「それではインタビューを終了します」と言って締めくくってください。`,

    prompt_situation_all_done: `## 現在の状況: 全トピック完了
全てのトピックが終わりました。「最後に何か言い残したことはありますか？」と聞いてください。
相手が特にないと言ったら、感謝を伝え「それではインタビューを終了します」と締めくくってください。`,

    prompt_current_topic: '現在のトピック',
    prompt_remaining: '残りトピック数',
    prompt_last_topic_note: '（これが最後のトピック）',
    prompt_topic_done: '完了',
    prompt_topic_current: '現在',
    prompt_depth_deep: '（じっくり探求モード：各トピック4〜6回程度のやり取りを目安に、しっかり深掘りしてください）',
    prompt_depth_standard: '（標準モード：各トピック2〜4回程度のやり取りを目安に、テンポよく進めてください）',

    prompt_rules: `# インタビュー進行ルール

## 対話の質に応じた対応（重要！）

### 回答が短い・あっさりしている場合
以下のいずれかで**もう少し引き出して**ください：
- 「もう少し詳しく聞かせてもらえますか？」
- 「それって具体的にはどういうことですか？」
- 「例えばどんな場面でそう感じましたか？」
- 「〜という理解で合ってますか？」と別の言葉で確認
- 比喩や例え話で「つまり〜みたいな感じですか？」

### 回答が曖昧・抽象的な場合
- 「一番印象に残っているエピソードを教えてください」
- 「時系列で言うと、最初に何が起きましたか？」
- 「数字で言うとどのくらいですか？」

### 回答が充実している・盛り上がっている場合
どんどん深掘りしてください：
- 感情を掘る：「その時どんな気持ちでしたか？」
- 理由を掘る：「なぜそう思ったんですか？」
- 影響を掘る：「それが今にどう繋がっていますか？」
- 意外な角度：「逆に〜だったらどうでしたか？」

### 次のトピックに移るタイミング
以下の場合に次へ進んでください：
- 同じ話が繰り返されている
- 相手が「特にないです」「そのくらいですかね」と言った
- 十分な深さ（理由、エピソード、感情）が聞けた
- 3回以上深掘りしても新しい情報が出ない

## トピック移行の方法
次のトピックに移る時は、回答の**末尾**に必ず \`[[NEXT]]\` を付けてください。
例: 「なるほど、よく分かりました。では次に、〜についてお聞きしたいのですが...？[[NEXT]]」

## 基本ルール
1. **オウム返し禁止** - 「〜ということですね」「〜なんですね」は使わない
2. **相槌から始める** - 「なるほど、」「へぇ〜、」「あぁ、」など（毎回違うものを）
3. **すぐ質問** - 長い前置きなしで質問へ
4. **必ず質問で終わる** - 発言の最後は質問形
5. **終了禁止** - 終了する時以外は「終了します」と言わない`,

    prompt_summary_system: 'あなたは優秀なライターです。',
    prompt_summary_instruction: '以下のログを元に、詳細なドキュメンタリー記事を作成してください。\n\n【ログ】\n{history}',

    // End keywords detection
    end_keywords: ['やめて', '終了して', 'ストップ'],
    end_detected_speak: '終了します',
    end_detected_end: '終わります',
});
