import axios from "../hooks/axiosData"

const useSetChat = async(userOneId , userTwoId) => 
{
  if(!userOneId || !userTwoId)
  {
    return
  }

  const chatData = await axios({
    url : "/contact/getchat", 
    method : "GET",
    params : {
      uOne : userOneId,
      uTwo : userTwoId
    }
  }).then(res => {
    if(res.status === 200)
    {
      return res.data
    }
  }).catch(err =>  {
    console.error(err);
    return null
  })

  return chatData
}


export default useSetChat
