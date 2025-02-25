import { Card } from 'react-bootstrap';
import styles from './MarcosView.module.css';

export type MarcoProps = {
    id: number;
    name: string;
    image: string;
    selectedMarco: string;
    onMarcoClick: (marcoName: string) => void;
};

const MarcoCard = ({ id, name, image, selectedMarco, onMarcoClick }: MarcoProps) => {
    return (
        <Card
            className={`${styles.card} ${selectedMarco === name ? styles.selected : ''}`}
            onClick={() => onMarcoClick(name)}
        >
            <Card.Img
                className={styles.cardImg}
                variant="top"
                src={image}
                height={150}
            />
            <Card.Body className={styles.cardBody}>{name}</Card.Body>
        </Card>
    );
};

export default MarcoCard;