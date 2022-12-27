import { faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Card.module.css'

type Props = {
  icon: IconDefinition,
  url: string,
  username: string
}

const Card: React.FC<Props> = ({ icon, url, username }) => {
  return (
  <a href={url} target='_blank' rel="noreferrer">
    <div className={styles.container}>
      <FontAwesomeIcon icon={icon} size='2x' />
      <p className={styles.sns_link}>{username}</p>
    </div>
  </a>
  )
}

export default Card