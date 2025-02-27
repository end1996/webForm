import React, { useState, useEffect, useContext } from 'react';
import styles from './ImagePreview.module.css';
import defaultImage from '../../../assets/arte.jpg';
import { DimensionContext } from '../../../context/DimensionContext';
import { loadImages } from './loadImages';

interface ImagePreviewProps {
    selectedButton: string;
    selectedMarco: string;
    selectedSize: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ selectedButton, selectedMarco, selectedSize }) => {
    const [imageSrc, setImageSrc] = useState<string | null>(defaultImage);
    const { selectedDimension } = useContext(DimensionContext);
    const [frameSize, setFrameSize] = useState({ width: '100%', height: '80vh' });
    const [dimensions, setDimensions] = useState({ width: '0', height: '0' });

    useEffect(() => {
        if (selectedDimension) {
            const [width, height] = selectedDimension.split(' X ').map(Number);
            const scaleFactor = width > height ? 17 : 12;
            const widthPx = width * scaleFactor;
            const heightPx = height * scaleFactor;
            setFrameSize({ width: `${widthPx}px`, height: `${heightPx}px` });
            setDimensions({ width: `${width}`, height: `${height}` });
        }
    }, [selectedDimension]);

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

    // Cargar todas las imágenes de la carpeta src/assets/marcos
    const marcoImages = loadImages();

    const getBorderImageStyle = (marcoName: string) => {
        const imageUrl = marcoImages[`marco-${marcoName}`];
        if (!imageUrl) {
            console.error(`Image not found for marcoName: ${marcoName}`);
            return {};
        }
        return {
            borderImage: `url(${imageUrl}) 350 round`,
            '@media (max-width: 780px)': {
                borderImage: `url(${imageUrl}) 200 round`
            }
        };
    };

    const getBorderClass = () => {
        const sizeClass = selectedSize === '1.5 cm' ? 'marco1' : selectedSize === '2 cm' ? 'marco2' : selectedSize === '3 cm' ? 'marco3' : 'marco4';
        return selectedMarco ? `${styles[selectedMarco]} ${styles[sizeClass]}` : '';
    };

    return (
        <div className={styles.cardContainer}>
            <div className={styles.dimensionWrapper}>
                <div className={styles.widthLabel}>{dimensions.width} cm</div>
                <div className={styles.heightWrapper}>
                    <div className={styles.heightLabel}>{dimensions.height} cm</div>
                    <div className={`${styles.card} ${selectedButton === 'soloImpresion' ? styles.noBorder : ''}`} style={{ width: frameSize.width, height: frameSize.height }}>
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
                                    className={`${styles.cardImg} ${selectedMarco ? `${styles.marco} ${getBorderClass()}` : ''}`}
                                    src={imageSrc}
                                    alt="Imagen seleccionada"
                                    style={selectedMarco ? getBorderImageStyle(selectedMarco): {}}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImagePreview;