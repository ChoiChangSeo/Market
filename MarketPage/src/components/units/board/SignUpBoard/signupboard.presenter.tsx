import { ChangeEvent  } from 'react'
import { useRecoilState } from 'recoil';
import { checkPasswordErrorState, emailErrorState, nameErrorState, passwordErrorState } from '../../../../commons/store';
import * as S from './signupboard.styled'
interface ISignUpPresenterProps{
    onChangeEmail : (event : ChangeEvent<HTMLInputElement>) => void;
    onChangeName : (event : ChangeEvent<HTMLInputElement>) => void
    onChangePassword :(event : ChangeEvent<HTMLInputElement>) => void
    onChangeCheckPassword : (event : ChangeEvent<HTMLInputElement>) => void
    onClickSignUp : () => void
}




export default function SignUpPresenter(props:ISignUpPresenterProps){
    const [emailError] = useRecoilState(emailErrorState)
    const [nameError] = useRecoilState(nameErrorState)
    const [passwordError] = useRecoilState(passwordErrorState)
    const [checkPasswordError] = useRecoilState(checkPasswordErrorState)
    
    return(
        <S.Wrapper>
            <S.SignUpWrapper>
                <S.InputWrapper>
                    <S.InputNameTag>이메일</S.InputNameTag>
                </S.InputWrapper>
                <S.Email onChange={props.onChangeEmail} placeholder="이메일을 입력해주세요"></S.Email>
                <S.ErrorMsg>{emailError}</S.ErrorMsg>
                <S.InputWrapper>
                    <S.InputNameTag>이름</S.InputNameTag>
                </S.InputWrapper>
                <S.Name  onChange={props.onChangeName} placeholder="이름을 입력해주세요"></S.Name> 
                <S.ErrorMsg>{nameError}</S.ErrorMsg>
                <S.InputWrapper>
                    <S.InputNameTag>비밀번호</S.InputNameTag>
                </S.InputWrapper>
                <S.Password  onChange={props.onChangePassword} placeholder="비밀번호를 입력해주세요"></S.Password>
                <S.ErrorMsg>{passwordError}</S.ErrorMsg>
                <S.InputWrapper>
                    <S.InputNameTag>비밀번호 확인</S.InputNameTag>
                </S.InputWrapper>
                <S.PasswordCheck  onChange={props.onChangeCheckPassword} placeholder="비밀번호를 입력해주세요"></S.PasswordCheck>
                <S.ErrorMsg>{checkPasswordError}</S.ErrorMsg>
                <S.SignUpButton onClick={props.onClickSignUp}>회원가입</S.SignUpButton>
            </S.SignUpWrapper>
        </S.Wrapper>
    )
}