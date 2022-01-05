import styles from "../CSS/Icon.module.css"

const IconButton = ({ Icon , margin=0 }) =>
{
  return(
    <div className={styles.icon} style={{
      margin: `0 ${margin}px` 
    }} >
      {Icon && <Icon className={styles.icon__button} />}
    </div>
  )
}

export default IconButton