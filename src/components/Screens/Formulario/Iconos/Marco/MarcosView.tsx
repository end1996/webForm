import { Card } from 'react-bootstrap';
import { useState, useRef, useEffect } from 'react';
import styles from './MarcosView.module.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

interface MarcoSelectedProps {
    selectedMarco: string;
    onMarcoClick: (marcoName: string) => void;
    onSizeChange: (size: string) => void;
}

const MarcosView = ({ selectedMarco, onMarcoClick, onSizeChange }: MarcoSelectedProps) => {
    const cards = Array.from({ length: 12 }, (_, index) => `Card ${index + 1}`);
    const ref = useRef<HTMLDivElement>(null);
    const marcoSize = ['1.5 cm', '2 cm', '3 cm'];

    const [selectedSize, setSelectedSize] = useState<string>(marcoSize[1]); // Tamaño de marco de 2cm por defecto

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
                    <PhotoProvider key={index}>
                        <Card
                            className={`${styles.card} ${selectedMarco === `Card ${index + 1}` ? styles.selected : ''}`}
                            onClick={() => onMarcoClick(`Card ${index + 1}`)}
                        >
                            <PhotoView src={`src/assets/marcos/marco-${index + 1}.png`}>
                                <Card.Img
                                    className={styles.cardImg}
                                    variant="top"
                                    src={`src/assets/marcos/marco-${index + 1}.png`}
                                    height={150}
                                />
                            </PhotoView>
                            <Card.Body className={styles.cardBody}>{card}</Card.Body>
                        </Card>
                    </PhotoProvider>
                ))}
            </div>
        </div>
    );
};

export default MarcosView;