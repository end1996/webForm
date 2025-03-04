import { create } from "zustand";

// Definimos la estructura de un item en el carrito
interface CartItem {
  id: number;
  image: string;
  size: string;
  frame: string | null;
}

// Definimos el estado global del carrito
interface CartState {
  cart: CartItem[];
  addToCart: (image: string, size: string, frame: string | null) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

// Creamos el store con Zustand
export const useCartStore = create<CartState>((set) => ({
  cart: [],

  addToCart: (image, size, frame) =>
    set((state) => ({
      cart: [...state.cart, { id: Date.now(), image, size, frame }],
    })),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  clearCart: () => set({ cart: [] }),
}));


