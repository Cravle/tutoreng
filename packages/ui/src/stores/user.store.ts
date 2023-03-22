import { create } from 'zustand'
import { User } from '@tutoreng/db/src'

interface IUserStore {
  user: Omit<User, 'password'> | null
  setUser: (user: Omit<User, 'password'> | null) => void
}

const useUserStore = create<IUserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}))

export default useUserStore
