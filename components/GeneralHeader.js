import { Icon } from '@blueprintjs/core';
import styles from './styles/GeneralHeader.module.css';

export default function GeneralHeader({ title, img, lan, description }) {
  return (
      <div className={styles.header}>
        <div 
            className={styles.imgLayer}
            style={{
            backgroundImage: "url(/"+img+")",
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}
        >
        </div>
        <div className={styles.title}>
            <h1>{title[lan]}</h1>
            <h3>{description[lan]}</h3>
        </div>
    </div>
  );
}
