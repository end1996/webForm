import { Card } from 'react-bootstrap';
import styles from './MarcosView.module.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export type MarcoProps = {
    id?: number;
    nombre: string;
    estado?: boolean;
    selectedMarco: string;
    onMarcoClick: (marcoName: string) => void;
};

const MarcoCard = ({ nombre, selectedMarco, onMarcoClick }: MarcoProps) => {
    return (
        <PhotoProvider key={nombre}>
            <Card
                className={`${styles.card} ${selectedMarco === `${nombre}` ? styles.selected : ''}`}
                onClick={() => onMarcoClick(`${nombre}`)}
            >
                <PhotoView src={`src/assets/marcos/marco-${nombre}.png`}>
                    <Card.Img
                        className={styles.cardImg}
                        variant="top"
                        src={`src/assets/marcos/marco-${nombre}.png`}
                        height={150}
                    />
                </PhotoView>
                <Card.Body className={styles.cardBody}><label>{nombre}</label></Card.Body>
            </Card>
        </PhotoProvider>
    );
};

export default MarcoCard;