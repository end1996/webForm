import { create } from "zustand";

// Definimos la estructura de un item en el carrito
export interface CartItem {
  id: number;
  cantidad: number;
  imageSrc: string | null;
  dimension_foto: string;
  frame: string | null;
  comentario: string;
}

// Definimos el estado global del carrito
interface CartState {
  cart: CartItem[];
  addToCart: (
    id: number, 
    cantidad: number, 
    image: string | null, 
    dimension_foto: string,
    size: string, 
    frame: string | null,
    comentario: string,
  ) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

// Creamos el store con Zustand
export const useCartStore = create<CartState>((set) => ({
  cart: [],

  addToCart: (id, cantidad, imageSrc, dimension_foto, size, frame, comentario) =>
    set((state) => {
      const newItem = { id, cantidad, imageSrc, dimension_foto, size, frame, comentario};
      const newCart = [...state.cart, newItem];
      console.log("🛒 Item agregado:", newItem);
      console.log("📦 Estado del carrito después de agregar:", newCart);

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


