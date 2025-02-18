import styles from './Tamanios.module.css'

function tamanios() {
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
                <button>Estándar</button>
                <button>Personalizado</button>
            </div>
                <div className={styles.gridDimensiones}>
                    <button>3 x 2</button>
                    <button>4 x 2</button>
                    <button>4 x 3</button>
                    <button>6 x 2</button>
                    <button>5 x 3</button>
                    <button>6 x 3</button>
                    <button>6 x 4</button>
                    <button>8 x 3</button>
                    <button>10 x 3</button>
                    <button>8 x 4</button>
                    <button>10 x 4</button>
                    <button>12 x 4</button>
                </div>
            </div>
    )
}

export default tamanios;