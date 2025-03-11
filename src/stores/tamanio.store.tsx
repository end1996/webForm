import { create } from 'zustand';

interface TamanioState {
  selectedButton: string;
  customWidth: string;
  customHeight: string;
  widthError: string;
  heightError: string;
  selectedGridButton: string;
  selectedDimension: string;
  setSelectedButton: (button: string) => void;
  setCustomWidth: (width: string) => void;
  setCustomHeight: (height: string) => void;
  setWidthError: (error: string) => void;
  setHeightError: (error: string) => void;
  setSelectedGridButton: (gridButton: string) => void;
  setSelectedDimension: (dimension: string) => void;
}

export const useTamanioStore = create<TamanioState>((set) => ({
  selectedButton: 'estandar',
  customWidth: '',
  customHeight: '',
  widthError: '',
  heightError: '',
  selectedGridButton: '',
  selectedDimension: '',

  
  setSelectedButton: (button) => set({ selectedButton: button }),
  setCustomWidth: (width) => set({ customWidth: width }),
  setCustomHeight: (height) => set({ customHeight: height }),
  setWidthError: (error) => set({ widthError: error }),
  setHeightError: (error) => set({ heightError: error }),
  setSelectedGridButton: (gridButton) => set({ selectedGridButton: gridButton }),
  setSelectedDimension: (dimension) => set({ selectedDimension: dimension }),
}));
