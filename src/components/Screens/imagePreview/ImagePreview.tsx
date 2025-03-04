import styles from './ImagePreview.module.css';
import defaultImage from '../../../assets/arte.jpg';
import { loadImages } from './loadImages';
import { useTamanioStore } from '../../../stores/tamanio.store';
import { useAppStore } from '../../../stores/app.store';

interface ImagePreviewProps {
    selectedButton: string;
    selectedMarco: string;
    selectedSize: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ selectedButton, selectedMarco, selectedSize }) => {
    // Estado global de la imagen
    const imageSrc = useAppStore((state) => state.imageSrc) || defaultImage;

    // Estado global de la dimensión
    const selectedDimension = useTamanioStore((state) => state.selectedDimension);

    // Calcular dimensiones del marco en función de la dimensión seleccionada
    let frameSize = { width: '100%', height: '80vh' };
    let dimensions = { width: '0', height: '0' };

    if (selectedDimension) {
        const [width, height] = selectedDimension.split(' X ').map(Number);
        const scaleFactor = width > height ? 17 : 12;
        frameSize = { width: `${width * scaleFactor}px`, height: `${height * scaleFactor}px` };
        dimensions = { width: `${width}`, height: `${height}` };
    }

    // Cargar todas las imágenes de la carpeta src/assets/marcos
    const marcoImages = loadImages();

    // Estilo dinámico del marco
    const getBorderImageStyle = (marcoName: string) => {
        const imageUrl = marcoImages[`marco-${marcoName}`];
        return imageUrl ? { borderImage: `url(${imageUrl}) 350 round` } : {};
    };

    // Clase del marco según el tamaño
    const getBorderClass = () => {
        const sizeClassMap: Record<string, string> = {
            '1.5 cm': 'marco1',
            '2 cm': 'marco2',
            '3 cm': 'marco3',
        };
        return selectedMarco ? `${styles[selectedMarco]} ${styles[sizeClassMap[selectedSize] || 'marco4']}` : '';
    };

    return (
        <div className={styles.cardContainer}>
            <div className={styles.dimensionWrapper}>
                <div className={styles.widthLabel}>{dimensions.width} cm</div>
                <div className={styles.heightWrapper}>
                    <div className={styles.heightLabel}>{dimensions.height} cm</div>
                    <div 
                        className={`${styles.card} ${selectedButton === 'soloImpresion' ? styles.noBorder : ''}`} 
                        style={{ width: frameSize.width, height: frameSize.height }}
                    >
                        <div className={styles.cardBody}>
                            <img
                                className={`${styles.cardImg} ${selectedMarco ? `${styles.marco} ${getBorderClass()}` : ''}`}
                                src={imageSrc}
                                alt="Imagen seleccionada"
                                style={selectedMarco ? getBorderImageStyle(selectedMarco) : {}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagePreview;
