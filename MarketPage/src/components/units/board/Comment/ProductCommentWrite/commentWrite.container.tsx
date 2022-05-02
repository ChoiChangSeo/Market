import { gql, useMutation} from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { Modal } from 'antd';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import CommentWritePresenter from './commentWrite.presenter';


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

const UPDATE_USEDITEM_QUESTION = gql`
    mutation updateUseditemQuestion($updateUseditemQuestionInput:UpdateUseditemQuestionInput! $useditemQuestionId: ID!){
        updateUseditemQuestion(updateUseditemQuestionInput:$updateUseditemQuestionInput, useditemQuestionId:$useditemQuestionId){
            _id
            contents
        }
    }
`
const FETCH_USEDITEM_QUESTION = gql`
  query fetchUseditemQuestions($useditemId: ID!){
    fetchUseditemQuestions(useditemId: $useditemId){
      _id
      contents
    }
  }
`

const schema = yup.object({
    contents:yup.string().required("상품상세정보는 필수입력입니다.")

})

interface ICommentWriteContainer{
    el?:any
    setIsEdit? : any
    isEdit? : boolean
}

export default function CommentWriteContainer(props:ICommentWriteContainer){
const router = useRouter()
const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION)
const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION)
const {register, handleSubmit} = useForm({
    resolver:yupResolver(schema),
    mode:"onChange",
})

const onClickSubmitComment = async(data:any) =>{
    try{
       await createUseditemQuestion({
        variables:{useditemId:router.query.boardId,
            createUseditemQuestionInput:{
            ...data
        }},
        refetchQueries : [{
            query: FETCH_USEDITEM_QUESTION,
            variables:{ useditemId : router.query.boardId}
        }]
    })
    Modal.success({content:"게시글 등록에 성공했습니다."})
}catch(error:any){
    Modal.error({content:error.message})
}
}

const onClickUpdateComment = async(data:any) => {
    try{
    await updateUseditemQuestion({
        variables:{ useditemQuestionId: props.el._id,
            updateUseditemQuestionInput:{   
                ...data
        }},
        refetchQueries : [{
            query: FETCH_USEDITEM_QUESTION,
            variables:{ useditemId : router.query.boardId}
        }]
    })
    Modal.success({content:"댓글 수정에 성공했습니다."})
    props.setIsEdit?.(false)
    }catch(error:any){
        Modal.error({content:error.message})
    }
}

    return(
  <CommentWritePresenter el={props.el} isEdit={props.isEdit} register={register} handleSubmit={handleSubmit} onClickSubmitComment={onClickSubmitComment} onClickUpdateComment={onClickUpdateComment}/>
    )
}