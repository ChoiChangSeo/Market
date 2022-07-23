import LoginPagePresenter from "./loginboard.presenter";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";


const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;


const schema = yup.object({
    email: yup.string().email("이메일 형식이 올바르지 않습니다.").required("이메일은 필수입력입니다."),
    password : yup.string().min(8,"비밀번호는 8글자 이상입니다.").max(16,"비밀번호는 16글자 이하입니다.").required("비밀번호는 필수입력입니다.")
})
interface ILogin{
    email : string
    password : string
}


export default function LoginPageContainer(){
    const [loginUserExample] = useMutation(LOGIN_USER)
    const [, setAccessToken] = useRecoilState(accessTokenState);
    const router = useRouter()
    const {register, handleSubmit, formState} = useForm({
        resolver:yupResolver(schema)
    })

    const onClickLogin = async (data:ILogin) =>{
        try{
        const result = await loginUserExample({
            variables:{...data}
        })
        const accessToken = result.data.loginUserExample.accessToken;
        setAccessToken(accessToken);
        Modal.success({content:"로그인에 성공하였습니다."})
        router.push('/boards')
        }catch(error){
        Modal.error({content:"로그인에 실패하였습니다."})
    }
    }

    const onClickMove = () => {
        router.push("/SignUp")
    }
    return(
        <LoginPagePresenter register={register} handleSubmit={handleSubmit} formState={formState} onClickMove={onClickMove} onClickLogin={onClickLogin} />
    )
}