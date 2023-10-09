import { create } from "zustand"

const useAppStore = create((set) => ({
  user: 0,
  setUser: (user: IUser) => set((store: IStore) => ({ ...store, user })),
}))

export default useAppStore
