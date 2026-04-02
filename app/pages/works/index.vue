<script setup lang="ts">
const { data: myWorks } = await useAsyncData('myWork-list', () => {
  return queryCollection('works')
    .where('draft', '=', false)
    .where('pinned', '=', false)
    .order('workId', 'DESC')
    .all()
})
</script>

<template>
  <div>
    <UContainer>
      <UPageHeader title="めんどい太郎のやってきたことたち" description="めんどい太郎がこれまでやってきたことたち" />
      <br>
      <SectionWorkPin />
      <br>
      <USeparator />
      <br>
      <UBlogPosts>
        <UBlogPost
          v-for="(myWork, index) in myWorks"
          :key="index"
          :title="myWork.title"
          :description="myWork.description"
          :to="myWork.path"
          :date="myWork.createDate"
          :image="myWork.thumbnail"
          :badge="{
            icon: myWork.icon,
            label: myWork.mainCategory,
            color: 'secondary',
            variant: 'solid'
          }"
        />
      </UBlogPosts>
    </UContainer>
  </div>
</template>
