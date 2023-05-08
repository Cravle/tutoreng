import { create } from 'zustand'

interface IProfilePageStore {
  isEditing: boolean
  setIsEditing: (isEditing: boolean) => void
}

const useProfilePageStore = create<IProfilePageStore>((set) => ({
  isEditing: null,
  setIsEditing: (isEditing: boolean) => set({ isEditing }),
}))

export default useProfilePageStore
