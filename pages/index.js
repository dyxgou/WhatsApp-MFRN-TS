const Login = () =>
{
  

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

          <button 
            className={`${styles.auth__buttonSend} ${isCompleted && styles.auth__buttonEnable}`} 
            disabled={!isCompleted}
            onClick={(e) => loginHandler(e)}
          >Login</button>

        </form>
      </main>
    </div>
  )
}


export default Login