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
export const SignUpWrapper = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15%;
    padding: 3% 3%;
    border-radius: 5%;
    border: 1px solid lightgray;
`
export const InputNameTag = styled.div`
    width: 100%;
    font-size: 20px;
    color: gray;
`

export const InputWrapper = styled.div`
    display: flex;
    justify-content: start;
`

export const Email = styled.input`
    width: 80%;
    height: 9%;
    margin-bottom: 5%;
    border: 1px solid lightgray;
    border-radius: 10px;
    background-color: transparent;
    font-size: 15px;
    color: gray;
`

export const Name = styled.input`
    width: 80%;
    height: 9%;
    margin-bottom: 5%;
    border: 1px solid lightgray;
    border-radius: 10px;
    background-color: transparent;
    font-size: 15px;
    color: gray;
`

export const Password = styled.input`
    width: 80%;
    height: 9%;
    margin-bottom: 5%;
    border: 1px solid lightgray;
    border-radius: 10px;
    background-color: transparent;
    font-size: 15px;
    color: gray;
`

export const PasswordCheck = styled.input`
    width: 80%;
    height: 9%;
    margin-bottom: 5%;
    border: 1px solid lightgray;
    border-radius: 10px;
    background-color: transparent;
    font-size: 15px;
    color: gray;
`

export const SignUpButton = styled.button`
    width: 80%;
    height: 10%;
    margin-top : 10%;
    border-radius: 10px;
    background-color: gray;
    cursor: pointer;
`

export const ErrorMsg = styled.div`
    width: 100%;
    height: 1%;
    margin-left: 20%;
    margin-bottom: 3%;
    color: red;
`