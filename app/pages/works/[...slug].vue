<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const slug = useRoute().params.slug
const { data: work } = await useAsyncData(`myworks-${slug}`, () => {
  return queryCollection('works').path(`/works/${slug}`).first()
})

const title = '無駄なwork'
const description = 'しょーもないドメイン。`mudana.work`'
const createDate = '2025-07-03'

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
        <UContainer v-if="work">
            <UPageHeader :title="work.title" :description="work.description" :links="work.headerLinks"/>
            <br>
            <p>作成日: {{ work.createDate }}</p>
            <p>Catetory: <UBadge v-for="(category, index) in work.category" :icon="category.icon" :label="category.label" /> </p>
            <br>
            <p> <UButton label="戻る" color="neutral" to="javascript:history.back();"/> </p>
            <br>
            <div>
                <ContentRenderer :value="work" />
            </div>
        </UContainer>
        <UContainer v-else>
            <p>作品が見つかりませんでした。</p>
            <p>URLを確認してください。</p>
        </UContainer>
    </div>
</template>
