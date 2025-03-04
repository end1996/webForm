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
        // Dividir la dimensión seleccionada en ancho y alto
        const [width, height] = selectedDimension.split(' X ').map(Number);

        // Determina el tipo de dimensión (pequeña, mediana o grande)
        const isSmallDimension = width <= 25 && height <= 30;
        const isMediumDimension = (width > 25 && width <= 40) || (height > 30 && height <= 60);
        const isLargeDimension = width > 40 || height > 60;

        // Inicializa los factores de escala
        let scaleFactor1 = 1, scaleFactor2 = 1;

        // Ajusta los factores de escala según el tipo de dimensión
        if (isSmallDimension) {
            scaleFactor1 = width > height ? 25 : 20;
            scaleFactor2 = width > height ? 20 : 25;
        } else if (isMediumDimension) {
            scaleFactor1 = width > height ? 17 : 12;
            scaleFactor2 = width > height ? 12 : 17;
        } else if (isLargeDimension) {
            scaleFactor1 = width > height ? 10 : 7.6;
            scaleFactor2 = width > height ? 8 : 10;
        }

        // Calcula las dimensiones en píxeles usando el primer factor de escala
        const widthPx1 = width * scaleFactor1;
        const heightPx1 = height * scaleFactor1;

        // Calcula las dimensiones en píxeles usando el segundo factor de escala
        const widthPx2 = width * scaleFactor2;
        const heightPx2 = height * scaleFactor2;

        // Usa el primer factor de escala para dimensiones verticales
        frameSize = { width: `${widthPx1}px`, height: `${heightPx1}px` };

        // Usa el segundo factor de escala para dimensiones horizontales
        if (width > height) {
            frameSize = { width: `${widthPx2}px`, height: `${heightPx2}px` };
        }

        // Establece las dimensiones en centímetros
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
