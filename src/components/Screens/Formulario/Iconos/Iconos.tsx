import { useState } from 'react';
import styles from './Iconos.module.css';

function Iconos() {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const handleIconClick = (iconName: string) => {
    setSelectedIcon(iconName);
  };

  return (
    <div className={styles.iconContainer}>
      <div
        className={`${styles.iconContainer__each} ${selectedIcon === 'image' ? styles.selected : ''}`}
        onClick={() => handleIconClick('image')}
      >
        <i className="bi bi-card-image fs-4"></i>
        <label className={styles.iconText}>IMAGEN</label>
      </div>
      <div
        className={`${styles.iconContainer__each} ${selectedIcon === 'person' ? styles.selected : ''}`}
        onClick={() => handleIconClick('person')}
      >
        <i className="bi bi-file-person fs-4"></i>
        <label className={styles.iconText}>MARCO</label>
      </div>
      <div
        className={`${styles.iconContainer__each} ${selectedIcon === 'aspectRatio' ? styles.selected : ''}`}
        onClick={() => handleIconClick('aspectRatio')}
      >
        <i className="bi bi-aspect-ratio fs-5"></i>
        <label className={styles.iconText}>PASSEPARTOUT</label>
      </div>
    </div>
  );
}

export default Iconos;