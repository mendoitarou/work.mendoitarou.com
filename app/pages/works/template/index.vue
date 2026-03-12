<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const title = 'Template'
const description = 'テンプレート'

const headerLinks = ref<ButtonProps[]>([{
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    to: 'https://github.com/mendoitarou/hogege',
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
                <p>本文</p>
                <p><ULink to="https://example.com/" target="_blank">リンク</ULink></p>
                <br>
                <UPageCard title="使用技術">
                    <UPageColumns>
                        <UPageCard title="フレームワーク">
                            <UPageCard icon="vscode-icons-file-type-nuxt" title="hogehoge" description="hogehoge" />
                        </UPageCard>
                    </UPageColumns>
                </UPageCard>
            </div>
        </UContainer>
    </div>
</template>
