import styles from './styles/FlouPage.module.css';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

export default function FlouPage({ item, lan }) {
  console.log(item);
  return (
    <div className="powder">
      <div className={styles.container}>
        <div className={styles.infoText}>
          <Markdown className={styles.markdownDiv}>{item.description[lan]}</Markdown>
          <img src={item.bodyIMG}></img>
        </div>
        <div className={styles.timeline}>
          <h1>{{fi: "FLOU:n historia", en: "History of FLOU"}[lan]}</h1>
          {item.timeline.map((value, index) => (
            <div key={index} className={styles.yearBlock}>
              <h1>{value.year} </h1>
              <div>
                {value.events.map((e, k) => (
                  <p key={k}>{e.event[lan]}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
