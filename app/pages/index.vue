<template>
  <div>
    <UPageHero
      title="めんどい太郎のやってきたこと"
      description="めんどい太郎がこれまでやってきたことを紹介するページ"
      :links="[{
        label: 'さっそく見る',
        to: '/works/',
        trailingIcon: 'i-lucide-arrow-right',
        size: 'xl'
      }]"
    />

    <SectionWorkPin />
  </div>
</template>
