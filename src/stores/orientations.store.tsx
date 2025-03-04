import { create } from 'zustand';

interface OrientationState {
    orientation: string;
    setOrientation: (orientation: string) => void;
}

export const useOrientationStore = create<OrientationState>((set) => ({
    orientation: 'vertical',
    setOrientation: (orientation) => set({ orientation }),
}));
