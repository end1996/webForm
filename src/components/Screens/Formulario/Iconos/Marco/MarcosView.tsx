import { Card } from 'react-bootstrap';
import { useState, useRef, useEffect } from 'react';
import styles from './MarcosView.module.css';

interface MarcoSelectedProps {
    selectedMarco: string;
    onMarcoClick: (marcoName: string) => void;
    onSizeChange: (size: string) => void;
}

const MarcosView = ({ selectedMarco, onMarcoClick, onSizeChange }: MarcoSelectedProps) => {
    const cards = Array.from({ length: 12 }, (_, index) => `Card ${index + 1}`);
    const ref = useRef<HTMLDivElement>(null);
    const marcoSize = ['1.5 cm', '2 cm', '3 cm', '4 cm'];

    const [selectedSize, setSelectedSize] = useState<string>('');

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

    const handleSizeClick = (size: string) => {
        setSelectedSize(size);
        onSizeChange(size); // Llama a la función para manejar el cambio de tamaño
    };

    return (
        <div ref={ref}>
            <h2 className={styles.textTitle}>Marco</h2>
            <div className={styles.buttonMarcoSizeContainer}>
                {marcoSize.map((size) => (
                    <button
                        key={size}
                        className={`${styles.buttonMarcoSize} ${selectedSize === size ? styles.selected : ''}`}
                        onClick={() => handleSizeClick(size)}
                    >
                        {size}
                    </button>
                ))}
            </div>
            <div className={styles.marcosViewContainer}>
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        className={`${styles.card} ${selectedMarco === `Card ${index + 1}` ? styles.selected : ''}`}
                        onClick={() => onMarcoClick(`Card ${index + 1}`)}
                    >
                        <Card.Img
                            className={styles.cardImg}
                            variant="top"
                            src={`src/assets/marcos/marco-${index + 1}.png`}
                            height={150}
                        />
                        <Card.Body className={styles.cardBody}>{card}</Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default MarcosView;