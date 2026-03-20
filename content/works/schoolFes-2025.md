---
id: 5
title: 文化祭で用いる会計システム
description: 文化祭の出し物で用いる会計システム
createDate: 2025-07-03
pinned: false
icon: material-symbols-two-pager
thumbnail: /images/works/schoolFes-2025/staff-top.png
draft: false
mainCategory: WebSite
category: [
    { icon: material-symbols-two-pager, label: WebSite }
]
headerLinks: [
    { label: Qiita, icon: simple-icons-qiita, to: 'https://qiita.com/mendoitarou_/items/6cfefd1a0e54e2866382' }
---
文化祭の出し物で用いる会計システムを自作しました。

Qiitaの記事は作成後数ヶ月以内に書いたものですので、そちらのほうが詳しく記載されている可能性が高いです。

バックエンドは自身で、フロントエンドはAIにぶん投げという開発方法を取りました。

文化祭の出し物で用いるシステムのように、多くのユーザが実際に利用するシステムを作成すると毎回学びがあります。

特に今回は、テストの重要性を改めて感じることとなりました。

なお、このWebページのソースコードは非公開です。

::TechCard
---
cards: {
    title: 使用技術,
    items: [
        {
            title: フロントエンド,
            items: [
                {
                    icon: devicon-nextjs,
                    title: Next.js,
                    description: Webフレームワークとして有名なNext.jsを採用
                }
            ]
        },
        {
            title: バックエンド,
            items: [
                {
                    icon: devicon-express,
                    title: Express.js,
                    description: APIサーバの開発で多く利用されているExpress.jsを採用
                }
            ]
        },
        {
            title: デプロイ環境,
            items: [
                {
                    icon: mdi-server,
                    title: VPS,
                    description: VPS上にデプロイ
                },
                {
                    icon: devicon-docker,
                    title: Docker,
                    description: デプロイにDockerを活用。環境構築の手間を削減
                },
                {
                    icon: devicon-cloudflare,
                    title: Cloudflare,
                    description: '公開にはCloudflare Tunnel・Accessを利用し、セキュアなアプリ公開を実現'
                }
            ]
        }
    ]
}
---
::

::ImageGalary
---
images: [
    '/images/works/schoolFes-2025/login.png',
    '/images/works/schoolFes-2025/manager-top.png',
    '/images/works/schoolFes-2025/product_manage-top.png',
    '/images/works/schoolFes-2025/sale_cart.png',
    '/images/works/schoolFes-2025/sale_confirm.png',
    '/images/works/schoolFes-2025/sale_top.png',
    '/images/works/schoolFes-2025/staff-top.png'
]
---
::

