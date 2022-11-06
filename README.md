# MesiCuu

## 食事店のマッチング

Hotpepper API を利用し、飲食店のデータベースを利用可能。
プロダクトの案に関しては、以下の URL から。

https://www.canva.com/design/DAFRIcSH_oc/cihwRPE6rZOtG97P4AVh-A/edit?utm_content=DAFRIcSH_oc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

## フロントエンドの環境構築

1. クローンしたこのルートディレクトリで、以下を実行。

```
$ yarn install
```

2. 環境構築が完了したら、以下を実行してサーバーを起動。

```
$ yarn dev
```

3. 以下の URL で確認する。

http://localhost:3000

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

### 外部 API との接続

外部 API との連携に関しては、`pages`ディレクトリ配下にある`api`ディレクトリで行う。

例として、Hotpepper API での検索クエリは以下。

```ts
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const params = new URLSearchParams(HOTPEPPER_SEACH_CONFIG.params);
  const response = await fetch(`${HOTPEPPER_SEACH_QUERY}?${params}`);
  const shops = await response.json();

  res.status(200).json({ shops });
}
```
