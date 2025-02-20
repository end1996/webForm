import { useState } from 'react';
import styles from './Iconos.module.css';

interface IconosProps {
  onIconClick: (view: string) => void;
}

const Iconos: React.FC<IconosProps> = ({ onIconClick }) => {
  const [selectedIcon, setSelectedIcon] = useState<string>('main');

  const handleIconClick = (view: string) => {
    setSelectedIcon(view);
    onIconClick(view);
  };

  return (
    <div className={styles.iconContainer}>
      <div
        className={`${styles.iconContainer__each} ${selectedIcon === 'main' ? styles.selected : ''}`}
        onClick={() => handleIconClick('main')}
      >
        <i className="bi bi-card-image fs-4"></i>
        <label className={styles.iconText}>IMAGEN</label>
      </div>
      <div
        className={`${styles.iconContainer__each} ${selectedIcon === 'marcos' ? styles.selected : ''}`}
        onClick={() => handleIconClick('marcos')}
      >
        <i className="bi bi-file-person fs-4"></i>
        <label className={styles.iconText}>MARCO</label>
      </div>
    </div>
  );
}

export default Iconos;