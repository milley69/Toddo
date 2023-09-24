<template>
  <div class="hero-content text-center text-white">
    <div
      class="card w-96 shadow-xl btn text-white h-auto no-animation btn-active cursor-default"
      :class="{ glass: isGradientBackground }"
    >
      <form class="card-body w-full gap-3 p-5" @submit.prevent="createNewGroup">
        <h1 class="normal-case">You don't have any entries or groups yet. Create the first one.</h1>
        <input
          type="text"
          class="bg-neutral-focus/50 hover:outline-neutral-content/20 focus:outline-neutral-content rounded-sm px-1 py-2 hover:outline focus:outline max-w-xs"
          v-model="newGroup.title"
          placeholder="Title"
          spellcheck
          @focus="checkNewGroupText('title')"
        />
        <textarea
          class="resize-none bg-neutral-focus/50 hover:outline-neutral-content/20 focus:outline-neutral-content rounded-sm px-1 py-2 hover:outline focus:outline max-w-xs"
          placeholder="Description (not require)"
          v-model="newGroup.description"
          spellcheck
          wrap="soft"
          maxlength="64"
          @focus="checkNewGroupText('description')"
        ></textarea>
        <div class="card-actions justify-end">
          <button
            type="submit"
            class="btn btn-ghost yet-animation"
            :class="isGradientBackground ? 'glass' : 'btn-outline'"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

const { push } = useRouter()
const { isGradientBackground } = storeToRefs(useUser())
const newGroup = reactive({
  title: 'Purchases',
  description: 'My grocery shopping...',
})

const createNewGroup = () => {
  checkNewGroupText('title')
  checkNewGroupText('description')
  console.log({ ...newGroup })
  const url = `/${newGroup.title}${newGroup.description ? '?description=' + newGroup.description : ''}`
  // push('/' + newGroup.title + '&=' + newGroup.description)
  push(url)
}

const checkNewGroupText = (isWhat: string) => {
  if (isWhat === 'title' && newGroup.title === 'Purchases') newGroup.title = ''
  if (isWhat === 'description' && newGroup.description === 'My grocery shopping...') newGroup.description = ''
}
</script>
