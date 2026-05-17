import { create } from 'zustand'
import { persist } from 'zustand/middleware';

const useCount = create(persist((set) => ({
  count:0,
  increment: () => set((state) => ({ count: Math.min(18,state.count + 1) })),
  decrement: () => set((state) => ({ count: Math.max(0,state.count - 1) })),
  reset: () => set((state) => ({ count: 0 })),
 
})))
export default useCount;
