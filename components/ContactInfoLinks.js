import styles from './styles/Contact.module.css';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

export default function ContactInfoLinks({ item, lan }) {
  return (
            <div className={styles.urls}>
              <h1>{{fi: "Linkkejä", en: "Shortcuts"}[lan]}</h1>
              {item.urls.map((value,index) => (
                <h4 key={index}>
                <Link href={value.url}>{value.name[lan]}</Link></h4>
              ))}
            </div>
  );
}
