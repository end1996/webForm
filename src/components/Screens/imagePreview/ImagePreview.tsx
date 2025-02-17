import React, { useState } from 'react';
import styles from './ImagePreview.module.css';
import defaultImage from '../../../assets/arte.jpg'; // Corrige la ruta de la imagen por defecto

const ImagePreview = () => {
    const [image, setImage] = useState(defaultImage); // Usa la imagen importada como valor inicial

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <div className={styles.card}>
                <div className={styles.cardBody}>
                    <div className={styles.cardImg}>
                        <img src={image} alt="Preview" />
                    </div>
                </div>
            </div>
            <input
                type="file"
                className={styles.fileInput}
                id="fileInput"
                onChange={handleImageChange}
            />
        </div>
    );
};

export default ImagePreview;