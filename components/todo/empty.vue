<template>
  <div class="indicator mx-auto">
    <div class="indicator-item indicator-top indicator-end" v-show="newField.isActive">
      <button class="btn btn-primary btn-sm btn-circle" @click="delNewField">
        <i class="bx bx-x bx-sm text-white"></i>
      </button>
    </div>

    <div class="card w-64 mx-auto bg-base-200 shadow-lg">
      <div class="card-body items-center text-center justify-center">
        <button class="btn btn-primary" @click="setNewField" v-show="!newField.isActive">
          <i class="bx bx-plus bx-lg text-base-200"></i>
        </button>
        <div v-if="newField.isActive" class="card-actions gap-4 justify-end">
          <input
            ref="newFieldInput"
            type="text"
            v-model="newField.name"
            :placeholder="task ? 'New Task' : 'New Group'"
            class="input input-bordered input-primary w-full max-w-xs"
            @keyup.enter="makeField"
            @keyup.esc="delNewField"
            v-if="!update"
          />
          <input
            v-else
            ref="newFieldInput"
            type="text"
            v-model="newField.name"
            :placeholder="task ? 'Update Task' : 'Update Group'"
            class="input input-bordered input-primary w-full max-w-xs"
            @keyup.enter="makeField"
            @keyup.esc="delNewField"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { updateTaskToDB } from '~/composables/useDBFirebase'
// const { id: group } = useRoute().params

// const dbStore = useDatabaseStore()

// const emit = defineEmits(['newTask', 'cloceTask', 'updateTask'])
// const prop = withDefaults(
//   defineProps<{
//     oldTask?: string
//     update?: boolean
//     task?: boolean
//     id?: number
//   }>(),
//   {
//     oldTask: '',
//     update: false,
//     task: false,
//   }
// )

// const newFieldInput = ref()
// const newField = reactive({
//   isActive: false,
//   name: '',
// })
// const setNewField = () => {
//   newField.isActive = true
//   nextTick(() => {
//     newFieldInput.value.focus()
//   })
// }
// const delNewField = () => {
//   if (prop.update) {
//     emit('cloceTask')
//   }
//   newField.isActive = false
//   newField.name = ''
// }

// const makeField = async (): Promise<void> => {
//   if (prop.task && !prop.update) {
//     const res = await addTaskToDB(group, newField.name)
//     emit('newTask')
//     delNewField()
//     return
//   }
//   if (prop.task && prop.update) {
//     await updateTaskToDB(group, prop.id, newField.name)
//     emit('updateTask')
//     delNewField()
//     return
//   }
//   useRouter().push(`/todo/${newField.name}`)
// }

// onMounted(() => {
//   if (prop.update) {
//     newField.name = prop.oldTask
//     setNewField()
//   }
// })
</script>
