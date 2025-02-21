import { Card } from 'react-bootstrap';
import styles from './MarcosView.module.css';

const MarcosView = () => {
    const cards = Array.from({ length: 12 }, (_, index) => `Card ${index + 1}`);

    return (
      <>
        <h2 className={styles.textTitle}>Marco</h2>
        <span className={styles.textSecondary}>Selecciona un marco para tu imagen</span>
        <div className={styles.marcosViewContainer}>
            {cards.map((card, index) => {
                return (
                    <Card key={index} className={styles.card}>
                        <Card.Img className={styles.cardImg} variant="top" src={`src/assets/marcos/marco-${index + 1}.jpg`} height={150}/>
                        <Card.Body className={styles.cardBody}>{card}</Card.Body>
                    </Card>
                );
            })}
        </div>
      </>
    );
};

export default MarcosView;