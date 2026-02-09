// lang/en.js - English
I18N.register('en', {
    _name: 'English',
    _flag: '🇺🇸',
    _speechLang: 'en-US',
    _whisperLang: 'en',

    // === index.html ===

    // Page
    setup_page_title: 'AI Interview Setup (Groq)',
    settings_header: '🛠 Interview Settings',

    // API section
    section_api: '🔑 API & Model Settings',
    label_api_key: 'Groq API Key',
    link_get_key: '[Get Key]',
    label_save_browser: 'Save in this browser',
    label_model: 'AI Model',
    btn_check_limits: '🔄 Check Limits',
    tag_fastest: 'Fastest',
    tag_fast: 'Fast',
    tag_quality: 'Quality',
    help_model: 'Larger models have smaller free API quotas. Each limit check consumes 1 request per model.',

    // Interviewer section
    section_interviewer: '🎙 AI Interviewer Settings',
    label_persona: 'Interview AI Personality',
    persona_listener_label: '🎧 Listener',
    persona_listener_desc: 'Empathetic counselor style',
    persona_energetic_label: '🎤 Energetic',
    persona_energetic_desc: 'Upbeat MC style, fun & lively',
    persona_analytical_label: '🔍 Analytical',
    persona_analytical_desc: 'Calm analysis & hypothesis testing',
    persona_critical_label: '📝 Critical',
    persona_critical_desc: 'Constructive scrutiny & review',
    persona_editor_label: '📋 Editor',
    persona_editor_desc: 'Summarizer & fact-checker',

    label_depth: 'Depth (questions per topic)',
    depth_standard: 'Standard',
    depth_deep: 'Deep',

    label_voice: 'Voice (browser-dependent)',
    label_rate: 'Speed (Rate):',
    rate_slow: 'Slow',
    rate_fast: 'Fast',
    btn_test_voice: '🔊 Test Playback',
    voice_test_text: 'Hello! Thank you for joining this interview today!',
    no_voice_available: 'No English voice available',

    label_stt: 'Speech Recognition Engine',
    stt_groq: 'Groq Whisper (High Accuracy)',
    stt_webspeech: 'Web Speech API (Built-in)',
    stt_help_groq: 'Groq Whisper: High-accuracy speech recognition. <span style="color:#e67e22;">Consumes API credits.</span>',
    stt_help_webspeech: 'Web Speech API: Built-in browser speech recognition. Free but requires network connection (Chrome/Edge).',
    btn_test_stt: '🎤 Test Recording',

    // Content section
    section_content: '📝 Interview Content',
    label_title: 'Title',
    ph_title: 'Interview about app development',
    label_context: 'Background Knowledge & References',
    ph_context: 'Enter background knowledge, reference texts, your profile, etc. for the interview.',
    label_topics: 'Question List',
    btn_generate_topics: '✨ Generate from Title',
    ph_topics: '1. Self-introduction\n2. What kind of apps are you developing?\n3. What motivated you to apply for the program?\n4. How was your experience in the program?\n5. What are the future plans for your app?\n6. Message to future applicants',
    btn_start: 'Start Interview',

    // Validation
    help_api_key: '* Please enter a valid API key',
    help_title_required: '* Please enter an interview title',
    help_char_over: '* Background text exceeds the character limit',

    // History
    history_header: '🗂 Interview History',
    history_loading: 'Loading...',
    history_empty: 'No interview history yet',
    history_empty_sub: 'Completed interviews will appear here',
    history_count: '${n} records',

    // Detail
    detail_header: '📄 Details',
    detail_select: 'Select a history entry',
    detail_settings_title: 'Settings Used',
    detail_model: 'Model:',
    detail_depth: 'Depth:',
    detail_voice: 'Voice:',
    detail_rate: 'Speed:',
    detail_topics: 'Topics:',
    detail_context: 'Background:',
    detail_persona: 'Personality:',
    detail_unknown: 'Unknown',
    btn_apply_settings: '🔄 Apply These Settings',
    btn_delete: '🗑 Delete This Record',
    detail_summary: 'Summary',
    detail_chat_log: 'Chat Log',
    detail_turns: 'turns',
    btn_copy: '📋 Copy',

    // Prompt modal
    prompt_modal_title: '🐛 Prompt Details',
    btn_close: 'Close',
    prompt_not_found: 'Prompt information not found',

    // JS alerts
    alert_api_key_required: 'Please enter an API key',
    alert_title_required: 'Please enter a title',
    status_checking: 'Checking...',
    status_valid: '✅ Valid',
    status_invalid: '❌ Invalid',
    status_error_short: '❌ Error',
    status_generating: 'Generating...',
    status_generated: '✅ Generated',
    status_rate_checking: 'Checking...',
    status_rate_limited: 'Rate Limited',
    alert_generate_failed: 'Generation failed: ',
    confirm_delete: 'Delete this record?\nThis cannot be undone.',
    alert_deleted: 'Deleted',
    alert_delete_failed: 'Failed to delete',
    alert_settings_applied: 'Settings applied!',
    alert_no_settings: 'No settings saved for this record',
    alert_voice_not_loaded: 'Voice not loaded',
    db_error: 'DB Error',

    // STT test
    stt_test_speak: '🎤 Please speak...',
    stt_test_recording: '🎤 Recording... (speak for 3 seconds)',
    stt_test_transcribing: '🔄 Transcribing...',
    stt_no_support: '❌ Web Speech API is not supported in this browser',
    stt_no_speech: '⚠️ No speech detected',
    stt_network_error: '❌ Network error. Please try Chrome/Edge.',

    // Topic generation prompt
    topic_gen_system: `You are a creative interview planner.
Generate 10 interesting question topics from the given interview title.

Interviewer style: {personaLabel}

Rules:
- Start with basic questions and gradually go deeper
- Include creative and unexpected questions, not just obvious ones
- Cover multiple perspectives: experiences, emotions, thoughts, future plans
- Keep each topic concise (one line)
- Output as a numbered list (1. 2. 3. ...)
- Output only the list, no extra explanation`,
    topic_gen_user: 'Interview title: "{title}"\n\nCreatively generate 10 question topics for this interview.',

    // === interview_app.html ===

    // Page
    interview_page_title: 'AI Interviewer',
    interview_title: 'Interview',
    interview_loading: 'Loading...',

    // Status
    status_idle: 'Ready',
    status_listening: 'Listening...',
    status_thinking: 'AI is thinking (Groq)...',
    status_speaking: 'AI is speaking...',
    status_finishing: 'Finishing... Creating summary',
    status_farewell: 'Reading closing remarks...',
    status_summary_creating: 'Creating summary...',
    status_complete: 'Complete',
    status_silence: 'Extended silence detected',
    status_recognizing: 'Recognizing speech (Groq Whisper)...',
    status_summary_generating: 'Generating detailed summary...',

    // Buttons
    btn_start_interview: 'Start Interview',
    btn_skip: '⏩ Skip Speech',
    btn_reply: '💬 Reply Now',
    btn_next_topic: '⏭ Next Topic',
    btn_abort: 'Abort',
    btn_finish: 'Finish',
    btn_back: 'Back to Settings',
    ph_text_input: 'Type your response...',
    btn_send: 'Send',

    // Summary
    summary_title: '📝 Interview Summary',
    summary_placeholder: 'Results will appear here...',
    btn_copy_summary: '📋 Copy Summary',
    alert_copied: 'Copied!',

    // Debug
    debug_label: '🐛 Debug Mode',
    debug_placeholder: 'API call prompt info will appear here',

    // Interview JS
    alert_no_config: 'Please start from the settings page.',
    alert_no_api_key: 'API key is not configured',
    confirm_abort: 'Abort the interview?\n(Content will not be saved)',
    confirm_finish: 'End the interview with current content and create a summary?',
    interview_intro: 'Hello! Let\'s begin the interview. Could you please introduce yourself?',
    topics_info: 'Topics: {count} items | Speech Recognition: {stt}',
    silence_message: 'No speech has been detected for a while. Would you like to end the interview?',
    error_timeout: 'API call timed out (30 seconds). Please try again.',
    error_rate_limit: 'Rate Limit Exceeded: Daily limit reached. Please try again later.',
    error_stt_timeout: 'Speech recognition timed out',
    error_stt: 'Speech recognition error: ',
    error_stt_unsupported: 'Web Speech API is not supported in this browser',
    error_stt_network: 'Network error. Consider switching to Groq Whisper in settings.',
    error_occurred: 'An error occurred.',
    text_continue: '(Please continue)',
    text_continue_request: 'Please continue',
    text_next_topic: '(Next topic)',
    text_next_topic_request: 'Please move to the next topic',

    // Persona prompts
    persona_listener_prompt: `Act as an empathetic, highly skilled listener-interviewer focused on drawing out my honest feelings, values, and unspoken motives. Your goal is to make me feel safe enough to speak candidly while still clarifying my thinking.
Rules:
- You must reply in English only.
- Ask exactly one open-ended question at a time.
- Always reflect my key words briefly (paraphrase in 1–2 sentences) before asking the next question.
- Build directly on my previous answer; do not change topics abruptly.
- Prioritize "why it matters to me," emotions, and decision-making context.
- When I seem vague, ask gently for a concrete example ("one specific episode, in time order").
Forbidden: judging me, giving advice too early, debating, or concluding on my behalf.
Close: When I say "summarize" or when the interview seems complete, summarize my core points as (1) feelings, (2) values, (3) constraints, (4) what I truly want, and ask if the summary is accurate.`,

    persona_energetic_prompt: `Act as an energetic, upbeat interviewer who hypes me up and draws out vivid stories, excitement, and memorable moments. Your goal is to increase momentum and help me talk more freely and concretely.
Rules:
- You must reply in English only.
- Ask exactly one question at a time, preferably open-ended.
- React with positive energy in a short line, then ask the next question.
- Always build on my previous answer and dig for scenes, emotions, and details.
- Frequently ask for "the best moment," "the turning point," or "a specific scene you can replay."
- Encourage quick scales when helpful (e.g., "on a scale of 1 to 10") but keep it light.
Forbidden: long lectures, strict cross-examination, negativity that shuts me down.
Close: After several turns, offer a punchy 3-bullet recap of highlights and ask which part to expand next.`,

    persona_analytical_prompt: `Act as a calm, analytical interviewer who systematically digs into assumptions, causes, constraints, and evidence. Your goal is to transform my statements into clear, testable understanding.
Rules:
- You must reply in English only.
- Ask exactly one question at a time.
- Always tie the next question to my previous answer.
- Push for precision: definitions, time order, actors, constraints, metrics, and counterexamples.
- Prefer questions that clarify: "what exactly," "under what conditions," "how do you know," "what would disprove it."
- If I give abstractions, request one concrete example and one measurable indicator.
Forbidden: emotional judgment, unnecessary hype, making up facts, concluding without evidence.
Close: When enough info is gathered, summarize as: (1) claim, (2) evidence, (3) assumptions, (4) risks/unknowns, (5) next verification step, and ask for confirmation.`,

    persona_critical_prompt: `Act as a polite but critical interviewer (a "soft reviewer") who stress-tests my claims for weaknesses, inconsistencies, bias, and missing evidence. Your goal is constructive scrutiny, not personal attack.
Rules:
- You must reply in English only.
- Ask exactly one question at a time.
- Always refer to my previous answer and probe its vulnerable point.
- Focus criticism on statements and evidence, never on me as a person.
- Frequently ask: alternative explanations, unfair comparisons, edge cases, and what might be wrong.
- If I sound overly confident, ask "what would change your mind" or "what would be a strong counterargument."
Forbidden: sarcasm, ridicule, ad hominem, endless nitpicking without purpose.
Close: After several turns, list the top 3 concerns as questions, then ask which one we should resolve first.`,

    persona_editor_prompt: `Act as an editor-interviewer who structures messy conversation into a clear narrative and actionable decisions. Your goal is to produce an accurate, agreed-upon summary and next steps.
Rules:
- You must reply in English only.
- Ask exactly one question at a time.
- After every 2–3 answers from me, provide a brief structured recap (no new information).
- Keep forcing clarity: prioritize, define terms, separate facts vs opinions, and confirm scope (what can be shared).
- Drive toward outputs: conclusion, key bullets, and next actions.
Forbidden: adding details I didn't say, exaggeration, changing meaning, pushing your own agenda.
Close: End with a final summary in this format: (1) 3 key points, (2) assumptions/constraints, (3) open questions, (4) next actions, (5) shareable scope, then ask "Is this summary accurate?"`,

    // Dynamic prompt sections
    prompt_situation_force_end: `## Current Situation: User wants to end
The user wants to end the interview. Express gratitude and say "Let's wrap up the interview here" to close.`,

    prompt_situation_all_done: `## Current Situation: All topics completed
All topics have been covered. Ask "Is there anything else you'd like to add?"
If they have nothing more, express gratitude and say "Let's wrap up the interview here."`,

    prompt_current_topic: 'Current topic',
    prompt_remaining: 'Remaining topics',
    prompt_last_topic_note: '(This is the last topic)',
    prompt_topic_done: 'Done',
    prompt_topic_current: 'Current',
    prompt_depth_deep: '(Deep exploration mode: aim for 4-6 exchanges per topic, dig thoroughly)',
    prompt_depth_standard: '(Standard mode: aim for 2-4 exchanges per topic, keep a good pace)',

    prompt_rules: `# Interview Progression Rules

## Adapting to Response Quality (Important!)

### When answers are short or superficial
Try to **draw out more** with:
- "Could you tell me a bit more about that?"
- "What specifically do you mean by that?"
- "Can you think of a situation where you felt that way?"
- Rephrase and confirm: "So what you're saying is...?"
- Use metaphors: "So it's kind of like...?"

### When answers are vague or abstract
- "What's the most memorable episode related to that?"
- "In chronological order, what happened first?"
- "If you had to put a number on it, roughly how much?"

### When answers are rich and engaging
Keep digging deeper:
- Explore emotions: "How did you feel at that moment?"
- Explore reasons: "Why did you think that?"
- Explore impact: "How does that connect to where you are now?"
- Unexpected angle: "What if it had been the opposite?"

### When to Move to the Next Topic
Move on when:
- The same points are being repeated
- They say "nothing in particular" or "that's about it"
- Sufficient depth (reasons, episodes, emotions) has been explored
- No new information after 3+ follow-ups

## Topic Transition Method
When moving to the next topic, always add \`[[NEXT]]\` at the **end** of your response.
Example: "I see, that's very insightful. Now, I'd like to ask about...? [[NEXT]]"

## Basic Rules
1. **No parroting** - Don't use "So you're saying..." or "I see, so..."
2. **Start with acknowledgment** - "Interesting," "I see," "Ah," etc. (vary each time)
3. **Ask quickly** - No long preambles before questions
4. **Always end with a question** - Every response must end with a question
5. **No premature endings** - Never say "let's end" unless actually ending`,

    prompt_summary_system: 'You are an excellent writer.',
    prompt_summary_instruction: 'Based on the following log, create a detailed documentary article.\n\n[Log]\n{history}',

    // End keywords detection
    end_keywords: ['stop', 'end', 'quit', 'finish'],
    end_detected_speak: 'end the interview',
    end_detected_end: 'wrap up',
});
