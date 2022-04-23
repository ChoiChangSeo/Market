import { gql, useMutation } from '@apollo/client';
import styled from '@emotion/styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { Modal } from 'antd';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';


const CREATE_USEDITEM_QUESTION = gql`
    mutation createUseditemQuestion($createUseditemQuestionInput:CreateUseditemQuestionInput! $useditemId:ID!){
        createUseditemQuestion(createUseditemQuestionInput:$createUseditemQuestionInput, useditemId:$useditemId){
            _id
            contents
            user{
                name
                picture
            }
            createdAt
        }
    }
`
const Wrapper = styled.div`
    width: 1200px;
    height: auto;
`
const QuestionWrapper = styled.div`
    
`
const QuestionFont = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-weight: 500;
    font-size: 18px;
`
const QuestionTextArea = styled.textarea`
    width: 1200px;
    height: 56px;
    resize: none;
`
const QuestionSubmitWrapper = styled.div`
    width: 1200px;
    height: 52px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #BDBDBD;
`
const CommentLength = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-weight: 500;
    font-size: 16px;
    color: #BDBDBD;
`
const SubmitButton = styled.button`
    width: 91px;
    height: 52px;
    background: #000000;
    color: white;
`

const schema = yup.object({
    contents:yup.string().required("상품상세정보는 필수입력입니다.")

})

export default function CommentWriteContainer(){
const router = useRouter()
const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION)
const {register, handleSubmit} = useForm({
    resolver:yupResolver(schema),
    mode:"onChange",
})

const onClickSubmitComment = async(data:any) =>{
    try{
    const result = await createUseditemQuestion({
        variables:{useditemId:router.query.boardId,
            createUseditemQuestionInput:{
            ...data
        }}
    })
    console.log(result)
    Modal.success({content:"게시글 등록에 성공했습니다."})
}catch(error:any){
    Modal.error({content:error.message})
}
}


    return(
        <Wrapper>
            <form onSubmit={handleSubmit(onClickSubmitComment)}>
            <QuestionWrapper>
                <QuestionFont>문의하기</QuestionFont>
            </QuestionWrapper>
            <QuestionTextArea {...register("contents")}/>
            <QuestionSubmitWrapper>
                <CommentLength>0/100</CommentLength>
                <SubmitButton>문의하기</SubmitButton>
            </QuestionSubmitWrapper>
            </form>
        </Wrapper>
    )
}