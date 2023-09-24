<template>
  <div>
    <h1>{{ group }}</h1>
  </div>
</template>

<script setup lang="ts">
const { params, query } = useRoute()

const group = computed(() => (typeof params.group === 'string' ? params.group : params.group[0]))

const todo = {
  title: group.value,
  description: query.description ?? '',
}
console.log('todo: ', todo)
</script>
