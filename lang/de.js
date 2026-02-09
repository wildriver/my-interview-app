// lang/de.js - Deutsch
I18N.register('de', {
    _name: 'Deutsch',
    _flag: '🇩🇪',
    _speechLang: 'de-DE',
    _whisperLang: 'de',

    // === index.html ===

    // Page
    setup_page_title: 'AI Interview Setup (Groq)',
    settings_header: '🛠 Interview-Einstellungen',

    // API section
    section_api: '🔑 API & Modell',
    label_api_key: 'Groq API Key',
    link_get_key: '[Key holen]',
    label_save_browser: 'In diesem Browser speichern',
    label_model: 'KI-Modell',
    btn_check_limits: '🔄 Limits prüfen',
    tag_fastest: 'Schnellste',
    tag_fast: 'Schnell',
    tag_quality: 'Qualität',
    help_model: 'Größere Modelle haben kleinere kostenlose API-Kontingente. Jede Limitprüfung verbraucht 1 Anfrage pro Modell.',

    // Interviewer section
    section_interviewer: '🎙 KI-Interviewer Einstellungen',
    label_persona: 'Interview-KI Persönlichkeit',
    persona_listener_label: '🎧 Zuhörer',
    persona_listener_desc: 'Einfühlsamer Berater-Stil',
    persona_energetic_label: '🎤 Energetisch',
    persona_energetic_desc: 'Lebhafter Moderator-Stil',
    persona_analytical_label: '🔍 Analytisch',
    persona_analytical_desc: 'Ruhige Analyse & Hypothesenprüfung',
    persona_critical_label: '📝 Kritisch',
    persona_critical_desc: 'Konstruktive Prüfung & Review',
    persona_editor_label: '📋 Redakteur',
    persona_editor_desc: 'Zusammenfasser & Faktenprüfer',

    label_depth: 'Tiefe (Fragen pro Thema)',
    depth_standard: 'Standard',
    depth_deep: 'Ausführlich',

    label_voice: 'Stimme (browserabhängig)',
    label_rate: 'Geschwindigkeit (Rate):',
    rate_slow: 'Langsam',
    rate_fast: 'Schnell',
    btn_test_voice: '🔊 Test abspielen',
    voice_test_text: 'Hallo! Vielen Dank, dass Sie heute am Interview teilnehmen!',
    no_voice_available: 'Keine deutsche Stimme verfügbar',

    label_stt: 'Spracherkennungs-Engine',
    stt_groq: 'Groq Whisper (Hohe Genauigkeit)',
    stt_webspeech: 'Web Speech API (Browser-intern)',
    stt_help_groq: 'Groq Whisper: Hochpräzise Spracherkennung. <span style="color:#e67e22;">Verbraucht API-Credits.</span>',
    stt_help_webspeech: 'Web Speech API: Browser-interne Spracherkennung. Kostenlos, erfordert aber Netzwerkverbindung (Chrome/Edge).',
    btn_test_stt: '🎤 Testaufnahme',

    // Content section
    section_content: '📝 Interview-Inhalt',
    label_title: 'Titel',
    ph_title: 'Interview über App-Entwicklung',
    label_context: 'Hintergrundwissen & Referenzen',
    ph_context: 'Geben Sie Hintergrundwissen, Referenztexte, Ihr Profil usw. für das Interview ein.',
    label_topics: 'Fragenliste',
    btn_generate_topics: '✨ Aus Titel generieren',
    ph_topics: '1. Selbstvorstellung\n2. Welche Apps entwickeln Sie?\n3. Was hat Sie zur Bewerbung motiviert?\n4. Wie war Ihre Erfahrung im Programm?\n5. Zukunftspläne für Ihre App?\n6. Nachricht an zukünftige Bewerber',
    btn_start: 'Interview starten',

    // Validation
    help_api_key: '* Bitte geben Sie einen gültigen API-Key ein',
    help_title_required: '* Bitte geben Sie einen Interview-Titel ein',
    help_char_over: '* Hintergrundtext überschreitet die Zeichengrenze',

    // History
    history_header: '🗂 Interview-Verlauf',
    history_loading: 'Laden...',
    history_empty: 'Noch kein Interview-Verlauf',
    history_empty_sub: 'Abgeschlossene Interviews erscheinen hier',
    history_count: '${n} Einträge',

    // Detail
    detail_header: '📄 Details',
    detail_select: 'Wählen Sie einen Verlaufseintrag',
    detail_settings_title: 'Verwendete Einstellungen',
    detail_model: 'Modell:',
    detail_depth: 'Tiefe:',
    detail_voice: 'Stimme:',
    detail_rate: 'Geschwindigkeit:',
    detail_topics: 'Themen:',
    detail_context: 'Hintergrund:',
    detail_persona: 'Persönlichkeit:',
    detail_unknown: 'Unbekannt',
    btn_apply_settings: '🔄 Diese Einstellungen übernehmen',
    btn_delete: '🗑 Diesen Eintrag löschen',
    detail_summary: 'Zusammenfassung',
    detail_chat_log: 'Chat-Protokoll',
    detail_turns: 'Runden',
    btn_copy: '📋 Kopieren',

    // Prompt modal
    prompt_modal_title: '🐛 Prompt-Details',
    btn_close: 'Schließen',
    prompt_not_found: 'Prompt-Informationen nicht gefunden',

    // JS alerts
    alert_api_key_required: 'Bitte geben Sie einen API-Key ein',
    alert_title_required: 'Bitte geben Sie einen Titel ein',
    status_checking: 'Prüfe...',
    status_valid: '✅ Gültig',
    status_invalid: '❌ Ungültig',
    status_error_short: '❌ Fehler',
    status_generating: 'Generiere...',
    status_generated: '✅ Generiert',
    status_rate_checking: 'Prüfe...',
    status_rate_limited: 'Limit erreicht',
    alert_generate_failed: 'Generierung fehlgeschlagen: ',
    confirm_delete: 'Diesen Eintrag löschen?\nDies kann nicht rückgängig gemacht werden.',
    alert_deleted: 'Gelöscht',
    alert_delete_failed: 'Löschen fehlgeschlagen',
    alert_settings_applied: 'Einstellungen übernommen!',
    alert_no_settings: 'Keine gespeicherten Einstellungen für diesen Eintrag',
    alert_voice_not_loaded: 'Stimme nicht geladen',
    db_error: 'DB-Fehler',

    // STT test
    stt_test_speak: '🎤 Bitte sprechen Sie...',
    stt_test_recording: '🎤 Aufnahme... (sprechen Sie 3 Sekunden)',
    stt_test_transcribing: '🔄 Transkribiere...',
    stt_no_support: '❌ Web Speech API wird in diesem Browser nicht unterstützt',
    stt_no_speech: '⚠️ Keine Sprache erkannt',
    stt_network_error: '❌ Netzwerkfehler. Bitte Chrome/Edge versuchen.',

    // Topic generation prompt
    topic_gen_system: `Sie sind ein kreativer Interview-Planer.
Generieren Sie 10 interessante Fragethemen aus dem gegebenen Interview-Titel.

Interviewer-Stil: {personaLabel}

Regeln:
- Beginnen Sie mit grundlegenden Fragen und vertiefen Sie schrittweise
- Schließen Sie kreative und überraschende Fragen ein, nicht nur offensichtliche
- Decken Sie mehrere Perspektiven ab: Erfahrungen, Emotionen, Gedanken, Zukunftspläne
- Halten Sie jedes Thema kurz (eine Zeile)
- Ausgabe als nummerierte Liste (1. 2. 3. ...)
- Nur die Liste ausgeben, keine zusätzliche Erklärung`,
    topic_gen_user: 'Interview-Titel: „{title}"\n\nGenerieren Sie kreativ 10 Fragethemen für dieses Interview.',

    // === interview_app.html ===

    // Page
    interview_page_title: 'AI Interviewer',
    interview_title: 'Interview',
    interview_loading: 'Laden...',

    // Status
    status_idle: 'Bereit',
    status_listening: 'Höre zu...',
    status_thinking: 'KI denkt nach (Groq)...',
    status_speaking: 'KI spricht...',
    status_finishing: 'Beende... Zusammenfassung wird erstellt',
    status_farewell: 'Abschlussworte werden vorgelesen...',
    status_summary_creating: 'Zusammenfassung wird erstellt...',
    status_complete: 'Abgeschlossen',
    status_silence: 'Längere Stille erkannt',
    status_recognizing: 'Sprache wird erkannt (Groq Whisper)...',
    status_summary_generating: 'Detaillierte Zusammenfassung wird generiert...',

    // Buttons
    btn_start_interview: 'Interview starten',
    btn_skip: '⏩ Vorlesen überspringen',
    btn_reply: '💬 Jetzt antworten',
    btn_next_topic: '⏭ Nächstes Thema',
    btn_abort: 'Abbrechen',
    btn_finish: 'Beenden',
    btn_back: 'Zurück zu Einstellungen',
    ph_text_input: 'Antwort eingeben...',
    btn_send: 'Senden',

    // Summary
    summary_title: '📝 Interview-Zusammenfassung',
    summary_placeholder: 'Ergebnisse erscheinen hier...',
    btn_copy_summary: '📋 Zusammenfassung kopieren',
    alert_copied: 'Kopiert!',

    // Debug
    debug_label: '🐛 Debug-Modus',
    debug_placeholder: 'API-Aufruf Prompt-Informationen erscheinen hier',

    // Interview JS
    alert_no_config: 'Bitte starten Sie über die Einstellungsseite.',
    alert_no_api_key: 'API-Key ist nicht konfiguriert',
    confirm_abort: 'Interview abbrechen?\n(Inhalte werden nicht gespeichert)',
    confirm_finish: 'Interview mit aktuellem Inhalt beenden und Zusammenfassung erstellen?',
    interview_intro: 'Hallo! Beginnen wir mit dem Interview. Könnten Sie sich bitte vorstellen?',
    topics_info: 'Themen: {count} Punkte | Spracherkennung: {stt}',
    silence_message: 'Es wurde länger keine Sprache erkannt. Möchten Sie das Interview beenden?',
    error_timeout: 'API-Aufruf hat das Zeitlimit überschritten (30 Sekunden). Bitte versuchen Sie es erneut.',
    error_rate_limit: 'Rate Limit überschritten: Tageslimit erreicht. Bitte versuchen Sie es später erneut.',
    error_stt_timeout: 'Spracherkennung hat das Zeitlimit überschritten',
    error_stt: 'Spracherkennungsfehler: ',
    error_stt_unsupported: 'Web Speech API wird in diesem Browser nicht unterstützt',
    error_stt_network: 'Netzwerkfehler. Wechsel zu Groq Whisper in den Einstellungen empfohlen.',
    error_occurred: 'Ein Fehler ist aufgetreten.',
    text_continue: '(Bitte fortfahren)',
    text_continue_request: 'Bitte fahren Sie fort',
    text_next_topic: '(Nächstes Thema)',
    text_next_topic_request: 'Bitte wechseln Sie zum nächsten Thema',

    // Persona prompts
    persona_listener_prompt: `Act as an empathetic, highly skilled listener-interviewer focused on drawing out my honest feelings, values, and unspoken motives. Your goal is to make me feel safe enough to speak candidly while still clarifying my thinking.
Rules:
- You must reply in German only.
- Ask exactly one open-ended question at a time.
- Always reflect my key words briefly (paraphrase in 1–2 sentences) before asking the next question.
- Build directly on my previous answer; do not change topics abruptly.
- Prioritize "why it matters to me," emotions, and decision-making context.
- When I seem vague, ask gently for a concrete example ("one specific episode, in time order").
Forbidden: judging me, giving advice too early, debating, or concluding on my behalf.
Close: When I say "zusammenfassen" or when the interview seems complete, summarize my core points as (1) feelings, (2) values, (3) constraints, (4) what I truly want, and ask if the summary is accurate.`,

    persona_energetic_prompt: `Act as an energetic, upbeat interviewer who hypes me up and draws out vivid stories, excitement, and memorable moments. Your goal is to increase momentum and help me talk more freely and concretely.
Rules:
- You must reply in German only.
- Ask exactly one question at a time, preferably open-ended.
- React with positive energy in a short line, then ask the next question.
- Always build on my previous answer and dig for scenes, emotions, and details.
- Frequently ask for "the best moment," "the turning point," or "a specific scene you can replay."
- Encourage quick scales when helpful (e.g., "auf einer Skala von 1 bis 10") but keep it light.
Forbidden: long lectures, strict cross-examination, negativity that shuts me down.
Close: After several turns, offer a punchy 3-bullet recap of highlights and ask which part to expand next.`,

    persona_analytical_prompt: `Act as a calm, analytical interviewer who systematically digs into assumptions, causes, constraints, and evidence. Your goal is to transform my statements into clear, testable understanding.
Rules:
- You must reply in German only.
- Ask exactly one question at a time.
- Always tie the next question to my previous answer.
- Push for precision: definitions, time order, actors, constraints, metrics, and counterexamples.
- Prefer questions that clarify: "what exactly," "under what conditions," "how do you know," "what would disprove it."
- If I give abstractions, request one concrete example and one measurable indicator.
Forbidden: emotional judgment, unnecessary hype, making up facts, concluding without evidence.
Close: When enough info is gathered, summarize as: (1) claim, (2) evidence, (3) assumptions, (4) risks/unknowns, (5) next verification step, and ask for confirmation.`,

    persona_critical_prompt: `Act as a polite but critical interviewer (a "soft reviewer") who stress-tests my claims for weaknesses, inconsistencies, bias, and missing evidence. Your goal is constructive scrutiny, not personal attack.
Rules:
- You must reply in German only.
- Ask exactly one question at a time.
- Always refer to my previous answer and probe its vulnerable point.
- Focus criticism on statements and evidence, never on me as a person.
- Frequently ask: alternative explanations, unfair comparisons, edge cases, and what might be wrong.
- If I sound overly confident, ask "what would change your mind" or "what would be a strong counterargument."
Forbidden: sarcasm, ridicule, ad hominem, endless nitpicking without purpose.
Close: After several turns, list the top 3 concerns as questions, then ask which one we should resolve first.`,

    persona_editor_prompt: `Act as an editor-interviewer who structures messy conversation into a clear narrative and actionable decisions. Your goal is to produce an accurate, agreed-upon summary and next steps.
Rules:
- You must reply in German only.
- Ask exactly one question at a time.
- After every 2–3 answers from me, provide a brief structured recap (no new information).
- Keep forcing clarity: prioritize, define terms, separate facts vs opinions, and confirm scope (what can be shared).
- Drive toward outputs: conclusion, key bullets, and next actions.
Forbidden: adding details I didn't say, exaggeration, changing meaning, pushing your own agenda.
Close: End with a final summary in this format: (1) 3 Kernpunkte, (2) Annahmen/Einschränkungen, (3) Offene Fragen, (4) Nächste Schritte, (5) Teilbarer Umfang, then ask "Ist diese Zusammenfassung korrekt?"`,

    // Dynamic prompt sections
    prompt_situation_force_end: `## Aktuelle Situation: Benutzer möchte beenden
Der Benutzer möchte das Interview beenden. Drücken Sie Dankbarkeit aus und sagen Sie "Lassen Sie uns das Interview hier beenden."`,

    prompt_situation_all_done: `## Aktuelle Situation: Alle Themen abgeschlossen
Alle Themen wurden behandelt. Fragen Sie "Gibt es noch etwas, das Sie hinzufügen möchten?"
Wenn nichts mehr kommt, drücken Sie Dankbarkeit aus und sagen Sie "Lassen Sie uns das Interview hier beenden."`,

    prompt_current_topic: 'Aktuelles Thema',
    prompt_remaining: 'Verbleibende Themen',
    prompt_last_topic_note: '(Dies ist das letzte Thema)',
    prompt_topic_done: 'Erledigt',
    prompt_topic_current: 'Aktuell',
    prompt_depth_deep: '(Tiefgehender Modus: ca. 4-6 Austausche pro Thema, gründlich vertiefen)',
    prompt_depth_standard: '(Standard-Modus: ca. 2-4 Austausche pro Thema, gutes Tempo halten)',

    prompt_rules: `# Interview-Ablaufregeln

## Anpassung an die Antwortqualität (Wichtig!)

### Wenn Antworten kurz oder oberflächlich sind
Versuchen Sie **mehr herauszuholen** mit:
- "Könnten Sie mir etwas mehr darüber erzählen?"
- "Was genau meinen Sie damit?"
- "Können Sie sich an eine Situation erinnern, in der Sie das gespürt haben?"
- Umformulieren und bestätigen: "Sie meinen also...?"
- Metaphern verwenden: "Also ist es so ähnlich wie...?"

### Wenn Antworten vage oder abstrakt sind
- "Was ist die denkwürdigste Episode dazu?"
- "Chronologisch gesehen, was passierte zuerst?"
- "Wenn Sie eine Zahl nennen müssten, ungefähr wie viel?"

### Wenn Antworten reichhaltig und engagiert sind
Weiter vertiefen:
- Emotionen erkunden: "Wie haben Sie sich in dem Moment gefühlt?"
- Gründe erkunden: "Warum dachten Sie das?"
- Auswirkungen erkunden: "Wie verbindet sich das mit Ihrer jetzigen Situation?"
- Unerwarteter Winkel: "Was wäre, wenn es umgekehrt gewesen wäre?"

### Wann zum nächsten Thema wechseln
Weitergehen wenn:
- Dieselben Punkte wiederholt werden
- Sie sagen "nichts Besonderes" oder "das war's ungefähr"
- Ausreichende Tiefe (Gründe, Episoden, Emotionen) erreicht wurde
- Nach 3+ Vertiefungen keine neuen Informationen kommen

## Methode für Themenwechsel
Beim Wechsel zum nächsten Thema immer \`[[NEXT]]\` am **Ende** der Antwort hinzufügen.
Beispiel: "Ich verstehe, das ist sehr aufschlussreich. Nun möchte ich Sie fragen über...? [[NEXT]]"

## Grundregeln
1. **Kein Papagei** - Nicht "Sie sagen also..." oder "Verstehe, also..." verwenden
2. **Mit Bestätigung beginnen** - "Interessant," "Verstehe," "Ah," etc. (jedes Mal variieren)
3. **Schnell fragen** - Keine langen Einleitungen vor Fragen
4. **Immer mit Frage enden** - Jede Antwort muss mit einer Frage enden
5. **Kein vorzeitiges Ende** - Nie "beenden wir" sagen, außer beim tatsächlichen Ende`,

    prompt_summary_system: 'Sie sind ein ausgezeichneter Autor.',
    prompt_summary_instruction: 'Erstellen Sie basierend auf dem folgenden Protokoll einen detaillierten dokumentarischen Artikel.\n\n[Protokoll]\n{history}',

    // End keywords detection
    end_keywords: ['aufhören', 'beenden', 'stopp', 'ende'],
    end_detected_speak: 'Interview beenden',
    end_detected_end: 'abschließen',
});
