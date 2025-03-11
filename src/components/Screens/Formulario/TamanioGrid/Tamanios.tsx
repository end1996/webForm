import styles from './Tamanios.module.css';
import { TamanioGrid } from './TamanioGrid';
import { useTamanioStore } from '../../../../stores/tamanio.store';


function Tamanios() {
    const {
        selectedButton,
        customWidth,
        customHeight,
        widthError,
        heightError,
        selectedGridButton,
        setSelectedButton,
        setCustomWidth,
        setCustomHeight,
        setWidthError,
        setHeightError,
        setSelectedGridButton,
        setSelectedDimension
    } = useTamanioStore();

    const handleButtonClick = (buttonName: string) => {
        setSelectedButton(buttonName);
        if (buttonName === "personalizado") {
            // Si ya hay valores previos, los mantiene
            if (!customWidth) setCustomWidth("10");
            if (!customHeight) setCustomHeight("15");

            setSelectedDimension(`${customWidth || "10"} X ${customHeight || "15"}`);
        } else {
            // Si elige otro tamaño estándar, restablecer dimensiones a su opción
            setSelectedDimension(buttonName);
        }
    };

    const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCustomWidth(value);

        if (Number(value) < 10) {
            setWidthError('El ancho mínimo es de 10 cm');
        } else if (Number(value) > 60) {
            setWidthError('El ancho máximo es de 60 cm');
        } else {
            setWidthError('');
        }
    };

    const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCustomHeight(value);

        if (Number(value) < 15) {
            setHeightError('El alto mínimo es de 15 cm');
        } else if (Number(value) > 100) {
            setHeightError('El alto máximo es de 100 cm');
        } else {
            setHeightError('');
        }
    };

    const handleGridElement = (dimensiones: string, id: number) => {
        setSelectedGridButton(String(id));
        setSelectedDimension(dimensiones);
    };

    /*// ✅ Actualiza la dimensión cuando se escriben valores personalizados
    useEffect(() => {
        if (selectedButton === "personalizado") {
            setSelectedDimension(`${customWidth} X ${customHeight}`);
        }
    }, [customWidth, customHeight]);

    // ✅ Selecciona automáticamente el primer botón del grid cuando cambia `selectedButton`
    useEffect(() => {

        let newGridButton = "1"; // Por defecto, el primer botón para "estandar"
        let newDimension = "10 X 15"; // Dimensión por defecto

        if (selectedButton === "personalizado") {
            newGridButton = "2";
            newDimension = `${customWidth} X ${customHeight}`;
        } else if (selectedButton !== "estandar") {
            newGridButton = "18";
            newDimension = "40 X 50"; // 
        }

        setSelectedGridButton(newGridButton);
        setSelectedDimension(newDimension);

    }, [selectedButton, customWidth, customHeight]);*/



    return (
        <div className={styles.tamaniosContainer}>
            <div className={styles.tamanioSelectContainer}>
                <div className={styles.tamanioSelectTitle}>
                    <h2 className={styles.textTitle}>Tamaño</h2>
                    <span>(Ancho x Alto)</span>
                </div>
            </div>
            <div className={styles.tamanioButtonsContainer}>
                <button
                    className={`${styles.tamanioButton} ${selectedButton === 'estandar' ? styles.selected : ''}`}
                    onClick={() => handleButtonClick('estandar')}
                >
                    Estándar
                </button>
                <button
                    className={`${styles.tamanioButton} ${selectedButton === 'otros' ? styles.selected : ''}`}
                    onClick={() => handleButtonClick('otros')}
                >
                    Otras Medidas
                </button>
                <button
                    className={`${styles.tamanioButton} ${selectedButton === 'personalizado' ? styles.selected : ''}`}
                    onClick={() => handleButtonClick('personalizado')}
                >
                    Personalizado
                </button>
            </div>
            {selectedButton === 'personalizado' ? (
                <div className={styles.customSizeContainer}>
                    <div className={styles.customInputRow}>
                        <label className={styles.customLabel}>
                            Ancho:
                            <input
                                type="number"
                                min={10}
                                max={60}
                                value={customWidth}
                                onChange={handleWidthChange}
                                className={styles.customInput}
                            />
                        </label>
                        {widthError && <span className={styles.errorText}>{widthError}</span>}
                    </div>
                    <div className={styles.customInputRow}>
                        <label className={styles.customLabel}>
                            Alto:
                            <input
                                type="number"
                                min={15}
                                max={100}
                                value={customHeight}
                                onChange={handleHeightChange}
                                className={styles.customInput}
                            />
                        </label>
                        {heightError && <span className={styles.errorText}>{heightError}</span>}
                    </div>
                </div>
            ) : (
                <div style={{ display: selectedButton === 'personalizado' ? 'none' : 'block' }}>
                    <TamanioGrid
                        handleGridElement={handleGridElement}
                        selectedGridButton={selectedGridButton}
                        tipo_medida={selectedButton === 'estandar'}
                    />
                </div>
            )}
        </div>
    );
}

export default Tamanios;