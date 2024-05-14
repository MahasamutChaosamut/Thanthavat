import { create } from 'zustand'

export const useZustand = create((set) => ({
    active: false,
    setActive: (value) => set({ active: value }),
}))

//export default useZustand;