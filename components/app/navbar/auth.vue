<template>
  <!-- <button class="btn btn-outline normal-case text-base leading-7 m-1" @click="push('sign-in')">Sign in</button> -->
  <button class="btn btn-outline btn-square" @click="push('sign-in')">Sign in</button>
</template>

<script setup lang="ts">
const { push } = useRouter()
</script>
