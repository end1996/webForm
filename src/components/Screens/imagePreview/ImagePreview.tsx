import React, { useState } from 'react';
import styles from './ImagePreview.module.css';

const ImagePreview: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);

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
        <div className={styles.card}>
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
            {/* Removed the button here */}
        </div>
    );
}

export default ImagePreview;