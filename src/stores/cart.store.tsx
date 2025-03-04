import { create } from "zustand";

// Definimos la estructura de un item en el carrito
interface CartItem {
  id: number;
  imageSrc: string | null;
  size: string;
  frame: string | null;
}

// Definimos el estado global del carrito
interface CartState {
  cart: CartItem[];
  addToCart: (image: string | null, size: string, frame: string | null) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

// Creamos el store con Zustand
export const useCartStore = create<CartState>((set) => ({
  cart: [],

  addToCart: (imageSrc, size, frame) =>
    set((state) => {
      const newItem = { id: Date.now(), imageSrc, size, frame };
      const newCart = [...state.cart, newItem];
      {console.log("🛒 Item agregado:", newItem);
      console.log("📦 Estado del carrito después de agregar:", newCart);}
      return { cart: newCart };
    }),

    removeFromCart: (id) =>
      set((state) => {
        const newCart = state.cart.filter((item) => item.id !== id);
        console.log(`🗑️ Item con ID ${id} eliminado`);
        console.log("📦 Estado del carrito después de eliminar:", newCart);
        return { cart: newCart };
      }),
  
    clearCart: () =>
      set(() => {
        console.log("🧹 Carrito vaciado");
        return { cart: [] };
      }),
}));


