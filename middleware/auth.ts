import { storeToRefs } from 'pinia'

export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuth } = storeToRefs(useUser())

  if (!isAuth && to.path !== '/' && to.path !== '/sign-in') {
    return navigateTo('/')
  }
})
