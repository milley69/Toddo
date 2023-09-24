import type { User, UserPinia, authStatus } from '@/types'
import { defineStore } from 'pinia'

export const useUser = defineStore('UserPinia', {
  state: (): UserPinia => ({
    user: null,
    uid: null,
    status: 'unauthenticated',
    isGradientBackground: true,
  }),
  getters: {
    isAuth({ status }) {
      return status === 'authenticated'
    },
  },
  actions: {
    changeStatus(status: authStatus) {
      this.status = status
    },
    setUser(user: User) {
      this.user = user
      this.uid = user.uid
      this.changeStatus('authenticated')
    },
    removeUser() {
      this.user = null
      this.uid = null
      this.changeStatus('unauthenticated')
    },
  },
})
