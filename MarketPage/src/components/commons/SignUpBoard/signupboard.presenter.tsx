
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
                <S.SignUpWrapper onSubmit={props.handleSubmit(props.onClickSignUp)}>
                <S.Email {...props.register("email")} placeholder="이메일을 입력해주세요"></S.Email>
                <S.ErrorMsg>{props.formState.errors.email?.message}</S.ErrorMsg>
                <S.Name  {...props.register("name")} placeholder="이름을 입력해주세요"></S.Name> 
                <S.ErrorMsg>{props.formState.errors.name?.message}</S.ErrorMsg>
                <S.Password  {...props.register("password")} placeholder="비밀번호를 입력해주세요"></S.Password>
                <S.ErrorMsg>{props.formState.errors.password?.message}</S.ErrorMsg>
                <S.PasswordCheck  {...props.register("checkPassword")} placeholder="비밀번호를 입력해주세요"></S.PasswordCheck>
                <S.ErrorMsg>{props.formState.errors.checkPassword?.message}</S.ErrorMsg>
                <S.Button>회원가입</S.Button>
                <S.Mark></S.Mark>
                </S.SignUpWrapper>
        </S.Wrapper>
    )
}