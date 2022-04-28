import ReplyWritePresenter from "./ReplyWrite.presenter";
import { gql, useMutation } from '@apollo/client';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";

const CREATE_USEDITEM_ANSWER = gql`
    mutation createUseditemQuestionAnswer($createUseditemQuestionAnswerInput:CreateUseditemQuestionAnswerInput!,$useditemQuestionId: ID!){
        createUseditemQuestionAnswer(createUseditemQuestionAnswerInput:$createUseditemQuestionAnswerInput,useditemQuestionId:$useditemQuestionId){
            _id
            contents
            user{
                _id
                name
                picture
            }
            createdAt
        }
    }
`

const UPDATE_QUESTION_ANSWER = gql`
    mutation updateUseditemQuestionAnswer($updateUseditemQuestionAnswerInput:UpdateUseditemQuestionAnswerInput! , $useditemQuestionAnswerId: ID!){
        updateUseditemQuestionAnswer(updateUseditemQuestionAnswerInput:$updateUseditemQuestionAnswerInput,useditemQuestionAnswerId:$useditemQuestionAnswerId){
            _id
            contents
        }
    }
`

const FETCH_ANSWERS = gql`
    query fetchUseditemQuestionAnswers($useditemQuestionId: ID!){
        fetchUseditemQuestionAnswers(useditemQuestionId: $useditemQuestionId){
            _id
        }
    }
`

const schema = yup.object({
    contents:yup.string().required("댓글내용은 필수입력입니다.")

})

interface IReplyWriteContainer{
    el?:any
    setReplyIsSub?:any
    al?:any
    setReplyEdit?:any
    replyEdit?:boolean
}

export default function ReplyWriteContainer(props:IReplyWriteContainer){
    const [createUseditemQuestionAnswer] = useMutation(CREATE_USEDITEM_ANSWER)
    const [updateUseditemQuestionAnswer] = useMutation(UPDATE_QUESTION_ANSWER)
    
    const {register, handleSubmit} = useForm({
        resolver:yupResolver(schema),
        mode:"onChange",
    })

    const ReplySubmit = async(data:any) => {
        try{
                await createUseditemQuestionAnswer({
                variables:{createUseditemQuestionAnswerInput:{
                    ...data
                }, useditemQuestionId: props.el._id},
                refetchQueries:[{
                    query: FETCH_ANSWERS,
                    variables : {useditemQuestionId:props.el._id}
                }]
            })
            props.setReplyIsSub?.(false)
            Modal.success({content:"댓글달기에 성공하였습니다."})
        }catch(error){

        }
    }

    const ReplyUpdate = async(data:any)=>{
        try{
            await updateUseditemQuestionAnswer({
                variables:{updateUseditemQuestionAnswerInput:{...data},useditemQuestionAnswerId:props.al._id}
            })
            props.setReplyEdit?.(true)
            Modal.success({content:"대댓글 수정에 성공했습니다."})
        }catch(error:any){
            Modal.error({content:error.message})
        }
    }

    return (
        <ReplyWritePresenter ReplyUpdate={ReplyUpdate} replyEdit={props.replyEdit} ReplySubmit={ReplySubmit} register={register} handleSubmit={handleSubmit}/>
    )
}