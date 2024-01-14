import { atom } from "recoil"

export const userAuth = atom({
    key:'userAuth',
    default:''
})

export const ToggleMode = atom({
    key:'ToggleMode',
    default:false
})

export const CartItem = atom({
    key:'CartItem',
    default:[]
})