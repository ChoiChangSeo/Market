import LoginPagePresenter from "./loginboard.presenter";
import { ChangeEvent } from 'react';
import { useRecoilState } from "recoil";
import { accessTokenState, emailErrorState, emailState, passwordErrorState, passwordState } from "../../../../commons/store";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;


export default function LoginPageContainer(){
    const [loginUser] = useMutation(LOGIN_USER)
    const router = useRouter()
    const [,setAccessToken] = useRecoilState(accessTokenState)
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

    const onClickLogin = async () =>{
        if(!email && !password){
            Modal.error({content : "이메일과 패스워드를 확인해주세요"})
        }
        if(/^\w+@\w+\.\w+$/.test(email)? email : setEmailError("올바른 이메일이 아닙니다.") ){
            console.log(email)
        }
        if(/^\d{8,16}$/.test(password)? password : setPasswordError("비밀번호는 8~16글자 사이입니다.")){
            console.log(password)
        }
        try{
        const result = await loginUser({
            variables:{email,password}
        })
        const accessToken = result.data.loginUser.accessToken
        setAccessToken(accessToken)
        Modal.success({content:"로그인에 성공하였습니다."})
        router.push('/')
        }catch(error){
        Modal.error({content:"로그인에 실패하였습니다."})
    }
    }

    const onClickMoveSignUp = () => {
        router.push("/SignUp")
    }
    return(
        <LoginPagePresenter onClickMoveSignUp={onClickMoveSignUp} onClickLogin={onClickLogin} onChangeEmail={onChangeEmail} onChangePassword={onChangePassword}/>
    )
}