import styles from './Iconos/Iconos.module.css';

function Iconos() {
  return (
    <div className={styles.iconContainer}>
      <div className={styles.iconContainer__each}>
        {/*<img className={styles.icon} src="src/assets/image.svg" alt="icon" />*/}
        <i className="bi bi-card-image fs-4"></i>
        <label className={styles.iconText}>IMAGEN</label>
      </div>
      <div className={styles.iconContainer__each}>
        <i className="bi bi-file-person fs-4"></i>
        <label className={styles.iconText}>MARCO</label>
      </div>
      <div className={styles.iconContainer__each}>
        <i className="bi bi-aspect-ratio fs-4"></i>
        <label className={styles.iconText}>PASSEPARTOUT</label>
      </div>
    </div>
  )
}

export default Iconos;