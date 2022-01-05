import { atom , selector } from "recoil"


export const userAtom = atom({
  key : "userAtomState",
  default : null
})


export const getUser = selector({
  key : "getUserState",
  get : ({get}) => 
  {
    const userInfo = get(userAtom)
    return userInfo
  }
})


export const getUserId = selector({
  key : "getUserIdState",
  get : ({ get }) =>
  {
    const user = get(userAtom)
    return user?._id
  }
})
