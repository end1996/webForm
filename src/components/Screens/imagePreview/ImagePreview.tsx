import React, { useState } from 'react';
import styles from './ImagePreview.module.css';
// Importa la imagen desde la carpeta assets
import defaultImage from '../../../assets/arte.jpg';

interface ImagePreviewProps {
    selectedButton: string;
    selectedMarco: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ selectedButton, selectedMarco }) => {
    // Usa la imagen importada como valor inicial
    const [imageSrc, setImageSrc] = useState<string | null>(defaultImage);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={styles.cardContainer}>
            <div className={`${styles.card} ${selectedButton === 'soloImpresion' ? styles.noBorder : ''}`}>
                <div className={styles.cardBody}>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className={styles.fileInput}
                        id="fileInput"
                    />
                    {imageSrc && (
                        <img
                            className={`${styles.cardImg} ${selectedMarco ? `${styles.marco} ${styles[`marco${selectedMarco.replace(' ', '')}`]}` : ''}`}
                            src={imageSrc}
                            alt="Imagen seleccionada"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ImagePreview;