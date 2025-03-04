import { useCartStore } from '../../../../stores/cart.store';
import styles from './AgregarAlCarro.module.css';

interface AgregarAlCarroProps {
    imageSrc: string | null;
    selectedSize: string;
    selectedMarco: string;
}

export const AgregarAlCarro: React.FC<AgregarAlCarroProps> = ({ imageSrc, selectedSize, selectedMarco }) => {
    const addToCart = useCartStore((state) => state.addToCart);

    const handleAddToCart = () => {
        if (!imageSrc) {
            alert("Por favor, selecciona una imagen antes de agregar al carrito.");
            return;
        }

        addToCart(imageSrc, selectedSize, selectedMarco);
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
