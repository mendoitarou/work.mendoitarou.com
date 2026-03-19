<script setup lang="ts">
const { data: myWorkPin } = await useAsyncData('myWork-list-pin', () => {
    return queryCollection('works')
        .where('draft', '=', false)
        .where('pinned', '=', true)
        .order('id', 'DESC')
        .all()
})
</script>

<template>
    <div>
        <UContainer>
            <UPageHeader headline="厳選" />
            <br>
            <UPageGrid>
                <UBlogPost v-for="(myWork, index) in myWorkPin" :key="index" :icon="myWork.icon" :title="myWork.title"
                    :description="myWork.description" :to="myWork.path" :date="myWork.createDate"
                    :badge="{ icon: myWork.icon, label: myWork.mainCategory, color: 'secondary', variant: 'solid' }" />
            </UPageGrid>
        </UContainer>
    </div>
</template>
