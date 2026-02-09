# AI Voice Interviewer (Powered by Groq)

A blazing-fast AI voice interview app that runs entirely in your browser.
By combining Groq API's exceptional inference speed with speech recognition (Groq Whisper / Web Speech API), it delivers near real-time natural voice conversations.

> **[日本語版 (README.md)](README.md)**

## Features

- **Full Voice Interaction**: Just speak into your microphone and the AI interviewer responds with voice.
- **Ultra-Fast Response**: Powered by [Groq](https://groq.com/) inference engine for zero-wait conversations.
- **Multi-Language UI**: Supports Japanese, English, and German interfaces with one-click switching.
- **Dual Speech Recognition**: Choose between Groq Whisper (high accuracy) and Web Speech API (free, built-in).
- **Privacy First**: No server-side database required. All conversation logs are stored in your browser (`IndexedDB`).
- **Bring Your Own Key**: Uses your own Groq API Key — no need to share credentials with anyone.
- **Auto Summary Generation**: After the interview, AI summarizes the conversation and saves it.
- **5 AI Personalities**: Choose the best personality to match your interview goals.
- **Dynamic Interview Flow**: Adapts to response quality — digs deeper or moves to the next topic naturally.
- **Text Input Fallback**: Can't use voice? Type your responses instead.

## Demo

**[Open Demo App](https://wildriver.github.io/my-interview-app/index.html)**

> **Recommended Browsers**: Google Chrome / Microsoft Edge (for speech recognition)

## How to Use

### 1. Get a Groq API Key
Visit [Groq Cloud Console](https://console.groq.com/keys) and get an API Key (free tier available).
Your API key is never sent to any server. There's an option to save it in your browser's `localStorage`.

### 2. Configure Settings
- Enter your API key (with rate limit checker)
- Select an AI model (8 models available)
- Choose from 5 AI personality types
- Select speech recognition engine (Groq Whisper / Web Speech API)
- Set interview title, background knowledge, and topic list
- Adjust voice and speed
- Switch UI language (Japanese / English / Deutsch)

### 3. Start the Interview
Click the "Start Interview" button and allow microphone access.
The AI will ask questions, and when you finish speaking, it automatically responds.

## AI Personality Types

| Type | Description |
|------|-------------|
| 🎧 Listener | Empathetic counselor style. Focuses on feelings and values |
| 🎤 Energetic | Upbeat MC style. Draws out vivid stories with energy |
| 🔍 Analytical | Calm analysis & hypothesis testing. Clarifies definitions and evidence |
| 📝 Critical | Constructive scrutiny. Points out inconsistencies and weaknesses |
| 📋 Editor | Summarizer & fact-checker. Structures and confirms key points |

## Model Selection

Groq API offers a free tier with rate limits that vary by model.
Use the "Check Limits" button in the app to see remaining requests for each model.

| Model | Tag | Notes |
|-------|-----|-------|
| **Llama 3.1 8B Instant** | Fastest | **Recommended**: Fast with generous free tier |
| GPT-OSS 20B | Fast | OpenAI-compatible fast model |
| Llama 4 Maverick 17B | Fast | Meta's latest MoE model |
| Llama 4 Scout 17B | - | Lightweight Scout variant |
| Qwen3 32B | - | High-performance model by Alibaba |
| Llama 3.3 70B | Quality | High quality but stricter limits |
| GPT-OSS 120B | Quality | Large-scale, high quality |
| Kimi K2 Instruct | - | Model by Moonshot AI |

### Usage Estimates
- Per interview: 10–30 requests, 20,000–50,000 tokens
- With Llama 3.1 8B: approximately 10–20 interviews per day

## Speech Recognition Engines

| Engine | Accuracy | Cost | Notes |
|--------|----------|------|-------|
| **Groq Whisper** | High | Uses API credits | Recommended. Stable accuracy |
| Web Speech API | Medium | Free | Requires Chrome/Edge and network connection |

## Architecture

```
┌──────────────────────────────────────────────────────┐
│                      Browser                          │
│  ┌──────────────┐  ┌──────────────┐  ┌────────────┐  │
│  │ Speech API   │  │ IndexedDB    │  │ localStorage│  │
│  │ (TTS)        │  │ (History)    │  │ (Settings)  │  │
│  └──────────────┘  └──────────────┘  └────────────┘  │
│         │                                             │
│         ▼                                             │
│  ┌────────────────────────────────────────────────┐   │
│  │             interview_app.html                  │   │
│  │  - Speech recognition & synthesis control       │   │
│  │  - Conversation history management              │   │
│  │  - Dynamic prompt generation                    │   │
│  │  - i18n multi-language support                  │   │
│  └────────────────────────────────────────────────┘   │
│                        │                              │
└────────────────────────│──────────────────────────────┘
                         │ HTTPS (fetch)
                         ▼
              ┌───────────────────────┐
              │      Groq API         │
              │  LLM Inference +      │
              │  Whisper STT          │
              └───────────────────────┘
```

### Tech Stack
- **Frontend**: Vanilla JavaScript (no frameworks)
- **Speech Recognition**: Groq Whisper API / Web Speech API
- **Speech Synthesis**: Web Speech API (`SpeechSynthesis`)
- **LLM**: Groq API (Llama 3.1 8B / 3.3 70B / Llama 4, etc.)
- **Internationalization**: Custom i18n engine (`i18n.js` + language files)
- **Data Storage**: IndexedDB (history), localStorage (settings & language)

## File Structure

```
my-interview-app/
├── index.html           # Settings page (3-column layout)
├── interview_app.html   # Interview runtime
├── i18n.js              # i18n core engine
├── lang/
│   ├── ja.js            # Japanese
│   ├── en.js            # English
│   └── de.js            # German
├── README.md            # Japanese README
├── README_EN.md         # This file (English)
├── ogp.png              # OGP image
├── screenshot.jpg       # Screenshot
└── vercel.json          # (reference)
```

## Deployment

### GitHub Pages (Recommended)
Speech recognition requires HTTPS. GitHub Pages makes it easy to host.

```bash
# Push to GitHub
git push origin main

# Settings > Pages > Source: main branch
```

### Local Development
```bash
# Start with any HTTP server
npx serve .
# or
python -m http.server 8000
```

> **Note**: Speech recognition may not work on Vercel (Web Speech API limitation). GitHub Pages is recommended.

## License

Apache License 2.0
