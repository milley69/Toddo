export const useAuth = () => {
  const { removeUser } = useUser()

  const logout = async () => {
    removeUser()
  }
  return { logout }
}
