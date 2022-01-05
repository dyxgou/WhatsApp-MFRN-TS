import styles from "../CSS/Avatar.module.css"
import avatarDefault from "../../images/avatar.jpg"

const Avatar = ({ image }) =>
{
  return(
    <div className={styles.avatar}>
      <img src={image ? image : avatarDefault.src} alt="avatar" className={styles.avatar__image} />
    </div>
  )
}

export default Avatar