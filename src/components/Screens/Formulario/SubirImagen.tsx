import React, { useState } from 'react';
import styles from './SubirImagen.module.css';

function SubirImagen() {
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

    const triggerFileInput = () => {
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        fileInput.click();
    };

    return (
        <div className='mt-3'>
            <p className={styles.textTitle}>Imágen para imprimir</p>
            <div className={styles.uploadContainer}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className={styles.fileInput}
                    id="fileInput"
                    style={{ display: 'none' }}
                />
                <button className={styles.buttonUpload} onClick={triggerFileInput}>
                    Subir imágen
                </button>
                {imageSrc && (
                    <img
                        className={styles.cardImg}
                        src={imageSrc}
                        alt="Imagen seleccionada"
                    />
                )}
            </div>
        </div>
    );
}

export default SubirImagen;