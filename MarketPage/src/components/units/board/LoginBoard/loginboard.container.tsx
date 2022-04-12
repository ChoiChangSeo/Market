import LoginPagePresenter from "./loginboard.presenter";
import { ChangeEvent } from 'react';
import { useRecoilState } from "recoil";
import { emailErrorState, emailState, passwordErrorState, passwordState } from "../../../../commons/store";
import { Modal } from "antd";
import { useRouter } from "next/router";



export default function LoginPageContainer(){
    const router = useRouter()
    const [email,setEmail] = useRecoilState(emailState)
    const [password,setPassword] = useRecoilState(passwordState)
    const [,setEmailError] = useRecoilState(emailErrorState)
    const [,setPasswordError] = useRecoilState(passwordErrorState)

    const onChangeEmail = (event:ChangeEvent<HTMLInputElement>) =>{
        setEmail(event.target.value)
        if(!event.target.value){
            setEmailError("")
        }
    }

   const onChangePassword = (event:ChangeEvent<HTMLInputElement>) =>{
        setPassword(event.target.value)
        if(!event.target.value){
            setPasswordError("")
        }
    }

    const onClickLogin = () =>{
        if(!email && !password){
            Modal.error({content : "이메일과 패스워드를 확인해주세요"})
        }
        if(/^\w+@\w+\.\w+$/.test(email)? email : setEmailError("올바른 이메일이 아닙니다.") ){
            console.log(email)
        }
        if(/^\d{8,16}$/.test(password)? password : setPasswordError("비밀번호는 8~16글자 사이입니다.")){
            console.log(password)
        }
        

    }

    const onClickMoveSignUp = () => {
        router.push("/SignUp")
    }
    return(
        <LoginPagePresenter onClickMoveSignUp={onClickMoveSignUp} onClickLogin={onClickLogin} onChangeEmail={onChangeEmail} onChangePassword={onChangePassword}/>
    )
}