<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const title = '文化祭で用いる会計システム'
const description = '文化祭の出し物で用いる会計システム'

const headerLinks = ref<ButtonProps[]>([{
    label: 'Qiita',
    icon: 'simple-icons-qiita',
    to: 'https://qiita.com/mendoitarou_/items/6cfefd1a0e54e2866382',
    target: '_blank'
}])
</script>

<template>
    <div>
        <UContainer>
            <UPageHeader :title="title" :description="description"/>
            <br>
            <p> <UBadge icon="material-symbols-two-pager" label="WebSite" :links="headerLinks" /> </p>
            <br>
            <div>
                <p>文化祭の出し物で用いる会計システムを自作しました。</p>
                <p>Qiitaの記事は作成後数ヶ月以内に書いたものですので、そちらのほうが詳しく記載されている可能性が高いです。</p>
                <p>バックエンドは自身で、フロントエンドはAIにぶん投げという開発方法を取りました。</p>
                <p>文化祭の出し物で用いるシステムのように、多くのユーザが実際に利用するシステムを作成すると毎回学びがあります。</p>
                <p>特に今回は、テストの重要性を改めて感じることとなりました。</p>
                <p>なお、このWebページのソースコードは非公開です。</p>
                <p><ULink to="https://example.com/" target="_blank">リンク</ULink></p>
                <br>
                <UPageCard title="使用技術">
                    <UPageColumns>
                        <UPageCard title="フロントエンド">
                            <UPageCard icon="devicon-nextjs" title="Next.js" description="Webフレームワークとして有名なNext.jsを採用" />
                        </UPageCard>
                        <UPageCard title="バックエンド">
                            <UPageCard icon="devicon-express" title="Express.js" description="APIサーバの開発で多く利用されているExpress.jsを採用" />
                        </UPageCard>
                        <UPageCard title="デプロイ環境">
                            <UPageCard icon="mdi-server" title="VPS" description="VPS上にデプロイ" />
                            <UPageCard icon="devicon-docker" title="Docker" description="デプロイにDockerを活用。環境構築の手間を削減" />
                            <UPageCard icon="devicon-cloudflare" title="Cloudflare" description="公開にはCloudflare Tunnel・Accessを利用し、セキュアなアプリ公開を実現" />
                        </UPageCard>
                    </UPageColumns>
                </UPageCard>
            </div>
        </UContainer>
    </div>
</template>
