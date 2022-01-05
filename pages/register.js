import styles from "../styles/Auth.module.css"
import useInput from "../hooks/useInput"

const Login = () =>
{
  const email = useInput({ type : "email" , placeholder : "Introduce tu Email" })
  const password = useInput({ type: "password" , placeholder : "Introduce tu contraseña" })
  const userName = useInput({ placeholder : "Introduce tu nombre de usuario" })
  const isCompleted = email.value && password.value && userName.value
  

  return(
    <div className={styles.auth}>
      <main className={styles.auth__card} >
        <h1 className={styles.auth__title} >WhatsApp</h1>

        <form className={styles.auth__form} >
          <section className={styles.auth__inputContainer}>
            <label className={styles.auth__title} >Email</label>
            <input {...email} />
          </section>

          <section className={styles.auth__inputContainer}>
            <label className={styles.auth__title} >Password</label>
            <input {...password} />
          </section>

          <section className={styles.auth__inputContainer}>
            <label className={styles.auth__title} >Nombre de usuario</label>
            <input {...userName} />
          </section>

          <button 
            className={`${styles.auth__buttonSend} ${isCompleted && styles.auth__buttonEnable}`} 
            disabled={!isCompleted}
          >Login</button>

        </form>
      </main>
    </div>
  )
}


export default Login