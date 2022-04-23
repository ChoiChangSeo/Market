import LoginPagePresenter from "./loginboard.presenter";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState} from "../../../commons/store";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
// import {withAuth} from '../../../../commons/HOCS/withAuth';



const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
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
    const [loginUser] = useMutation(LOGIN_USER)
    const [, setUserInfo] = useRecoilState(userInfoState);
    const router = useRouter()
    const [,setAccessToken] = useRecoilState(accessTokenState)
    const {register, handleSubmit, formState} = useForm({
        resolver:yupResolver(schema)
    })
    const client = useApolloClient();

    const onClickLogin = async (data:ILogin) =>{
        try{
        const result = await loginUser({
            variables:{...data}
        })
        const accessToken = result.data.loginUser.accessToken
        setAccessToken(accessToken)

        const resultUserInfo = await client.query({
            query: FETCH_USER_LOGGED_IN,
            context: {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            },
          });
        const userInfo = resultUserInfo.data.fetchUserLoggedIn;
        setAccessToken(accessToken);
        setUserInfo(userInfo);
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
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