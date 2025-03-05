import { create } from "zustand";

interface ComentarioState {
    comentarios: string[];
    comentario: string,
    mensaje: string,
    setComentario: (comentario: string) => void;
    agregarComentario: () => void;
    setMensaje: (mensaje: string) => void;
    limpiarComentarios: () => void;
}

const useComentarioStore = create<ComentarioState>((set) => ({
    comentarios: JSON.parse(localStorage.getItem("comentarios") || "[]"),
    comentario: "",
    mensaje: "",

    setComentario: (comentario) => set({ comentario }),

    agregarComentario: () => set((state) => {
        if (state.comentario.trim() === "") return state;

        const nuevosComentarios = [...state.comentarios, state.comentario];
        localStorage.setItem("comentarios", JSON.stringify(nuevosComentarios));

        return {
            comentarios: nuevosComentarios,
            comentario: "",
            mensaje: "✅ Comentario guardado exitosamente",
        };
    }),

    setMensaje: (mensaje) => set({ mensaje }),

    limpiarComentarios: () => set(() => {
        localStorage.removeItem("comentarios");
        return { comentarios: [] };
    })
}));

export default useComentarioStore;
