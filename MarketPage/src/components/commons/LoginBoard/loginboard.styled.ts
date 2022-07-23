import styled from "@emotion/styled"

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-color: #F2F0EB;
`
export const LoginWrapper = styled.div`
    width: 30%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15%;
    padding: 3% 0% 3% 0%;
    border-radius: 5%;
    border: 2px solid #F24130;
`
export const LoginBox = styled.form`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
export const Email = styled.input`
    width: 80%;
    height: 25%;
    margin-bottom: 1%;
    border: 2px solid #F24130;
    border-radius: 10px;
    background-color: transparent;
    color: gray;
    padding: 1%;
    font-size: 13px;
    ::placeholder{
        padding: 1%;
        font-size: 13px;
    }
`

export const Password = styled.input`
    width: 80%;
    height: 25%;
    margin-bottom: 5%;
    border: 2px solid #F24130;
    border-radius: 10px;
    background-color: transparent;
    color: gray;
    padding: 1%;
    font-size: 13px;
    ::placeholder{
        padding: 1%;
        font-size: 13px;
    }
`
export const LoginButton = styled.button`
    width: 80%;
    height: 25%;
    border: none;
    margin-bottom: 10%;
    border-radius: 10px;
    background-color: #F2522E;
    color: #F2F0EB;
    cursor: pointer;
    font-size: 15px;
`
export const MarkLine = styled.div`
    width: 80%;
    margin-bottom: 5%;
    border: none;
    border-top: 1px solid gray;
`
  
export const LoginNavWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const EmailFind = styled.div`
    color: gray;
    cursor: pointer;
    font-size: 13px;
`
export const PasswordFind = styled.div`
    color: gray;
    cursor: pointer;
    font-size: 13px;
`
export const SignUp = styled.div`
    color: gray;
    cursor: pointer;
    font-size: 13px;
`
export const Mark = styled.div`
    width: 1%;
    margin: 0% 3% 0% 3%;
    border: none;
    border-left: 1px solid gray;
`
export const ErrorMsg = styled.div`
    width: 100%;
    height: 5%;
    margin-left: 20%;
    margin-bottom: 3%;
    color: red;
`