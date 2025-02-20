import { Card } from 'react-bootstrap';
import styles from './MarcosView.module.css';

const MarcosView = () => {
    // Crear un arrayt con 20 elementos de texto 'Card 1', 'Card 2', 'Card 3', etc.
    const cards = Array.from({ length: 20 }, (_, index) => `Card ${index + 1}`);

    return (
        <div className={styles.marcosViewContainer}>
            {cards.map((card, index) => (
                <Card key={index} className={styles.card}>
                    <Card.Body>{card}</Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default MarcosView;