import { useState, useContext } from 'react';
import styles from './Tamanios.module.css';
import { DimensionContext } from '../../../../context/DimensionContext';

function Tamanios() {
    const [selectedButton, setSelectedButton] = useState<string>('estandar'); // 'estandar' por defecto
    const [customWidth, setCustomWidth] = useState<string>('');
    const [customHeight, setCustomHeight] = useState<string>('');
    const [widthError, setWidthError] = useState<string>('');
    const [heightError, setHeightError] = useState<string>('');
    const [selectedGridButton, setSelectedGridButton] = useState<string>('');
    const { setSelectedDimension } = useContext(DimensionContext);

    const handleButtonClick = (buttonName: string) => {
        setSelectedButton(buttonName);
    };

    const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCustomWidth(value);
        if (Number(value) < 10) {
            setWidthError('El ancho mínimo es de 10 cm');
        } else if (Number(value) > 60) {
            setWidthError('El ancho máximo es de 60 cm');
        }
        else {
            setWidthError('');
        }
        setSelectedDimension(`${value} X ${customHeight}`);
    };

    const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCustomHeight(value);
        if (Number(value) < 15) {
            setHeightError('El alto mínimo es de 15 cm');
        } else if (Number(value) > 100) {
            setHeightError('El alto máximo es de 100 cm');
        }
        else {
            setHeightError('');
        }
        setSelectedDimension(`${customWidth} X ${value}`);
    };

    const handleGridElement = (gridButtonName: string) => {
        setSelectedGridButton(gridButtonName);
        setSelectedDimension(gridButtonName);
    }

    const dimensionesEstandar = [
        '10 X 15', '13 X 18', '15 X 21', '20 X 25', '20 X 30', '20 X 40', '20 X 50', '20 X 60',
        '25 X 30', '25 X 38', '25 X 40', '25 X 50', '25 X 60', '30 X 40', '30 X 45', '30 X 50', '30 X 60',
    ];

    const otrasMedidas = [
        '40 X 50', '40 X 60', '50 X 60', '50 X 70', '60 X 80', '60 X 90', '60 X 100',
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
                <div className={styles.gridDimensiones}>
                    {dimensiones.map((dimension) => (
                        <button key={dimension} className={`${styles.gridButton} ${selectedGridButton === dimension ? styles.selected : ''}`}
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

export default Tamanios;