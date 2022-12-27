import styles from './Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <p>2022 Phatsanphon Nakaranurak</p>
      </div>
    </footer>
  )
}

export default Footer