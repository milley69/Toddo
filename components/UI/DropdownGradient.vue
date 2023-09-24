<template>
  <label class="label">
    <span class="label-text">
      <i class="bx bxs-adjust-alt"></i>
      Background
    </span>
    <input type="checkbox" class="checkbox" v-model="isGradientBackground" />
  </label>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
const { isGradientBackground } = storeToRefs(useUser())
</script>
