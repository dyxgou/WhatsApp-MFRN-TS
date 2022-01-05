import axios from "./axiosData"


const useGetFriends = async (userId) =>
{
  if(!userId)
  {
    return null
  }
  const friendsData = await axios({
    url : `/contact/getc/${userId}`,
    method : "GET",
  }).then(res => {
    if(res.status === 200)
    {
      return res.data.friends
    }
  }).catch(err => {
    console.error(err);
    return null
  })

  return friendsData

}


export default useGetFriends