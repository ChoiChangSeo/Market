
import * as S from './signupboard.styled'
interface ISignUpPresenterProps{
    onClickSignUp : (data:any) => void
    register: any
    handleSubmit:any
    formState:any
}



export default function SignUpPresenter(props:ISignUpPresenterProps){

    
    return(
        <S.Wrapper>
            <S.SignUpWrapper>
                <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
                <S.InputWrapper>
                    <S.InputNameTag>이메일</S.InputNameTag>
                </S.InputWrapper>
                <S.Email {...props.register("email")} placeholder="이메일을 입력해주세요"></S.Email>
                <S.ErrorMsg>{props.formState.errors.email?.message}</S.ErrorMsg>
                <S.InputWrapper>
                    <S.InputNameTag>이름</S.InputNameTag>
                </S.InputWrapper>
                <S.Name  {...props.register("name")} placeholder="이름을 입력해주세요"></S.Name> 
                <S.ErrorMsg>{props.formState.errors.name?.message}</S.ErrorMsg>
                <S.InputWrapper>
                    <S.InputNameTag>비밀번호</S.InputNameTag>
                </S.InputWrapper>
                <S.Password  {...props.register("password")} placeholder="비밀번호를 입력해주세요"></S.Password>
                <S.ErrorMsg>{props.formState.errors.password?.message}</S.ErrorMsg>
                <S.InputWrapper>
                    <S.InputNameTag>비밀번호 확인</S.InputNameTag>
                </S.InputWrapper>
                <S.PasswordCheck  {...props.register("checkPassword")} placeholder="비밀번호를 입력해주세요"></S.PasswordCheck>
                <S.ErrorMsg>{props.formState.errors.checkPassword?.message}</S.ErrorMsg>
                <S.Button isActive={props.formState.isValid}>회원가입</S.Button>
                </form>
            </S.SignUpWrapper>
        </S.Wrapper>
    )
}