<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-outline btn-square avatar">
      <div class="w-10 rounded">
        <img :src="user.avatar" :alt="user.name" v-if="user" />
      </div>
    </label>
    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li class="menu-title">{{ user?.name }}</li>
      <li class="">
        <UIDropdownGradient />
      </li>
      <li>
        <nuxt-link to="/settings" class="gap-1"><i class="bx bxs-cog"></i>Settings</nuxt-link>
      </li>
      <li @click="logout">
        <a class="gap-1"><i class="bx bxs-exit"></i>Sign out</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { User } from '@/types'
const { logout } = useAuth()
defineProps<{ user: User | null }>()
</script>
