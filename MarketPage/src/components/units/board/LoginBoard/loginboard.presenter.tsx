import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { emailErrorState, passwordErrorState } from '../../../../commons/store'
import * as S from './loginboard.styled'

interface ILoginPagePresenterProps{
    onChangeEmail:(event:ChangeEvent<HTMLInputElement>) => void
    onChangePassword:(event:ChangeEvent<HTMLInputElement>) => void
    onClickLogin: () => void
    onClickMoveSignUp: () => void
}

export default function LoginPagePresenter(props:ILoginPagePresenterProps){
    const [emailError] = useRecoilState(emailErrorState)
    const [passwordError] = useRecoilState(passwordErrorState)
    return(
        <S.Wrapper>
            <S.LoginWrapper>
                <S.Email onChange={props.onChangeEmail} placeholder="이메일을 입력해주세요"></S.Email>
                <S.ErrorMsg>{emailError}</S.ErrorMsg>
                <S.Password onChange={props.onChangePassword} placeholder="비밀번호를 입력해주세요"></S.Password>
                <S.ErrorMsg>{passwordError}</S.ErrorMsg>
                <S.LoginButton onClick={props.onClickLogin}>로그인하기</S.LoginButton>
                <S.MarkLine></S.MarkLine>
                <S.LoginNavWrapper>
                    <S.EmailFind>이메일 찾기</S.EmailFind>
                    <S.Mark></S.Mark>
                    <S.PasswordFind>비밀번호 찾기</S.PasswordFind>
                    <S.Mark></S.Mark>
                    <S.SignUp onClick={props.onClickMoveSignUp}>회원가입</S.SignUp>
                </S.LoginNavWrapper>
            </S.LoginWrapper>
        </S.Wrapper>
    )
}