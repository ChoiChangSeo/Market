import * as S from "./commentList.styles"
import {getDate} from "../../../../../commons/libraries/utils"
import CommentWriteContainer from "../ProductCommentWrite/commentWrite.container";
import { MouseEvent, useState } from 'react';
import { gql, useMutation} from '@apollo/client';
import { useRouter } from "next/router";
import ReplyWriteContainer from "../ReplyWrite/ReplyWrite.container";
import ReplyListContainer from "../ReplyList/ReplyList.container";

interface ICommentListItem{
    el:any
    data?:any
}

const FETCH_USEDITEM_QUESTION = gql`
  query fetchUseditemQuestions($useditemId: ID!){
    fetchUseditemQuestions(useditemId: $useditemId){
      _id
    }
  }
`

const DELETE_USEDITEM_QUESTION = gql`
   mutation deleteUseditemQuestion($useditemQuestionId:ID!){
    deleteUseditemQuestion(useditemQuestionId:$useditemQuestionId)
   }
`
 
export default function CommentListItem(props:ICommentListItem){
    const router = useRouter()
    const [isEdit,setIsEdit] = useState(false)
    const [replyIsSub,setReplyIsSub] = useState(false)
    const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION)
    const onClickEdit = (event:MouseEvent<HTMLImageElement>) => {
        setIsEdit(true)
      }
      const onClickReply = (event:MouseEvent<HTMLImageElement>) => {
        setReplyIsSub(true)
      }
    const onClickDeleteComment = async(event:MouseEvent<HTMLImageElement>) => {
        await deleteUseditemQuestion({
            variables:{useditemQuestionId : (event.target as HTMLImageElement).id},
            refetchQueries:[{
                query : FETCH_USEDITEM_QUESTION,
                variables : {useditemId : router.query.boardId}
            }]
        })
    }

    return(
        <>
        {isEdit === false &&(
        <S.Wrapper key={props.el._id}>
        <S.Row>
            <S.ContentsWrapper>
                <S.UserImg src = {props.el.user.picture}/>
                <S.UserInfoWrapper>
                    <S.UserName>{props.el.user.name}</S.UserName>
                    <S.Contents>{props.el.contents}</S.Contents>
                    <S.CreatedAt>{getDate(props.el.createdAt)}</S.CreatedAt>
                </S.UserInfoWrapper>
            </S.ContentsWrapper>
            <S.EditDelButton>
                <S.ReplyEdit src="/replyedit.png" onClick={onClickEdit}/>
                <S.ReplyDel id={props.el._id} src="/replydel.png" onClick={onClickDeleteComment}/>
                <S.Reply src="/replyreply.png" onClick={onClickReply}/>
            </S.EditDelButton>
        </S.Row>
        <S.ReplyWrapper>
        {(replyIsSub === true &&
        <ReplyWriteContainer setReplyIsSub={setReplyIsSub} el={props.el}/>
    )}
        <ReplyListContainer el={props.el}/>
    </S.ReplyWrapper>
    </S.Wrapper>
    )}
    {isEdit === true &&(
        <CommentWriteContainer isEdit={true} setIsEdit={setIsEdit} el={props.el}/>
    )}
    </>
    )
}