import styles from './styles/AddBlock.module.css'

export default function AddBlock() {

  return (
    <div className={styles.container}>
      <div className={styles.bgImg}>
      </div>
      <div className={styles.text}>
        <h1>Joku pähee teksti</h1>
        <h4> t. joku</h4>
      </div>
    </div>
  )
}
