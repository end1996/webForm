import { useCartStore } from '../../../../stores/cart.store';
import styles from './AgregarAlCarro.module.css';

interface AgregarAlCarroProps {
    selectedMarco: string;
    selectedSize: string;
    imagen: string
}

export const AgregarAlCarro = ({ selectedMarco, selectedSize, imagen }: AgregarAlCarroProps) => {
    const addToCart = useCartStore((state) => state.addToCart);
    return (
        <div className={styles.agregarAlCarroContainer}>
            <button
                className={styles.buttonAgregar}
                onClick={() => addToCart(imagen, selectedMarco, selectedSize)}
            >Agregar al carro
            </button>
        </div>
    );
}
