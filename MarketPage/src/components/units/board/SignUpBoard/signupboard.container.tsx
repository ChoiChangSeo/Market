import SignUpPresenter from "./signupboard.presenter";
import {useRecoilState } from "recoil";
import { emailState , nameState,passwordState,checkPasswordState,emailErrorState,nameErrorState ,passwordErrorState,checkPasswordErrorState} from "../../../../commons/store";
import { ChangeEvent} from 'react';
import { Modal } from "antd";
import 'antd/dist/antd.css'




export default function SignUpPageContainer(){
    const [email,setEmail] = useRecoilState(emailState)
    const [name,setName] = useRecoilState(nameState)
    const [password,setPassword] = useRecoilState(passwordState)
    const [checkPassword,setCheckPassword] = useRecoilState(checkPasswordState)
    const [,setEmailError] = useRecoilState(emailErrorState)
    const [,setNameError] = useRecoilState(nameErrorState)
    const [,setPasswordError] = useRecoilState(passwordErrorState)
    const [,setCheckPasswordError] = useRecoilState(checkPasswordErrorState)

    const onChangeEmail = (event : ChangeEvent<HTMLInputElement>) =>{
        setEmail(event.target.value)
        if(event.target.value !== ""){
            setEmailError("")
        }
    }
    const onChangeName = (event : ChangeEvent<HTMLInputElement>) =>{
        setName(event.target.value)
        if(event.target.value !== ""){
            setNameError("")
        }
    }
    const onChangePassword = (event : ChangeEvent<HTMLInputElement>) =>{
        setPassword(event.target.value)
        if(event.target.value !== ""){
            setPasswordError("")
        }
    }
    const onChangeCheckPassword = (event : ChangeEvent<HTMLInputElement>) =>{
        setCheckPassword(event.target.value)
        if(event.target.value !== ""){
            setCheckPasswordError("")
        }
    }

    const onClickSignUp = () =>{
        if(email === ""){
            setEmailError("이메일을 입력해주세요")
        }
        if(name === ""){
            setNameError("이름을 입력해주세요")
        }
        if(password === ""){
            setPasswordError("비밀번호을 입력해주세요")
        }
        if(checkPassword === ""){
            setCheckPasswordError("비밀번호를 입력해주세요")
        }
        if(/^\w+@\w+\.\w+$/.test(email)? email : setEmailError("올바른 이메일이 아닙니다.") ){
            console.log(email)
        }

        if(/^\d{8,16}$/.test(password)? password : setPasswordError("비밀번호는 8~16글자 사이입니다.")){
            console.log(password)
        }
        if(/^\d{8,16}$/.test(checkPassword)? checkPassword : setCheckPasswordError("비밀번호는 8~16글자 사이입니다.")){
            console.log(password)
        }
        if(password !== checkPassword){
            Modal.error({content : "비밀번호를 다시 확인해주세요"})
        }
    }

    return(
       <SignUpPresenter onClickSignUp={onClickSignUp} onChangeEmail={onChangeEmail} onChangeName={onChangeName} onChangePassword={onChangePassword} onChangeCheckPassword={onChangeCheckPassword}/> 
    )
}