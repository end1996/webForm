import styles from './SubirImagen.module.css';
import { useAppStore } from '../../../../stores/app.store';

function SubirImagen() {
    const { setImagenSeleccionada } = useAppStore();

    const triggerFileInput = () => {
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        fileInput.click();
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagenSeleccionada(reader.result as string); // ✅ Guarda la imagen en el estado global
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='mt-3'>
            <p className={styles.textTitle}>Imagen para imprimir</p>
            <div className={styles.uploadContainer}>
                <input
                    type="file"
                    accept="image/*"
                    className={styles.fileInput}
                    id="fileInput"
                    style={{ display: 'none' }}
                    onChange={handleImageChange} // ✅ Solo sube la imagen
                />
                <button className={styles.buttonUpload} onClick={triggerFileInput}>
                    Subir imagen
                </button>
            </div>
        </div>
    );
}

export default SubirImagen;
