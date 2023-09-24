<template>
  <footer class="fixed bottom-2 pl-2 pr-4 w-full">
    <a
      href="http://github.com/milley69"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:underline underline-offset-4 absolute bottom-0"
      >@milley</a
    >
    <span
      data-tip="Change →"
      class="tooltip-accent tooltip-left align-middle float-right"
      :class="{ 'tooltip-open': stepTooltip % 2 === 0, tooltip: stepTooltip < 5 }"
    >
      <span class="btn btn-square btn-outline btn-disabled">EN</span>
    </span>
  </footer>
</template>

<script setup lang="ts">
const stepTooltip = ref(1)

onMounted(() => {
  const interval: any = setInterval(() => (stepTooltip.value <= 4 ? stepTooltip.value++ : clearInterval(interval)), 500)
})
</script>
