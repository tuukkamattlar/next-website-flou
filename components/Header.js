import styles from './styles/Header.module.css'

export default function Header({ title }) {
  return (
    <div className={styles.header}>
      <div 
        className={styles.imgLayer}
        style={{
        backgroundImage: "url(/img/tram.jpg)",
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
      </div>
      <div className={styles.title}>
        <h1>{title}</h1>
      </div>
    </div>
  )
}
