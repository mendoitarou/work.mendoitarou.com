<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const title = '無駄なwork'
const description = 'しょーもないドメイン。`mudana.work`'

const headerLinks = ref<ButtonProps[]>([{
    label: 'WebPage',
    icon: 'material-symbols-two-pager',
    to: 'https://mudana.work/',
    target: '_blank'
}, {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    to: 'https://github.com/mendoitarou/mudana_work',
    target: '_blank'
}])
</script>

<template>
    <div>
        <UContainer>
            <UPageHeader :title="title" :description="description" :links="headerLinks"/>
            <br>
            <p> <UBadge icon="material-symbols-two-pager" label="WebSite" /> </p>
            <br>
            <div>
                <p>しょーもないダジャレみたいなドメインが欲しくて取得したドメイン。</p>
                <p><ULink to="https://kuso.domains/" target="_blank">kuso.domains</ULink>というサイトのリスペクトです。</p>
                <p><ULink to="https://github.com/kuso-domains/kuso.domains" target="_blank">kuso-domains/kuso.domains - GitHub</ULink></p>
                <p>なお、このWebページのソースコードはGitHubで公開しています。</p>
                <br>
                <UPageCard title="使用技術">
                    <UPageColumns>
                        <UPageCard title="フレームワーク">
                            <UPageCard icon="i-logos-nuxt-icon" title="Nuxt.js" description="モダンなWebページの作成を可能にするため採用" />
                        </UPageCard>
                        <UPageCard title="デプロイ環境">
                            <UPageCard icon="mdi-server" title="VPS" description="レンタルサーバではなくVPS上にデプロイしています。(2026/03/12現在、資金不足により5月ごろにWebサイトの配信が一時停止する予定です。)" />
                            <UPageCard icon="i-logos-cloudflare-icon" title="Cloudflare" description="Cloudflareを用いてプロキシを挟むようにしています。" />
                        </UPageCard>
                    </UPageColumns>
                </UPageCard>
            </div>
        </UContainer>
    </div>
</template>
