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

    const marcoImages = Array.from({ length: 12 }, (_, index) => `../../../assets/marcos/marco-${index + 1}.png`);

    const getBorderImageStyle = (marcoIndex: number) => {
        const imageUrl = new URL(marcoImages[marcoIndex], import.meta.url).href;
        return {
            borderImage: `url(${imageUrl}) 75 round`
        };
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
                            className={`${styles.cardImg} ${selectedMarco ? styles.marco : ''}`}
                            src={imageSrc}
                            alt="Imagen seleccionada"
                            style={selectedMarco ? getBorderImageStyle(parseInt(selectedMarco.split(' ')[1]) - 1) : {}}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ImagePreview;