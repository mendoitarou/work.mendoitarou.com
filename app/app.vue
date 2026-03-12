<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'ja'
  }
})

const title = 'めんどい太郎のやってきたこと'
const description = 'めんどい太郎がこれまでやってきたことを紹介するページ'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://work.mendoitarou.com/images/card-image.png',
  twitterImage: 'https://work.mendoitarou.com/images/card-image.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <UBanner icon="ic-outline-announcement" color="warning" title="このWebサイトは現在制作中です。" />
    <UBanner icon="i-lucide-info" title="めんどい太郎についてはホームページを参照してください。" to="https://home.mendoitarou.com/" target="_blank" close />

    <UHeader>
      <template #left>
        <NuxtLink to="/">
          <b>めんどい太郎のやってきたこと</b>
        </NuxtLink>
      </template>

      <template #right>
        <UColorModeButton />

        <UButton
          to="https://github.com/mendoitarou/work.mendoitarou.com"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
      <br>
    </UMain>

    <USeparator />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Built with Nuxt UI • © {{ new Date().getFullYear() }} <ULink to="https://home.mendoitarou.com/">mendoitarou_</ULink>
        </p>
      </template>

      <template #right>
        <UButton
          to="https://home.mendoitarou.com/"
          target="_blank"
          icon="material-symbols-home"
          aria-label="HomePage"
          color="neutral"
          variant="ghost"
        />
        <UButton
          to="https://github.com/mendoitarou/work.mendoitarou.com"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
