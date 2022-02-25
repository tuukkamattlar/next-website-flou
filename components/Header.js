import styles from './styles/Header.module.css'

export default function Header({ title }) {

  const placeholderTitle = 'Tarjoamme palveluita liikennejärjestelmiin ja riskienhallintaan liittyvän päätöksenteon tueksi'

  return (
    <div className={styles.header}>
      <div 
        className={styles.imgLayer}
        style={{
          backgroundImage: "url(/img/heading.jpg)",
          backgroundRepeat: 'no-repeat',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      </div>
      <div className={styles.title}>
        <h1>{placeholderTitle}</h1>
        <text>Testi</text>
      </div>
    </div>
  )
}
