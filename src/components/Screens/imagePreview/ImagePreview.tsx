import { useState } from 'react';
import styles from './ImagePreview.module.css';
import defaultImage from '../../../assets/arte.jpg'; // Corrige la ruta de la imagen por defecto

const ImagePreview = () => {
    const [image] = useState(defaultImage); // Usa la imagen importada como valor inicial

    return (
        <div>
            <div className={styles.card}>
                <div className={styles.cardBody}>
                    <div className={styles.cardImg}>
                        <img src={image} alt="Preview" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagePreview;