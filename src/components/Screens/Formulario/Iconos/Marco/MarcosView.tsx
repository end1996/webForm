import { Card } from 'react-bootstrap';
import { useState, useRef, useEffect } from 'react';
import styles from './MarcosView.module.css';

interface MarcoSelectedProps {
    selectedMarco: string;
    onMarcoClick: (marcoName: string) => void;
}

const MarcosView = ({ selectedMarco, onMarcoClick }: MarcoSelectedProps) => {
    // Crear un array con 12 elementos de texto 'Card 1', 'Card 2', 'Card 3', etc.
    const cards = Array.from({ length: 12 }, (_, index) => `Card ${index + 1}`);
    const ref = useRef<HTMLDivElement>(null);
    const marcoSize = ['1.5 cm', '2 cm', '3 cm', '4 cm'];

    const [selectedSize, setSelectedSize] = useState<string>('');

    // Detectar clics fuera del componente para deseleccionar el marco
    useEffect(() => {
        function handleClickOutside(e: Event) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                onMarcoClick('');
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, onMarcoClick]);

    return (
        <div ref={ref}>
            <h2 className={styles.textTitle}>Marco</h2>
            {/* Botones para seleccionar el tamaño del marco */}
            <div className={styles.buttonMarcoSizeContainer}>
                {marcoSize.map((size) => (
                    <button className={`${styles.buttonMarcoSize} ${selectedSize === size ? styles.selected : ''}`}
                        onClick={() => setSelectedSize(size)}
                    >{size}</button>
                ))}
            </div>
            {/* Mostrar las tarjetas con los marcos */}
            <div className={styles.marcosViewContainer}>
                {cards.map((card, index) => {
                    return (
                        <Card
                            key={index}
                            className={`${styles.card} ${selectedMarco === `Card ${index + 1}` ? styles.selected : ''}`}
                            onClick={() => onMarcoClick(`Card ${index + 1}`)}
                        >
                            {/* Ruta de la imagen del marco */}
                            <Card.Img
                                className={styles.cardImg}
                                variant="top"
                                src={`src/assets/marcos/marco-${index + 1}.png`}
                                height={150}
                            />
                            <Card.Body className={styles.cardBody}>{card}</Card.Body>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default MarcosView;