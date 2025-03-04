import { create } from 'zustand';

interface DimensionState {
    selectedDimension: string;
    setSelectedDimension: (dimension: string) => void;
}

export const useDimensionStore = create<DimensionState>((set) => ({
    selectedDimension: '',
    setSelectedDimension: (dimension) => set({ selectedDimension: dimension }),
}));
