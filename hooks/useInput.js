import { useState } from  "react"

const useInput = ({ placeholder="" , initialState="" , type="text" }) =>
{
  const [value , setValue] = useState(initialState)

  const onChange = (e) =>
  {
    e.preventDefault()
    setValue(e.target.value)
  }

  return {
    value , 
    type ,
    placeholder ,
    onChange
  }
}


export default useInput