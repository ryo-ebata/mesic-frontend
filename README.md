# 食事店のマッチング

## 技術選定

- **Frontend**
  - Next.js
  - TypeScript
  - Vercel
  - Hotpepper API
  - Material UI
- **Backend**
  - NestJS
  - TypeScript
- **Recommend Engine**
  - Flask
  - Python

## フロントエンド

### ディレクトリ設計

```
src
├── components # コンポーネント
│   ├── Atoms # 最小単位
│   ├── Molecules # Organismsを複数組み合わせたもの
│   ├── Organisms # Atomsを複数組み合わせたもの
│   ├── Page
│   └── Templates # 情報の入っていない箱。Moleculesを複数組み合わせる。
├── constants # 定数やタイプなどを定義
│   ├── Consts
│   └── Types
├── pages
├── repositories # データのやり取り
├── servises # データ整形
├── styles # グローバルデザイン
└── utils
```
