import InfiniteScroll from "react-infinite-scroller";
import CommentListItem from "./commentListItem";



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
    <CommentListItem key={el._id} el={el} />
    ))}
        </InfiniteScroll>
    </>
    )
}