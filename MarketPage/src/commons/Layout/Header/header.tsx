import * as S from '../Header/header.presenter'
import { useRouter } from 'next/router';
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../store";
import { gql, useQuery } from '@apollo/client';

const FETCH_USER = gql`
  query fetchUserLoggedIn{
    fetchUserLoggedIn{
      name
    }
  }
`

export default function HeaderLayout() {
  const router = useRouter()
  const [accessToken] = useRecoilState(accessTokenState)
  
  const {data} = useQuery(FETCH_USER)
  console.log(data)
  
  const onClickMoveLogin = () => {
    router.push('/Login')
  }

  const onClickMoveSignUp = () => {
    router.push('/SignUp')
  }
  const onClick = () => {}
  return (
    <S.Wrapper>
      <S.NavDiv>
        <S.EarthImg
        src="/mainlogo.png"
        ></S.EarthImg>
        <S.MainName>WithMarket</S.MainName>
      </S.NavDiv>
      <S.NavDiv1>
        <S.Login onClick={accessToken? onClick : onClickMoveLogin}>{accessToken? `${data?.fetchUserLoggedIn.name}` : "로그인"}</S.Login>
        <S.Mark></S.Mark>
        <S.SignUp onClick={onClickMoveSignUp}>회원가입</S.SignUp>
      </S.NavDiv1>
    </S.Wrapper>
  );
}
