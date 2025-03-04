import { create } from 'zustand'

interface CounterState {
  increaseCounter: (by: number) => void;
  setCounter: (value: string) => void;
  count: number;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 1,
  increaseCounter: (by: number) => set((state) => ({ count: Math.min(100, Math.max(1, state.count + by))})),
  setCounter: (value) => set(() => ({ count: Math.min(100, Math.max(1, Number(value) || 1)) })), // Evita negativos y valores no numéricos
}));

