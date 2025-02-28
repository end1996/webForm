import { create } from 'zustand'

interface CounterState {
  increaseCounter: (by: number) => void;
  setCounter: (value: string) => void;
  count: number;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 1,
  increaseCounter: (by: number) => set((state) => ({ count: Math.min(100, Math.max(0, state.count + by))})),
  setCounter: (value) => set(() => ({ count: Math.min(100, Math.max(0, Number(value) || 0)) })), // Evita negativos y valores no numéricos
}));

