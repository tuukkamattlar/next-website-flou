import styles from './styles/Contact.module.css';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

export default function ContactInfo({ item, lan }) {
  return (
      <div className={styles.container}>
        <div className={styles.infoText}>
          <Markdown className={styles.markdownDiv}>{item.bodyObject[lan]}</Markdown>
          <img src={item.fillIMG}></img>
        </div>
      </div>
  );
}
