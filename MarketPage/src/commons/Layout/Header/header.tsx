import * as S from '../Header/header.presenter'
import { useRouter } from 'next/router';
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../store";
import { gql, useMutation, useQuery} from '@apollo/client';
import { IMutation } from '../../types/generated/types';


const FETCH_USER = gql`
  query fetchUserLoggedIn{
    fetchUserLoggedIn{
      name
      email
    }
  }
`
const LOGOUT = gql`
  mutation logoutUser{
    logoutUser
  }
`

export default function HeaderLayout() {
  const router = useRouter()
  const [accessToken,setAccessToken] = useRecoilState(accessTokenState)
  const [logoutUser] = useMutation<Pick<IMutation,"logoutUser">>(LOGOUT)

  
  const {data} = useQuery(FETCH_USER)

  
  const onClickMoveLogin = () => {
    router.push('/Login')
  }

  const onClickMoveSignUp = () => {
    router.push('/SignUp')
  }
  const onClickLogOut = () => {
    try {
      logoutUser()
      setAccessToken("")
      }catch (error:any){
      alert(error.message)
  }
}
  return (
    <S.Wrapper>
      <S.NavDiv>
        <S.EarthImg
        src="/mainlogo.png"
        ></S.EarthImg>
        <S.MainName>WithMarket</S.MainName>
      </S.NavDiv>
      <S.NavDiv1>
        <S.Login onClick={accessToken? undefined : onClickMoveLogin}>{accessToken? `${data?.fetchUserLoggedIn.name}` : "로그인"}</S.Login>
        <S.Mark></S.Mark>
        <S.SignUp onClick={accessToken? undefined :onClickMoveSignUp}>{accessToken? `${data?.fetchUserLoggedIn.email}` :"회원가입"}</S.SignUp>
        {accessToken &&
        <>
        <S.Mark></S.Mark>
        <S.LogOut onClick={accessToken? onClickLogOut : undefined}>{accessToken? `로그아웃` :""}</S.LogOut>
        </>
        }  
      </S.NavDiv1>
    </S.Wrapper>
  );
}
