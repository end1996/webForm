import { Card } from 'react-bootstrap';
import { useState, useRef, useEffect } from 'react';
import styles from './MarcosView.module.css';

const MarcosView = () => {
    // Crear un array con 12 elementos de texto 'Card 1', 'Card 2', 'Card 3', etc.
    const cards = Array.from({ length: 12 }, (_, index) => `Card ${index + 1}`);
    const marcoSize = ['1.5 cm', '2 cm', '3 cm', '4 cm'];

    const [selectedMarco, setSelectedMarco] = useState<string>('');
    const [selectedSize, setSelectedSize] = useState<string>('');
    const ref = useRef<HTMLDivElement>(null);

    // Manejar el cambio de marco seleccionado
    const handleMarcoChange = (marcoName: string) => {
        setSelectedMarco(marcoName)
    }

    // Manejar el cambio de tamaño de marco seleccionado
    const handleMarcoSize = (sizeValue: string) => {
        setSelectedSize(sizeValue)
    }

    // Detectar clics fuera del componente para deseleccionar el marco
    useEffect(() => {
        function handleClickOutside(e: Event) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setSelectedMarco('');
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    return (
        <div ref={ref}>
            <h2 className={styles.textTitle}>Marco</h2>
            {/* Botones para seleccionar el tamaño del marco */}
            <div className={styles.buttonMarcoSizeContainer}>
                {marcoSize.map((size) => (
                    <button className={`${styles.buttonMarcoSize} ${selectedSize === size ? styles.selected : ''}`}
                        onClick={() => handleMarcoSize(size)}
                    >{size}</button>
                ))}
            </div>
            {/* Mostrar las tarjetas con los marcos */}
            <div className={styles.marcosViewContainer}>
                {cards.map((card, index) => {
                    return (
                        <Card key={index}
                            className={`${styles.card} ${selectedMarco === card ? styles.selected : ''}`}
                            onClick={() => handleMarcoChange(card)}
                        >
                            {/* Ruta de la imagen del marco */}
                            <Card.Img className={styles.cardImg} variant="top" src={`src/assets/marcos/marco-${index + 1}.jpg`} height={150} />
                            <Card.Body className={styles.cardBody}>{card}</Card.Body>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default MarcosView;