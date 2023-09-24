<template>
  <div class="relative flex flex-col gap-6">
    <div class="absolute select-none -top-12 -left-12">
      <i class="bx bxs-quote-alt-left text-neutral !text-7xl"></i>
    </div>
    <blockquote class="z-10 max-w-lg text-3xl">
      {{ quote.text }}
    </blockquote>
    <div class="flex items-center gap-4">
      <div class="avatar inline-block">
        <div class="w-12 mask mask-squircle">
          <img :src="quote.user.avatar" :alt="quote.user.name" />
        </div>
      </div>

      <span class="flex flex-col">
        <cite class="not-italic font-medium text-scale-1100 whitespace-nowrap">@{{ quote.user.name }}</cite>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const quotesEn: string[] = [
  'Toddo is a game-changer for managing to-do lists with separate task groups and secure authorization and database features.',
  'Toddo is a simple and intuitive to-do list app with separate groups for different areas of life, highly recommended.',
  'Toddo is a lifesaver for those struggling with organization, with easy task tracking and the ability to create different groups for projects.',
  'Toddo is a well-designed app with separate task groups and secure authorization and database features, a great addition to productivity toolkits.',
  'Toddo is a fantastic app for staying organized with separate task groups and useful features like authorization and database management, highly recommended for boosting productivity.',
]

const quotesRu: string[] = [
  'Toddo - это новое приложение для управления списками дел с отдельными группами задач и функциями безопасной авторизации и базы данных.',
  'Toddo - это простое и интуитивно понятное приложение для ведения списков дел с отдельными группами для различных сфер жизни.',
  'Toddo - спасение для тех, кто испытывает трудности с организацией, благодаря удобному отслеживанию задач и возможности создавать различные группы для проектов.',
  'Toddo - это хорошо продуманное приложение с раздельными группами задач и функциями безопасной авторизации и базы данных, отличное дополнение к набору инструментов для повышения продуктивности.',
  'Toddo - это замечательное приложение для организации работы с отдельными группами задач и такими полезными функциями, как авторизация и управление базами данных, очень рекомендуемое для повышения продуктивности.',
]

const quote = reactive({
  user: {
    name: 'milley',
    avatar: 'https://cdn.discordapp.com/avatars/1071044442598932560/a619d62eeeba62890a1ee282e6bbc0e8.webp?size=128',
  },
  text: '',
})

const getRandomString = (arr1: string[], arr2: string[]): string => {
  const randomIndex = Math.floor(Math.random() * arr1.length)
  return Math.random() <= 0.5 ? arr1[randomIndex] : arr2[randomIndex]
}

onMounted(() => {
  quote.text = getRandomString(quotesEn, quotesRu)
})
</script>
