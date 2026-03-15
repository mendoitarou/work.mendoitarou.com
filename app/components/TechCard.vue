<script setup>
defineProps({
  cards: {
    type: Object
  }
})
</script>

<template>
  <div>
    <UPageCard
        :title="cards.title"
    >
        <UPageColumns>
            <UPageCard
                v-for="(middleCard, middleIndex) in cards.items"
                :key="middleIndex"
                :title="middleCard.title"
            >
                <UPageCard
                    v-for="(card, index) in middleCard.items"
                    :key="index"
                    :icon="card.icon"
                    :title="card.title"
                    :description="card.description"
                >
                </UPageCard>
            </UPageCard>
        </UPageColumns>
    </UPageCard>
  </div>
</template>
