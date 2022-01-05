import Sidebar from "../components/JS/Sidebar"
import styles from "../styles/Home.module.css"
import Contacts from "../components/JS/Contacts"

const Home = () =>
{
  return(
    <div className={styles.home} >
      {/* Sidebar */}
      <Sidebar />
      {/* Contacts */}
      <Contacts />
    </div>
  )
}




export default Home