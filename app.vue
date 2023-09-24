<template>
  <app-navbar />
  <main class="pt-16 w-full">
    <nuxt-page />
  </main>
  <lazy-app-footer />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
const { isGradientBackground } = storeToRefs(useUser())

onMounted(() => {
  if (localStorage.getItem('toddo-enable-animation') === 'true' || !('toddo-enable-animation' in localStorage)) {
    localStorage.setItem('toddo-enable-animation', 'true')
    isGradientBackground.value = true
  } else {
    localStorage.setItem('toddo-enable-animation', 'false')
    isGradientBackground.value = false
  }
})

watch(
  () => isGradientBackground.value,
  (value) => {
    localStorage.setItem('toddo-enable-animation', JSON.stringify(value))
    isGradientBackground.value = value
  }
)
</script>

<style>
::-webkit-scrollbar {
  width: 0;
}
.qwe {
  border: 1px solid salmon;
}
.qwe2 * {
  border: 1px solid salmon;
}
.qwe3 > * {
  border: 1px solid salmon;
}
</style>
