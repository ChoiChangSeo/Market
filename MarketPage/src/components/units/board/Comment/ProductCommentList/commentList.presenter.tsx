import InfiniteScroll from "react-infinite-scroller";
import CommentListItem from "./commentListItem";
import styled from '@emotion/styled';



interface ICommentListPresenter{
    data?:any
    onLoadMore: () => void
}
const Wrapper = styled.div`
    width: 56%;
`

export default function CommentListPresenter(props:ICommentListPresenter){
    return(
    <Wrapper>
     <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
    {props.data?(props.data?.fetchUseditemQuestions.map((el:any) =>(
    <CommentListItem data={props.data} key={el._id} el={el} />
    ))):(<div></div>)}
        </InfiniteScroll>
    </Wrapper>
    )
}