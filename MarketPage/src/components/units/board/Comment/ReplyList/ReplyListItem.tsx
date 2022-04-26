import { gql, useMutation} from '@apollo/client'
import { Modal } from 'antd'
import { MouseEvent, useState } from 'react'
import * as S from '../ReplyList/ReplyList.stylse'
import ReplyWriteContainer from '../ReplyWrite/ReplyWrite.container'

interface IReplyListItem{
    al:any
    el?:any
}

const DELETE_ANSWER = gql`
    mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!){
        deleteUseditemQuestionAnswer(useditemQuestionAnswerId:$useditemQuestionAnswerId)
    }
`
const FETCH_ANSWERS = gql`
    query fetchUseditemQuestionAnswers($useditemQuestionId: ID!){
        fetchUseditemQuestionAnswers(useditemQuestionId: $useditemQuestionId){
            _id
        }
    }
`

export default function ReplyListItem (props:IReplyListItem){
    const [replyEdit,setReplyEdit] = useState(false)
    const [deleteUseditemQuestionAnswer] = useMutation(DELETE_ANSWER)

    const onClickReplyEdit = () =>{
        setReplyEdit(true)    
    }
    const onClickDelete = async(event:MouseEvent<HTMLImageElement>) =>{
        try{
            await deleteUseditemQuestionAnswer({
                variables:{useditemQuestionAnswerId:(event.target as HTMLImageElement).id},
                refetchQueries:[{
                    query : FETCH_ANSWERS,
                    variables:{useditemQuestionId:props.el._id}
                }] 
            })
            Modal.success({content:"대댓글 삭제에 성공했습니다."})
        }catch(error:any){
            Modal.error({content:error.message})
        }
    }
    return(
        <>
        {replyEdit === false &&(
        <S.Row key={props.al._id}>
        <S.NameContentsWrapper>
            <S.ReplyArrow src="/ReplyArrow.png"/>
            <S.Picture src={props.al.user.picture}/>
            <S.Column>
                <S.Name>{props.al.user.name}</S.Name>
                <S.Contents>{props.al.contents}</S.Contents>
            </S.Column>
        </S.NameContentsWrapper>
        <S.ReplyButton>
            <S.ReplyEdit onClick={onClickReplyEdit} src="/replyedit.png"/>
            <S.ReplyDel id={props.al._id} src="/replydel.png" onClick={onClickDelete} />
        </S.ReplyButton>
    </S.Row>
    )}
    {replyEdit === true &&(
        <ReplyWriteContainer al={props.al} setReplyEdit={setReplyEdit} replyEdit={true}/>
    )}
    </>
    )
}