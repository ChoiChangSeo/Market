import * as S from '../ReplyWrite/ReplyWrite.styles'

interface IReplyWritePresenter{
    handleSubmit: any
    register: any
    ReplySubmit : (data:any) => void
    ReplyUpdate: (data:any) => void
    replyEdit?: boolean
}

export default function ReplyWritePresenter(props:IReplyWritePresenter){
    return (
        <S.Wrapper>
            <S.ReplyArrow src='/ReplyArrow.png'/>
            <form onSubmit={props.handleSubmit(props.replyEdit? props.ReplyUpdate : props.ReplySubmit)}>
            <S.QuestionTextArea {...props.register("contents")}/>
            <S.QuestionSubmitWrapper>
                <S.CommentLength>0/100</S.CommentLength>
                <S.SubmitButton>{props.replyEdit? "수정하기" : "댓글달기"}</S.SubmitButton>
            </S.QuestionSubmitWrapper>
            </form>
        </S.Wrapper>
    )
}
       