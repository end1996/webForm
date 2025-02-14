import styles from './ImagePreview.module.css';
import arte from '../../../assets/arte.jpg';  // Importa la imagen

function ImagePreview() {
    return (
        <div className={styles.card}>
            <div className={styles.cardBody}>
                <img
                    className={styles.cardImg}
                    src={arte}  // Usa la imagen importada
                    alt="Arte"
                />
            </div>
        </div>
    );
}

export default ImagePreview;
