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

    <UPageSection
      id="features"
      title="やってきたことたち(抜粋)"
      description="めんどい太郎がこれまでやってきたことの一部を抜粋して紹介"
      headline="抜粋紹介"
      :features="[{
        icon: 'material-symbols-chat-bubble',
        title: 'めんどいチャット(第一世代)',
        description: 'めんどいチャットの第一世代。',
        to: '/works/1st-mendoichat/'
      }, {
        icon: 'mdi-cash-register',
        title: '文化祭の会計システム 2025',
        description: '文化祭で用いる会計システム。2025年の文化祭で使用。',
        to: '/works/pos-2025/'
      }, {
        icon: 'material-symbols-two-pager',
        title: '無駄なwork',
        description: 'しょーもないドメイン。`mudana.work`',
        to: '/works/mudana-work/'
      }
      ]"
    />
  </div>
</template>
