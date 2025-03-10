import { Card } from 'react-bootstrap';
import styles from './MarcosView.module.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { loadImages } from '@/components/Screens/imagePreview/loadImages';

export type MarcoProps = {
    id?: number;
    nombre: string;
    estado: boolean;
    selectedMarco: string;
    onMarcoClick: (marcoName: string) => void;
};

const MarcoCard = ({ nombre, selectedMarco, onMarcoClick }: MarcoProps) => {
    const marcoImages = loadImages();
    const imageUrl = marcoImages[`marco-${nombre}`]
    console.log(imageUrl)
    return (
        <PhotoProvider key={nombre}>
            <Card
                className={`${styles.card} ${selectedMarco === `${nombre}` ? styles.selected : ''}`}
                onClick={() => onMarcoClick(`${nombre}`)}
            >
                <PhotoView src={imageUrl}>
                    <Card.Img
                        className={styles.cardImg}
                        variant="top"
                        src={imageUrl}
                        height={150}
                    />
                </PhotoView>
                <Card.Body className={styles.cardBody}><label>{nombre}</label></Card.Body>
            </Card>
        </PhotoProvider>
    );
};

export default MarcoCard;