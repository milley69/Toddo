<template>
  <div>Page: foo</div>
</template>

<script lang="ts" setup>
definePageMeta({ middleware: 'auth' })
</script>
