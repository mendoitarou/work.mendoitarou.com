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
        <UCarousel v-slot="{ item }" arrows :prev="{ color: 'primary' }" :next="{ variant: 'solid' }" :items="images" class="w-full mx-auto">
            <img :src="item" width="1280" height="720" class="rounded-lg" loading="lazy">
        </UCarousel>
    </div>
</template>
