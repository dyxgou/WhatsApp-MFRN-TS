import Chat from "../../components/JS/Chat"
import Sidebar from "../../components/JS/Sidebar"
import styles from "../../styles/Home.module.css"


const UserChat = () =>
{
  return(
    <div className={styles.home} >
      {/* Sidebar */}
      <Sidebar />
      {/* Chat */}
      <Chat />
    </div>
  )
}


export default UserChat