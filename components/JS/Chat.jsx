import Avatar from "./Avatar"
import IconButton from "./IconsButton"
import background from "../../images/background.jpg"
import { SearchIcon , DotsHorizontalIcon, EmojiHappyIcon, PaperAirplaneIcon, MicrophoneIcon } from "@heroicons/react/solid"
import Message from "./Message"
import styles from "../CSS/Chat.module.css"
import { useRecoilValue } from "recoil"
import { getChat } from "../../atoms/chatAtom"
import useInput from "../../hooks/useInput"



const Chat = () =>
{
  const chatInput = useInput({ placeholder : "Enviar un mensaje"  })
  const chatData = useRecoilValue(getChat)
  

  return(
    <div className={styles.chat} >
      <header className={styles.chat__header}>
        <div className={styles.chat__avatar}>
          <Avatar/>
          <span> Diego </span>
        </div>
        <div className={styles.chat__iconsHeader} >
          <IconButton Icon={SearchIcon} margin={15} />
          <IconButton Icon={DotsHorizontalIcon}/>
        </div>
      </header>

      <main 
        className={styles.chat__body}
        style={{
          backgroundImage: `url(${background.src})`
        }}
      >
        
      </main>

      <footer className={styles.chat__footer}>
        <form className={styles.chat__inputContainer} >
          <IconButton Icon={ EmojiHappyIcon } />
          <IconButton Icon={PaperAirplaneIcon} />
          <input { ...chatInput } />
          <IconButton Icon={MicrophoneIcon}  />
        </form>
      </footer>
    </div>
  )
}

export default Chat