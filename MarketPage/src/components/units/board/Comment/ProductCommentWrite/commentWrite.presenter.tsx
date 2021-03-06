import * as S from "../ProductCommentWrite/commentWrite.styles"

interface ICommentWritePresenter{
    register:any
    handleSubmit:any
    CommentLength : string
    el?:any
    onClickSubmitComment: (data:any) => void
    onClickUpdateComment: (data:any) => void
    isEdit?:boolean
}

export default function CommentWritePresenter(props:ICommentWritePresenter){
    return(
        <S.Wrapper>
            <form onSubmit={props.isEdit? props.handleSubmit(props.onClickUpdateComment):props.handleSubmit(props.onClickSubmitComment)}>
            <S.QuestionWrapper>
                <S.QuestionFont>{props.isEdit? "수정하기":"문의하기"}</S.QuestionFont>
            </S.QuestionWrapper>
            <S.QuestionTextArea defaultValue={props.el?.contents} {...props.register("contents")}/>
            <S.QuestionSubmitWrapper>
                <S.CommentLength>{props.CommentLength? props.CommentLength.length:0}/100</S.CommentLength>
                <S.SubmitButton>{props.isEdit? "수정하기":"문의하기"}</S.SubmitButton>
            </S.QuestionSubmitWrapper>
            </form>
        </S.Wrapper>
    )
}