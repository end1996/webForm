import { useState } from 'react';
import styles from './Tamanios.module.css';

function Tamanios() {
    const [selectedButton, setSelectedButton] = useState<string>('estandar'); // 'estandar' por defecto
    const [customWidth, setCustomWidth] = useState<string>('');
    const [customHeight, setCustomHeight] = useState<string>('');
    const [widthError, setWidthError] = useState<string>('');
    const [heightError, setHeightError] = useState<string>('');

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
    };

    const dimensionesEstandar = [
        '10 X 15', '13 X 18', '15 X 21', '20 X 25', '20 X 30', '20 X 40', '20 X 50', '30 X 40',
        '25 X 30', '25 X 38', '25 X 40', '25 X 50', '25 X 60', '30 X 40', '30 X 45', '30 X 50', '30 X 60',
    ];

    const otrasMedidas = [
        '40 X 50', '40 X 60', '50 X 60', '50 X 70', '60 X 80', '60 X 90', '60 X 100',
    ];

    const dimensiones = selectedButton === 'otros' ? otrasMedidas : dimensionesEstandar;

    return (
        <div className={styles.tamaniosContainer}>
            <div className={styles.tamanioSelectContainer}>
                <div>
                    <h2 className={styles.textTitle}>Tamaño</h2>
                </div>
                <div>
                    <select className={styles.tamanioSelect}>
                        <option>cm</option>
                        <option>mts</option>
                    </select>
                </div>
                <div>
                    <label className={styles.textSecondary}>(Alto x Ancho)</label>
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
                    <label className={styles.customLabel}>
                        Ancho:
                        <input
                            type="text"
                            value={customWidth}
                            onChange={handleWidthChange}
                            className={styles.customInput}
                        />
                        {widthError && <span className={styles.errorText}>{widthError}</span>}
                    </label>
                    <label className={styles.customLabel}>
                        Alto:
                        <input
                            type="text"
                            value={customHeight}
                            onChange={handleHeightChange}
                            className={styles.customInput}
                        />
                        {heightError && <span className={styles.errorText}>{heightError}</span>}
                    </label>
                </div>
            ) : (
                <div className={styles.gridDimensiones}>
                    {dimensiones.map((dimension, index) => (
                        <button key={index} className={styles.dimensionButton}>{dimension}</button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Tamanios;