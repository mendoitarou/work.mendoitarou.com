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
                <UPageCard
                    v-for="(myWork, index) in myWorkPin"
                    :key="index"
                    highlight
                    highlight-color="primary"
                    :icon="myWork.icon"
                    :title="myWork.title"
                    :description="myWork.description"
                    :to="myWork.path"
                />
            </UPageGrid>
        </UContainer>
    </div>
</template>
