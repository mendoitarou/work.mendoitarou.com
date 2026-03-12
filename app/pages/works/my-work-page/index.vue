<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const meta = ref({
    title: 'MyWork(このサイト)',
    description: 'めんどい太郎がこれまでにやってきたことを書いたページ',
})

const headerLinks = ref<ButtonProps[]>([{
    label: 'WebPage',
    icon: 'material-symbols-two-pager',
    to: 'https://work.mendoitarou.com/',
    target: '_blank'
}, {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    to: 'https://github.com/mendoitarou/work.mendoitarou.com',
    target: '_blank'
}])
</script>

<template>
    <div>
        <UContainer>
            <UPageHeader :title="meta.title" :description="meta.description" :links="headerLinks"/>
            <br>
            <p> <UBadge icon="material-symbols-two-pager" label="WebSite" /> </p>
            <br>
            <div>
                <p>私、めんどい太郎がこれまでにやってきたことを紹介するWebページです。</p>
                <p>公開を終了したもの、身内向けに作ったものなど実物を公開できないもの等も一部紹介しています。</p>
                <p>是非、色々見てみてください。</p>
                <p>なお、このWebページのソースコードはGitHubで公開しています。</p>
                <br>
                <UPageCard title="使用技術">
                    <UPageColumns>
                        <UPageCard title="フレームワーク">
                            <UPageCard icon="i-logos-nuxt-icon" title="Nuxt.js" description="モダンなWebページの作成を可能にするため採用" />
                        </UPageCard>
                        <UPageCard title="ライブラリ">
                            <UPageCard icon="i-logos-nuxt-icon" title="Nuxt UI" description="UIデザインをライブラリに任せることで、ページの内容に集中して開発が可能に" />
                        </UPageCard>
                    </UPageColumns>
                </UPageCard>
            </div>
        </UContainer>
    </div>
</template>
