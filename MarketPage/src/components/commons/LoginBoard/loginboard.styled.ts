import styled from "@emotion/styled"

export const Wrapper = styled.div`
  width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('/LoginBackground.jpg');
`
export const LoginWrapper = styled.div`
    width: 30%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15%;
    padding: 3% 3%;
    border-radius: 5%;
    border: 1px solid lightgray;
`
export const Email = styled.input`
    width: 80%;
    height: 25%;
    margin-bottom: 1%;
    border: 1px solid lightgray;
    border-radius: 10px;
    background-color: transparent;
    color: gray;
`

export const Password = styled.input`
    width: 80%;
    height: 25%;
    margin-bottom: 5%;
    border: 1px solid lightgray;
    border-radius: 10px;
    background-color: transparent;
    color: gray;
`
export const LoginButton = styled.button`
    width: 80%;
    height: 25%;
    margin-bottom: 10%;
    border-radius: 10px;
    background-color: gray;
    cursor: pointer;
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
`
export const PasswordFind = styled.div`
    color: gray;
    cursor: pointer;
`
export const SignUp = styled.div`
    color: gray;
    cursor: pointer;
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