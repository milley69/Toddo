<template>
  <app-navbar />
  <main class="pt-16 container mx-auto w-full">
    <p v-if="isAuth">{{ isAuth }}</p>
    <p v-else>{{ isAuth }} | 🤔</p>
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
const { isAuth } = storeToRefs(useUser())
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
