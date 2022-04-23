import {atom} from 'recoil'

export const accessTokenState = atom({
    key: "accessTokenState",
    default:""
})

export const userInfoState = atom({
    key:"userInfoState",
    default:""
})

export const setMyImageState = atom({
    key : "setMyImageState",
    default:[]
})