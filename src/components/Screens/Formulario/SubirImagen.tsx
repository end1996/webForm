import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import styles from './SubirImagen.module.css';

interface SubirImagenProps {
    onImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SubirImagen: React.FC<SubirImagenProps> = ({ onImageChange }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        setModalIsOpen(true);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const changeEvent = {
                    target: { files: [file] },
                } as unknown as React.ChangeEvent<HTMLInputElement>;
                onImageChange(changeEvent);
                setModalIsOpen(false); // Cierra el modal después de arrastrar y soltar la imagen
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div>
            <button className={styles.buttonUpload} onClick={handleButtonClick}>
                Subir imágen
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Subir Imagen"
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                <button className={styles.closeButton} onClick={() => setModalIsOpen(false)}>
                    &times;
                </button>
                <h2>Subir Imagen</h2>
                <div
                    className={styles.dropZone}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    Arrastra tu imagen aquí
                </div>
                <p>o</p>
                <button className={styles.buttonUpload} onClick={() => fileInputRef.current?.click()}>
                    Selecciona imagen JPG, PNG desde tu dispositivo
                </button>
                <input
                    type="file"
                    className={styles.fileInput}
                    ref={fileInputRef}
                    onChange={(event) => {
                        onImageChange(event);
                        setModalIsOpen(false); // Cierra el modal después de seleccionar la imagen
                    }}
                />
            </Modal>
        </div>
    );
};

export default SubirImagen;