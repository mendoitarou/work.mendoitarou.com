<script setup lang="ts">
const slug = useRoute().params.slug
const { data: work } = await useAsyncData(`myworks-${slug}`, () => {
  return queryCollection('works').path(`/works/${slug}`).first()
})
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
            <UPageHero title="作品が見つかりませんでした。" description="URLを確認してください。" />
        </UContainer>
    </div>
</template>
