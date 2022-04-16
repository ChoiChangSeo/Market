import {atom} from 'recoil'

export const emailState = atom({
    key : "emailState",
    default: ""
})

export const nameState = atom({
    key : "nameState",
    default: ""
})

export const passwordState = atom({
    key : "passwordState",
    default: ""
})

export const checkPasswordState = atom({
    key : "checkPasswordState",
    default: ""
})

export const emailErrorState = atom({
    key : "emailErrorState",
    default:""
})

export const nameErrorState = atom({
    key : "nameErrorState",
    default:""
})

export const passwordErrorState = atom({
    key : "passwordErrorState",
    default:""
})

export const checkPasswordErrorState = atom({
    key : "checkPasswordErrorState",
    default:""
})

export const accessTokenState = atom({
    key: "accessTokenState",
    default:""
})