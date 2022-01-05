import axios from "./axiosData"

const useLogin = ({ email , password }) =>
{
  if(!email || !password)  
  {
    return null
  }

  const data = axios(
    {
      url : "/auth/login",
      params : {
        email : email,
        pass : password
      }
    }
  ).then(res => {
    if(res.status === 200)
    {
      return res.data
    }
  }).catch(err => {
    console.error(err);
    return null
  })

  return data
}


export default useLogin