import { create } from "zustand";

const useCounter = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  setCount: (count) => set({ count }),
}));

export default useCounter;
