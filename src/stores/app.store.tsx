import { create } from "zustand";

interface AppState {
  selectedButton: string;
  selectedMarco: string;
  selectedSize: string;
  imagenSeleccionada: string;
  selectedDimension: string;
  activeView: string; // Agregado para manejar la vista activa

  setSelectedButton: (button: string) => void;
  setSelectedMarco: (marco: string) => void;
  setSelectedSize: (size: string) => void;
  setImagenSeleccionada: (imagen: string) => void;
  setSelectedDimension: (dimension: string) => void;
  setActiveView: (view: string) => void; // Agregado setter para activeView
}

export const useAppStore = create<AppState>((set) => ({
  selectedButton: "soloImpresion",
  selectedMarco: "",
  selectedSize: "1.5 cm",
  imagenSeleccionada: "",
  selectedDimension: "",
  activeView: "main", // Vista inicial por defecto

  setSelectedButton: (button) =>
    set(() => ({
      selectedButton: button,
      selectedMarco: button === "enmarcacionImpresion" ? "Clásico" : "",
    })),
  setSelectedMarco: (marco) => set({ selectedMarco: marco }),
  setSelectedSize: (size) => set({ selectedSize: size }),
  setImagenSeleccionada: (imagen) => set({ imagenSeleccionada: imagen }),
  setSelectedDimension: (dimension) => set({ selectedDimension: dimension }),
  setActiveView: (view) => set({ activeView: view }), // Función para cambiar la vista activa
}));