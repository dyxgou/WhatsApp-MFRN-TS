import styles from "../CSS/Sidebar.module.css"
import Avatar from "./Avatar"
import IconButton from "./IconsButton"
import { PlusIcon, DotsHorizontalIcon, ViewGridAddIcon, SearchIcon } from "@heroicons/react/solid"
import User from "./User"
import { useRecoilState, useRecoilValue } from "recoil"
import { getUser } from "../../atoms/userAtom"
import { useEffect } from "react"
import { useRouter } from "next/router"
import useGetFriends from "../../hooks/useGetFriends"
import { contactsState } from "../../atoms/contactsAtom"

const Sidebar = () =>
{
  const router = useRouter()
  const userInfo = useRecoilValue(getUser)
  const [ friends , setFriends ] = useRecoilState(contactsState)

  
  useEffect(() => 
  {
    if(!userInfo)
    {
      router.push("/")
    }

    if(!!userInfo)
    {
      const friendsHandler = async() => 
      {
        const friendsData = await useGetFriends(userInfo._id)
        return setFriends(friendsData)
      }
  
      return friendsHandler()
    }
  } , [userInfo])

  return(
    <div className={styles.sidebar} >
      <header className={styles.sidebar__header}>
        <Avatar image={userInfo?.avatar} />

        <div className={styles.sidebar__icons} >
          <IconButton Icon={PlusIcon} />
          <IconButton Icon={ViewGridAddIcon} /> 
          <IconButton Icon={DotsHorizontalIcon} />
        </div>
      </header>

      <section className={styles.sidebar__search}>
        <IconButton Icon={SearchIcon} />
        <input type="text" placeholder="Buscar contacto" />
      </section>

      <div className={styles.sidebar__body} >
        {
          friends.map(friend => {
            return(
              <User 
                avatar={friend?.avatar}
                key={friend?._id}
                userId={friend?._id}
                name={friend?.name}
                isConnected={false}
              />
            )
          })
        }
      </div>

    </div>
  )
}



export default Sidebar