<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const title = '文化祭で用いるスタッフ向け業務アプリケーション'
const description = '文化祭の出し物で用いるスタッフ向けの業務アプリケーション'

const headerLinks = ref<ButtonProps[]>([{
    label: 'Qiita',
    icon: 'simple-icons-qiita',
    to: 'https://qiita.com/mendoitarou_/items/8dbc174a6d1b55fb073d',
    target: '_blank'
}])
</script>

<template>
    <div>
        <UContainer>
            <UPageHeader :title="title" :description="description"/>
            <br>
            <p> <UBadge icon="material-symbols-two-pager" label="WebApplication" :links="headerLinks" /> </p>
            <br>
            <div>
                <p>文化祭の出し物でスタッフ向けに作成した業務アプリケーション。</p>
                <p>Qiitaの記事は作成後数ヶ月以内に書いたものですので、そちらのほうが詳しく記載されている可能性が高いです。</p>
                <p>持っている機能は「アカウント登録」と「スコア登録」、「スコアランキング確認」のみ。</p>
                <p>「その日のスコアランキングで1位となった方に景品を送る」というニーズが発生したため、開発した。</p>
                <p>アカウント登録はGoogleアカウントのみに絞り、メールアドレスを入手。後日連絡する手段を確保する。</p>
                <p>スコアランキングはWebページでいつでも閲覧可能な状態とし、模擬店の出店場所でもプロジェクターによる投影を行った。</p>
                <p>スコアランキングという特性上、リアルタイムで更新を行う必要がある。そのため、WebSocketによる通信を行いランキング更新時に自動で更新するようにした。</p>
                <p>ほかにも、お知らせなども表示することで案内板としての役割も。</p>
                <p>余談: 超短期間&寝不足状態で作成したため非常に作りが悪く、バグまみれな恐ろしいプログラムが出来上がりました。</p>
                <p>しかも、Qiitaの記事で他責ばかりしています。コレは非常によろしくない。今改めて考えると、確実に私が悪いです。同級生は悪くない。</p>
                <p>なお、このWebページのソースコードは非公開です。</p>
                <br>
                <UPageCard title="使用技術">
                    <UPageColumns>
                        <UPageCard title="フロントエンド">
                            <UPageCard icon="devicon-html5" title="HTML, CSS, JavaScript" description="ピュアなHTML, CSS, JavaScriptで構成" />
                        </UPageCard>
                        <UPageCard title="バックエンド">
                            <UPageCard icon="devicon-php" title="PHP" description="制約の多いレンタルサーバでも動作するPHP" />
                            <UPageCard icon="devicon-nodejs" title="Node.js" description="WebSocketでの通信を行うために採用" />
                        </UPageCard>
                        <UPageCard title="デプロイ環境">
                            <UPageCard icon="mdi-server" title="レンタルサーバ" description="フロントエンド・PHPはこっちで動かす" />
                            <UPageCard icon="mdi-server" title="VPS" description="WebSocketはどうしてもレンタルサーバでは動かないのでVPSで稼働" />
                        </UPageCard>
                    </UPageColumns>
                </UPageCard>
            </div>
        </UContainer>
    </div>
</template>
