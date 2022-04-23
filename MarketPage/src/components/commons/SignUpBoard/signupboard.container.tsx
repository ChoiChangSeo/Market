import SignUpPresenter from "./signupboard.presenter";
import { Modal } from "antd";
import 'antd/dist/antd.css'
import { gql, useMutation } from '@apollo/client';
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

const CREATE_USER = gql`
   mutation createUser($createUserInput:CreateUserInput!){
        createUser(createUserInput:$createUserInput){
            _id
            email
            name
            picture
        }
    }
`
const schema = yup.object({
    email: yup.string().email("이메일의 형식이 올바르지 않습니다.").required("이메일은 필수 입력사항 입니다."),
    name: yup.string().required("이름은 필수 입력사항입니다."),
    password: yup.string().min(8,"비밀번호는 8글자 이상입니다.").max(16,"비밀번호는 16글자 이하입니다."),
    checkPassword : yup.string().oneOf([yup.ref('password'), null], "패스워드와 일치하지 않습니다.")
})

interface IFormValues {
    email : string
    name: string
    password : string
    checkPassword : string
}

export default function SignUpPageContainer(){

    const [createUser] = useMutation(CREATE_USER)
    const router = useRouter()

    const {register , handleSubmit, formState} = useForm({
        resolver : yupResolver(schema)
    })
    const onClickSignUp = async (data:IFormValues) =>{
        const {checkPassword,...rest} = data
        try{
        await createUser({
            variables:{createUserInput :{
                ...rest
            }}
        })
        Modal.success({content : "회원가입에 성공했습니다."})
        router.push('/Login')
    } catch(error:any){
        Modal.error({content : error.message})
    }
    }

    return(
       <SignUpPresenter register={register} handleSubmit={handleSubmit} formState={formState} onClickSignUp={onClickSignUp} /> 
    )
}