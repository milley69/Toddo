<template>
  <header
    class="bg-base-100 text-base-content fixed top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 shadow-sm"
  >
    <nav class="navbar w-full container">
      <div class="flex-1">
        <nuxt-link to="/" class="btn btn-ghost normal-case text-xl">{{ title }}</nuxt-link>
      </div>
      <div class="flex-none gap-3">
        <UIThemeSwitcher />
        <app-navbar-auth v-if="isAuth" />
      </div>
    </nav>
    <div class="nuxt-loader-bar"></div>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
const { isAuth, user } = storeToRefs(useUser())

onMounted(() => {
  const { setUser } = useUser()
  setUser({
    name: 'milley',
    email: 'qwe@qwe.qwe',
    avatar: 'https://cdn.discordapp.com/avatars/1071044442598932560/a619d62eeeba62890a1ee282e6bbc0e8.webp?size=128',
    uid: '12315648756123',
  })
})

const title = computed(() => (user.value ? user.value.name : 'Toddo'))
</script>

<style scoped>
@media (prefers-color-scheme: dark) {
  .nuxt-loader-bar {
    opacity: 0.5;
  }
}
.nuxt-loader-bar {
  background: repeating-linear-gradient(to right, #36e4da 0%, #1de0b1 25%, #00dc82 50%, #1de0b1 75%, #36e4da 100%);
  background-size: 200% auto;
  background-position: 0 0;
  animation: gradient 2s infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
}

@keyframes gradient {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -200% 0;
  }
}
</style>
