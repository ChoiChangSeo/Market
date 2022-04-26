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


export const setAddressState = atom({
    key :"setAddressState",
    default: ""
})

export const setZipcodeState = atom({
    key :"setZipcodeState",
    default: ""
})

export const setAddressDetail = atom({
    key :"setAddressDetail",
    default: ""
})