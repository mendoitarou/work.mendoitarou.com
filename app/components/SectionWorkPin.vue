<script setup lang="ts">
const { data: myWorkPin } = await useAsyncData('myWork-list-pin', () => {
    return queryCollection('works')
        .where('draft', '=', false)
        .where('pinned', '=', true)
        .order('workId', 'DESC')
        .all()
})
</script>

<template>
    <div>
        <UContainer>
            <UPageHeader headline="厳選" />
            <br>
            <UBlogPosts>
                <UBlogPost v-for="(myWork, index) in myWorkPin" :key="index" :title="myWork.title"
                    :description="myWork.description" :to="myWork.path" :date="myWork.createDate" :image="myWork.thumbnail"
                    :badge="{ icon: myWork.icon, label: myWork.mainCategory, color: 'secondary', variant: 'solid' }" />
            </UBlogPosts>
        </UContainer>
    </div>
</template>
