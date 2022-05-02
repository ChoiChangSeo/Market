import {atom} from 'recoil'

export const accessTokenState = atom({
    key: "accessTokenState",
    default:""
})

export const isLoadedState = atom({
    key : "isLoadedState",
    default: true
})