import { atom, selector } from "recoil"


export const chatAtomState = atom({
  key : "chatState",
  default : null
})

export const getChat = selector({
  key : "getChatState",
  get : ({ get }) =>
  {
    const chat = get(chatAtomState)
    return chat
  }
})