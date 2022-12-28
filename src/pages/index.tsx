import Layout from '@components/Layout'
import SEO from '@components/SEO'
import type { NextPage } from 'next'
import styles from '@styles/Index.module.css'
import Card from '@components/Card'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faAt, faImage } from '@fortawesome/free-solid-svg-icons'

const socialMediaLink = [
  {
    icon: faImage,
    url: 'https://gallery.phatsanphon.com',
    username: 'My Photographic Gallery'
  },
  {
    icon: faInstagram,
    url: 'https://instagram.com/ssuniie',
    username: 'ssuniie'
  },
  {
    icon: faGithub,
    url: 'https://github.com/phatsanphonna',
    username: 'phatsanphonna'
  },
  {
    icon: faAt,
    url: 'mailto:phatsanphon2004@outlook.com',
    username: 'phatsanphon2004\n@outlook.com'
  },
]

const Home: NextPage = () => {
  return (
    <>
      <SEO title='Phatsanphon Nakaranurak' />

      <Layout>
        <h1 className={styles.title}>
          <span>Phatsanphon</span>
          <span>Nakaranurak</span>
        </h1>

        <hr />

        <div className={styles.card_container}>
          {socialMediaLink.map((sns, index) => (
            <Card {...sns} key={index} />
          ))}
        </div>
      </Layout>
    </>
  )
}

export default Home
