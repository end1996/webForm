import React, { useState, useEffect, useContext } from 'react';
import styles from './ImagePreview.module.css';
import defaultImage from '../../../assets/arte.jpg';
import { DimensionContext } from '../../../context/DimensionContext';

const ImagePreview: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string | null>(defaultImage);
    const { selectedDimension } = useContext(DimensionContext);
    const [frameSize, setFrameSize] = useState({ width: 'auto', height: 'auto' });
    const [dimensions, setDimensions] = useState({ width: '0', height: '0' });

    useEffect(() => {
        if (selectedDimension) {
            const [width, height] = selectedDimension.split(' X ').map(Number);
            const widthPx = width * 37.8;
            const heightPx = height * 37.8;
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

    return (
        <div className={styles.cardContainer}>
            <div className={styles.dimensionWrapper}>
                <div className={styles.widthLabel}>{dimensions.width} cm</div>
                <div className={styles.heightWrapper}>
                    <div className={styles.heightLabel}>{dimensions.height} cm</div>
                    <div className={styles.card} style={{ width: frameSize.width, height: frameSize.height }}>
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
                                    className={styles.cardImg}
                                    src={imageSrc}
                                    alt="Imagen seleccionada"
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