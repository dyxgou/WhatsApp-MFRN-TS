import styles from "../CSS/Message.module.css"

const Message = ({ message , timestamp , author , received }) =>
{
  return (
    <div className={`${styles.message} ${received && styles.message__received} `}>
      <span className={styles.message__author} >{author}</span>
      <p className={styles.message__content} >{message}</p>
      <span className={styles.message__time}>{timestamp}</span>      
    </div>
  )
}


export default Message