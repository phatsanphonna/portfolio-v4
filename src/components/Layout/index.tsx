import Footer from '@components/Footer'
import styles from './Layout.module.css'

type Props = {
  children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.main}>
        {children}
      </div>

      {/* <Footer/> */}
    </main>
  )
}

export default Layout