<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const title = 'めんどいチャット(第一世代)'
const description = 'めんどいチャットの第一世代。'

const headerLinks = ref<ButtonProps[]>([{
    label: 'WebPage',
    icon: 'material-symbols-two-pager',
    to: 'https://chat.mendoitarou.com/',
    target: '_blank'
}])
</script>

<template>
    <div>
        <UContainer>
            <UPageHeader :title="title" :description="description" :links="headerLinks"/>
            <br>
            <p> <UBadge icon="material-symbols-two-pager" label="WebApplication" /> </p>
            <br>
            <div>
                <p>当時、スマートフォンを所持していなかった友達と連絡を取り合うために開発。</p>
                <p>Nintendo SwitchでWebブラウザが起動できる点に着目し、シンプルなWebアプリケーションとして設計</p>
                <p>現在は使われていないことや、脆弱性が潜んでいる可能性があることを理由にサービス一時停止中。</p>
                <p>WebSocket等のリアルタイム通信は行われておらず、PHPに対するGETやPOSTだけで実装されている。</p>
                <p>現在、第二世代の開発計画が進行中。しかし、私生活の多忙などによって2024年からプロジェクトは凍結状態である。</p>
                <p><ULink to="https://hub.mendoichat.jp/" target="_blank">hub.mendoichat.jp</ULink></p>
                <p>なお、このWebページのソースコードは非公開です。</p>
                <br>
                <UPageCard title="使用技術">
                    <UPageColumns>
                        <UPageCard title="フロントエンド">
                            <UPageCard icon="devicon-html5" title="HTML, CSS, JavaScript" description="ピュアなHTML, CSS, JavaScriptで構成" />
                        </UPageCard>
                        <UPageCard title="バックエンド">
                            <UPageCard icon="devicon-php" title="PHP" description="制約の多いレンタルサーバでも動作するPHP" />
                        </UPageCard>
                        <UPageCard title="デプロイ環境">
                            <UPageCard icon="mdi-server" title="お名前ドットコム レンタルサーバ" description="レンタルサーバで動かす前提で、設計を行いました。" />
                        </UPageCard>
                    </UPageColumns>
                </UPageCard>
            </div>
        </UContainer>
    </div>
</template>
