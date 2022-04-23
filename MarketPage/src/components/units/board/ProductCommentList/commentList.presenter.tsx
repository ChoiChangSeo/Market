import InfiniteScroll from "react-infinite-scroller";
import * as S from "../ProductCommentList/commentList.styles"
import { getDate } from "../../../../commons/libraries/utils";


interface ICommentListPresenter{
    data?:any
    onLoadMore: () => void
}

export default function CommentListPresenter(props:ICommentListPresenter){

    return(
    <>
     <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
         {props.data?.fetchUseditemQuestions.map((el:any) =>(
    <S.Wrapper key={el._id}>
        <S.ContentsWrapper>
            <S.UserImg src = {el.user.picture}/>
            <S.UserInfoWrapper>
                <S.UserName>{el.user.name}</S.UserName>
                <S.Contents>{el.contents}</S.Contents>
                <S.CreatedAt>{getDate(el.createdAt)}</S.CreatedAt>
            </S.UserInfoWrapper>
        </S.ContentsWrapper>
        <S.EditDelButton>
            <S.ReplyEdit src="/replyedit.png"/>
            <S.ReplyDel src="/replydel.png"/>
        </S.EditDelButton>
    </S.Wrapper>
    ))}
        </InfiniteScroll>
    </>
    )
}