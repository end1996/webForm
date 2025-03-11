import styles from './ImagePreview.module.css';
import defaultImage from '../../../assets/arte.jpg';
import { loadImages } from './loadImages';
import { useTamanioStore } from '../../../stores/tamanio.store';
import { useAppStore } from '../../../stores/app.store';
import { useEffect, useRef, useState } from 'react';

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

    // Referencia a la imagen para obtener su tamaño real
    const imgRef = useRef<HTMLImageElement>(null);

    // Estado para almacenar el estilo del marco dinámico
    const [borderStyle, setBorderStyle] = useState({});

    // Cargar todas las imágenes de la carpeta src/assets/marcos
    const marcoImages = loadImages();

    // Calcular dimensiones del marco en función de la dimensión seleccionada
    let frameSize = { width: "100%", height: "80vh" };
    let dimensions = { width: "0", height: "0" };

    if (selectedDimension) {
        const [width, height] = selectedDimension.split(" X ").map(Number);
        const isSmallDimension = width <= 25 && height <= 30;
        const isMediumDimension = (width > 25 && width <= 40) || (height > 30 && height <= 60);
        const isLargeDimension = width > 40 || height > 60;

        let scaleFactor1 = 1, scaleFactor2 = 1;
        const isMobile = window.innerWidth <= 768;

        if (isSmallDimension) {
            scaleFactor1 = isMobile ? 15 : width > height ? 25 : 20;
            scaleFactor2 = isMobile ? 12 : width > height ? 20 : 25;
        } else if (isMediumDimension) {
            scaleFactor1 = isMobile ? 10 : width > height ? 17 : 12;
            scaleFactor2 = isMobile ? 7.5 : width > height ? 12 : 17;
        } else if (isLargeDimension) {
            scaleFactor1 = isMobile ? 7 : width > height ? 10 : 7.5;
            scaleFactor2 = isMobile ? 5 : width > height ? 8 : 10;
        }

        const widthPx1 = width * scaleFactor1;
        const heightPx1 = height * scaleFactor1;
        const widthPx2 = width * scaleFactor2;
        const heightPx2 = height * scaleFactor2;

        frameSize = { width: `${widthPx1}px`, height: `${heightPx1}px` };
        if (width > height) {
            frameSize = { width: `${widthPx2}px`, height: `${heightPx2}px` };
        }

        dimensions = { width: `${width}`, height: `${height}` };
    }

    // Aplica el estilo dinámico del borde basado en la calidad de la imagen
    useEffect(() => {
        if (imgRef.current) {
            const { naturalWidth, naturalHeight } = imgRef.current;
            const marcoUrl = marcoImages[`marco-${selectedMarco}`];

            if (marcoUrl) {
                let borderSize = 100; // Valor por defecto

                if (naturalWidth < 800 || naturalHeight < 800) {
                    borderSize = 200; // Imagen pequeña → mayor detalle en el borde
                } else if (naturalWidth > 2000 || naturalHeight > 2000) {
                    borderSize = 50; // Imagen grande → borde más delgado
                }

                setBorderStyle({
                    borderImage: `url(${marcoUrl}) ${borderSize} round`,
                    borderImageSlice: borderSize,
                    borderImageOutset: 2, // Esto hará que el marco quede por fuera
                });
            } else {
                setBorderStyle({});
            }
        }
    }, [imageSrc, selectedMarco]);

    // Clase del marco según el tamaño
    const getBorderClass = () => {
        const sizeClassMap: Record<string, string> = {
            "1.5 cm": "marco1",
            "2 cm": "marco2",
            "3 cm": "marco3",
        };
        return selectedMarco ? `${styles[selectedMarco]} ${styles[sizeClassMap[selectedSize] || "marco4"]}` : "";
    };

    return (
        <div className={styles.cardContainer}>
            <div className={styles.dimensionWrapper}>
                <div className={styles.widthLabel}>{dimensions.width} cm</div>
                <div className={styles.heightWrapper}>
                    <div className={styles.heightLabel}>{dimensions.height} cm</div>
                    <div
                        className={`${styles.card} ${selectedButton === "soloImpresion" ? styles.noBorder : ""}`}
                        style={{ width: frameSize.width, height: frameSize.height }}
                    >
                        <div className={styles.cardBody}>
                            <img
                                ref={imgRef}
                                className={`${styles.cardImg} ${selectedMarco ? `${styles.marco} ${getBorderClass()}` : ""}`}
                                src={imageSrc}
                                alt="Imagen seleccionada"
                                style={selectedMarco ? borderStyle : {}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagePreview;
