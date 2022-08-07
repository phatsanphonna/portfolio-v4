import styles from './Navbar.module.css'

const Navbar: React.FC = () => {
  return (
    <nav className={styles.root}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Phatsanphon
        </h1>

        <ul>
          <li>
            <a href="./resume.pdf" target="_blank">
              <button className='btn btn-primary'>
                Resume
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar