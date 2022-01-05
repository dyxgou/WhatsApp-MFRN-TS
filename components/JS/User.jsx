import styles from "../CSS/User.module.css"
import Avatar from "./Avatar"
import useSetChat from "../../hooks/useSetChat"
import { useRecoilState, useRecoilValue } from "recoil"
import { userAtom } from "../../atoms/userAtom"
import { useRouter } from "next/router"
import { chatAtomState } from "../../atoms/chatAtom"
import { useEffect } from "react"

const User = ({ avatar , name , isConnected , userId }) => 
{
  const router = useRouter()
  const { _id } = useRecoilValue(userAtom)
  const [ chat , setChat ] = useRecoilState(chatAtomState)
  const chatHandler = async(e) =>
  {
    e.preventDefault()
    const chatData = await useSetChat(_id , userId)
    setChat(chatData)
  }

  useEffect(() =>
  {
    if(!!chat)
    {
      console.log(chat);
      router.push(`/chat/${chat?._id}`)
    }
  } , [chat , chat?._id])

  return(
    <section className={styles.user} onClick={(e) => chatHandler(e)} >
      <div className={styles.user__avatar}>
        <Avatar image={avatar} />
        <div 
          className={`${styles.user__status} ${isConnected ?styles.user__connected : styles.user__disconnect}`} 
        />
      </div>
      <span> {name} </span>
    </section>
  )
}


export default User