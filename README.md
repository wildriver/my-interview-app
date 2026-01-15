# AI Voice Interviewer (Powered by Groq) 🎙️

ブラウザだけで動作する、超高速AI音声インタビュー練習アプリです。
Groq API (Llama 3) の圧倒的な推論速度と、ブラウザ標準の Web Speech API を組み合わせることで、リアルタイムに近い自然な音声会話を実現しています。

![App Screenshot](https://via.placeholder.com/800x400?text=App+Screenshot+Here)
## ✨ 特徴

- **🗣️ 完全音声対話**: マイクに向かって話すだけで、AI面接官が音声で応答します。
- **⚡ 爆速レスポンス**: 推論エンジンに [Groq](https://groq.com/) を採用。待ち時間のない会話が可能です。
- **🔒 プライバシー重視**: サーバーサイドのデータベースは不要。会話ログはすべてあなたのブラウザ内 (`IndexedDB`) に保存されます。
- **🔑 Bring Your Own Key**: ユーザー自身の Groq API Key を使用するため、開発者にキーを渡す必要がなく安全です。
- **📝 自動サマリー生成**: インタビュー終了後、AIが会話内容を要約し、フィードバックとして保存します。

## 🚀 デモ

**[デモアプリを開く](https://[あなたのVercelプロジェクト名].vercel.app)**
> **注意**: 音声認識機能 (`webkitSpeechRecognition`) を使用するため、**Google Chrome** または **Microsoft Edge** でアクセスしてください。

## 🛠️ 使い方

1. **Groq APIキーの取得**
   - [Groq Cloud Console](https://console.groq.com/keys) にアクセスし、API Key (無料枠あり) を取得します。

2. **アプリ設定**
   - アプリを開き、API Keyを入力します。
   - インタビューの「テーマ（聞きたいことリスト）」や「AIの人格」を自由に設定します。

3. **インタビュー開始**
   - 「開始する」ボタンを押し、マイクの使用を許可してください。
   - AIが質問を投げかけます。回答が終わると自動検知（またはボタン操作）でAIが返答します。

## 📦 インストール (ローカルで動かす場合)

このアプリは静的なHTML/JSのみで構成されているため、特別なビルド手順は不要です。

### 方法 1: ローカルサーバーで起動 (推奨)
マイク権限を安定させるため、ローカルサーバー経由での起動を推奨します。

```bash
# リポジトリをクローン
git clone [https://github.com/](https://github.com/)[あなたのユーザー名]/[リポジトリ名].git
cd [リポジトリ名]

# 任意のローカルサーバーツールで起動 (例: python, http-server, serveなど)
npx serve .
# または
python3 -m http.server
