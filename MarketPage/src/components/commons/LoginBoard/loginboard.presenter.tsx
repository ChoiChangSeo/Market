import * as S from './loginboard.styled'


interface ILoginPagePresenterProps{
    onClickLogin: (data:any) => void
    onClickMove: () => void
    register: any
    handleSubmit: any
    formState : any
}

export default function LoginPagePresenter(props:ILoginPagePresenterProps){
    
    return(
        <S.Wrapper>
            <S.LoginWrapper>
                <form onSubmit={props.handleSubmit(props.onClickLogin)}>
                <S.Email {...props.register("email")} placeholder="이메일을 입력해주세요"></S.Email>
                <S.ErrorMsg>{props.formState.errors.email?.message}</S.ErrorMsg>
                <S.Password {...props.register("password")} placeholder="비밀번호를 입력해주세요"></S.Password>
                <S.ErrorMsg>{props.formState.errors.password?.message}</S.ErrorMsg>
                <S.LoginButton>로그인하기</S.LoginButton>
                </form>
                <S.MarkLine></S.MarkLine>
                <S.LoginNavWrapper>
                    <S.EmailFind>이메일 찾기</S.EmailFind>
                    <S.Mark></S.Mark>
                    <S.PasswordFind>비밀번호 찾기</S.PasswordFind>
                    <S.Mark></S.Mark>
                    <S.SignUp onClick={props.onClickMove}>회원가입</S.SignUp>
                </S.LoginNavWrapper>
            </S.LoginWrapper>
        </S.Wrapper>
    )
}