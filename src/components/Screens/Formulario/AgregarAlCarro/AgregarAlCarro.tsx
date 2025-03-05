import { useCartStore } from '../../../../stores/cart.store';
import { useCounterStore } from '../../../../stores/counter.store';
import { useTamanioStore } from '../../../../stores/tamanio.store';
import styles from './AgregarAlCarro.module.css';
import useComentarioStore from '../../../../stores/comentario.store';

interface AgregarAlCarroProps {
    id: number;
    imageSrc: string | null;
    selectedSize: string;
    selectedMarco: string;
}

export const AgregarAlCarro: React.FC<AgregarAlCarroProps> = ({ id, imageSrc, selectedSize, selectedMarco }) => {
    const addToCart = useCartStore((state) => state.addToCart);
    const cantidad = useCounterStore(state => state.count);
    const dimension_foto = useTamanioStore(state => state.selectedDimension)
    const comentarios = useComentarioStore(state => state.comentarios)
    const limpiarComentarios = useComentarioStore(state => state.limpiarComentarios)
    const comentario = comentarios.length > 0 ? comentarios[comentarios.length - 1] : "";

    const handleAddToCart = () => {
        console.log("📦 Comentarios en localStorage:", comentario);
        if (!imageSrc || !dimension_foto) {
            alert("Por favor, selecciona una imagen y el tamaño deseado antes de agregar al carrito.");
            return;
        }

        addToCart(
            id,
            cantidad,
            imageSrc,
            dimension_foto,
            selectedSize,
            selectedMarco,
            comentario,
        );
        limpiarComentarios();
        
        alert("Producto agregado al carrito!");
    };

    return (
        <div className={styles.agregarAlCarroContainer}>
            <button className={styles.buttonAgregar} onClick={handleAddToCart}>
                Agregar al carro
            </button>
        </div>
    );
};
