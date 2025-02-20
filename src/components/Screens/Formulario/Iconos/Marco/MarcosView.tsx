import { Card } from 'react-bootstrap';
import styles from './MarcosView.module.css';

const MarcosView = () => {
    const cards = Array.from({ length: 12 }, (_, index) => `Card ${index + 1}`);

    return (
      <>
        <h2 className={styles.textTitle}>Marco</h2>
        <p>Selecciona un marco para tu imagen</p>
        <div className={styles.marcosViewContainer}>
            {cards.map((card, index) => {
                return (
                    <Card key={index} className={styles.card}>
                        <Card.Img variant="top" src={`src/assets/marcos/marco-${index + 1}.jpg`} height={150}/>
                        <Card.Body>{card}</Card.Body>
                    </Card>
                );
            })}
        </div>
      </>
    );
};

export default MarcosView;