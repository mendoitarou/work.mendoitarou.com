<script setup>
defineProps({
    images: {
        type: Array
    }
})
</script>

<template>
    <div>
        <br><USeparator /><br>
        <p>Galary</p>
        <UCarousel v-slot="{ item }" arrows dots :prev="{ color: 'primary' }" :next="{ variant: 'solid' }" :items="images" class="w-full mx-auto max-h-[720px]">
            <NuxtImg :src="item" fit="contain" width="1280" height="720" class="rounded-lg max-h-[720px]" loading="lazy" />
        </UCarousel>
        <br>
    </div>
</template>
