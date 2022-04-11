import * as S from './loginboard.styled'


export default function LoginPagePresenter(){
    return(
        <S.Wrapper>
            <S.LoginWrapper>
                <S.Email placeholder="이메일을 입력해주세요"></S.Email>
                <S.Password placeholder="비밀번호를 입력해주세요"></S.Password>
                <S.LoginButton>로그인하기</S.LoginButton>
                <S.MarkLine></S.MarkLine>
                <S.LoginNavWrapper>
                    <S.EmailFind>이메일 찾기</S.EmailFind>
                    <S.Mark></S.Mark>
                    <S.PasswordFind>비밀번호 찾기</S.PasswordFind>
                    <S.Mark></S.Mark>
                    <S.SignUp>회원가입</S.SignUp>
                </S.LoginNavWrapper>
            </S.LoginWrapper>
        </S.Wrapper>
    )
}