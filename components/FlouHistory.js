import styles from './styles/FlouPage.module.css';

export default function FlouHistory({ item, lan }) {
  return (
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
  );
}
