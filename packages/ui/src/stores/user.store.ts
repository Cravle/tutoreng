import type { UserResponseType } from '@tutoreng/shared/src'
import { create } from 'zustand'

interface IUserStore {
  user: UserResponseType | null
  setUser: (user: UserResponseType | null) => void
}

const useUserStore = create<IUserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}))

export default useUserStore
