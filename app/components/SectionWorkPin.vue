<script setup>
const myWorkPin = [{
    icon: 'material-symbols-two-pager',
    title: 'MyWork(このサイト)',
    description: 'めんどい太郎がこれまでにやってきたことを書いたページ',
    to: '/works/my-work-page/'
}, {
    icon: 'material-symbols-two-pager',
    title: '無駄なwork',
    description: 'しょーもないドメイン。`mudana.work`',
    to: '/works/mudana-work/'
}, {
    icon: 'material-symbols-chat-bubble',
    title: 'めんどいチャット(第一世代)',
    description: 'めんどいチャットの第一世代。',
    to: '/works/1st-mendoichat/'
}
]
</script>

<template>
    <div>
        <UContainer>
            <UPageHeader headline="厳選" />
            <br>
            <UPageColumns>
                <UPageCard
                    v-for="(myWork, index) in myWorkPin"
                    :key="index"
                    highlight
                    highlight-color="primary"
                    :icon="myWork.icon"
                    :title="myWork.title"
                    :description="myWork.description"
                    :to="myWork.to"
                />
            </UPageColumns>
        </UContainer>
    </div>
</template>
