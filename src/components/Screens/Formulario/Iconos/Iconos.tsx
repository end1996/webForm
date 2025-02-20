import styles from './Iconos.module.css';

interface IconosProps {
  onIconClick: (view: string) => void;
}

const Iconos: React.FC<IconosProps> = ({ onIconClick }) => {
  return (
    <div className={styles.iconContainer}>
      <div
        className={styles.iconContainer__each}
        onClick={() => onIconClick('main')}
      >
        <i className="bi bi-card-image fs-4"></i>
        <label className={styles.iconText}>IMAGEN</label>
      </div>
      <div
        className={styles.iconContainer__each}
        onClick={() => onIconClick('marcos')}
      >
        <i className="bi bi-file-person fs-4"></i>
        <label className={styles.iconText}>MARCO</label>
      </div>
    </div>
  );
}

export default Iconos;