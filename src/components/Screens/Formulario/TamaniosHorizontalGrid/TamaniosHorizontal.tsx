import { useTamanioStore } from '../../../../stores/tamanio.store';
import styles from './TamaniosHorizontal.module.css';

function TamaniosHorizontal() {
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
    };

    const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCustomWidth(value);
        if (Number(value) < 15) {
            setWidthError('El ancho mínimo es de 15 cm');
        } else if (Number(value) > 100) {
            setWidthError('El ancho máximo es de 100 cm');
        } else {
            setWidthError('');
        }
        setSelectedDimension(`${value} X ${customHeight}`);
    };

    const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCustomHeight(value);
        if (Number(value) < 10) {
            setHeightError('El alto mínimo es de 10 cm');
        } else if (Number(value) > 60) {
            setHeightError('El alto máximo es de 60 cm');
        } else {
            setHeightError('');
        }
        setSelectedDimension(`${customWidth} X ${value}`);
    };

    const handleGridElement = (gridButtonName: string) => {
        setSelectedGridButton(gridButtonName);
        setSelectedDimension(gridButtonName);
    }

    // Invertir las dimensiones estándar
    const dimensionesEstandar = [
        '15 X 10', '18 X 13', '21 X 15', '25 X 20', '30 X 20', '40 X 20', '50 X 20', '60 X 20',
        '30 X 25', '38 X 25', '40 X 25', '50 X 25', '60 X 25', '40 X 30', '45 X 30', '50 X 30', '60 X 30',
    ];

    // Invertir otras medidas
    const otrasMedidas = [
        '50 X 40', '60 X 40', '60 X 50', '70 X 50', '80 X 60', '90 X 60', '100 X 60',
    ];

    const dimensiones = selectedButton === 'otros' ? otrasMedidas : dimensionesEstandar;

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
                                min={15}
                                max={100}
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
                                min={10}
                                max={60}
                                value={customHeight}
                                onChange={handleHeightChange}
                                className={styles.customInput}
                            />
                        </label>
                        {heightError && <span className={styles.errorText}>{heightError}</span>}
                    </div>
                </div>
            ) : (
                <div className={styles.gridDimensiones}>
                    {dimensiones.map((dimension) => (
                        <button
                            key={dimension}
                            className={`${styles.gridButton} ${selectedGridButton === dimension ? styles.selected : ''}`}
                            onClick={() => handleGridElement(dimension)}
                        >
                            {dimension}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default TamaniosHorizontal;