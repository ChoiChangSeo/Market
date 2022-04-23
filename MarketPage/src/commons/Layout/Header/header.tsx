import * as S from '../Header/header.presenter'
import { useRouter } from 'next/router';
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../store";



export default function HeaderLayout() {
  const router = useRouter()
  const [accessToken] = useRecoilState(accessTokenState)
  const [userInfo] = useRecoilState(userInfoState);
  
  const onClickMoveLogin = () => {
    router.push('/Login')
  }

  const onClickMoveSignUp = () => {
    router.push('/SignUp')
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
        <S.Login onClick={onClickMoveLogin}>{accessToken? `${userInfo.name}` : "로그인"}</S.Login>
        <S.Mark></S.Mark>
        <S.SignUp onClick={onClickMoveSignUp}>회원가입</S.SignUp>
      </S.NavDiv1>
    </S.Wrapper>
  );
}
