import { useCartStore } from '../../../../stores/cart.store';
import { useCounterStore } from '../../../../stores/counter.store';
import { useTamanioStore } from '../../../../stores/tamanio.store';
import styles from './AgregarAlCarro.module.css';
import useComentarioStore from '../../../../stores/comentario.store';
import { useAppStore } from '../../../../stores/app.store';

interface AgregarAlCarroProps {
    id: number;
    imageSrc: string | null;
    selectedSize: string;
    selectedMarco: string;
    precio_monto: number;
}

export const AgregarAlCarro: React.FC<AgregarAlCarroProps> = ({ id, imageSrc, selectedSize, selectedMarco, precio_monto }) => {
    const addToCart = useCartStore((state) => state.addToCart);
    const cantidad = useCounterStore(state => state.count);
    const dimension_foto = useTamanioStore(state => state.selectedDimension)
    const selectedButton = useAppStore(state => state.selectedButton);
    const comentarios = useComentarioStore(state => state.comentarios)
    const limpiarComentarios = useComentarioStore(state => state.limpiarComentarios)
    const dimension_marco = useAppStore(state => state.selectedSize)
    const comentario = comentarios.length > 0 ? comentarios[comentarios.length - 1] : "";

    const handleAddToCart = () => {
        console.log("📦 Comentarios en localStorage:", comentario);
        if (!imageSrc || !dimension_foto) {
            alert("Por favor, selecciona una imagen y el tamaño deseado antes de agregar al carrito.");
            return;
        }
        if (!dimension_marco && selectedButton === 'enmarcacionImpresion') {
            alert("Si desea enmarcado seleccione la medida, de lo contrario seleccione 'Sólo impresión'")
        } else {

            addToCart(
                id,
                cantidad,
                imageSrc,
                dimension_foto,
                selectedSize,
                selectedMarco,
                dimension_marco,
                precio_monto,
                comentario,
            );
            limpiarComentarios();

            alert("Producto agregado al carrito!");
        }
    };

    return (
        <div className={styles.agregarAlCarroContainer}>
            <button className={styles.buttonAgregar} onClick={handleAddToCart}>
                Agregar al carro
            </button>
        </div>
    );
};
