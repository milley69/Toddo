/* USER PINIA */

export interface UserPinia {
  user: User | null
  uid: string | null
  status: authStatus
  isGradientBackground: boolean
  // errorForm: userForm
}

export interface User {
  email: string
  name: string
  avatar: string
  // createAt: Date
  uid: string
}

export type authStatus = 'authenticated' | 'unauthenticated' | 'loading'
