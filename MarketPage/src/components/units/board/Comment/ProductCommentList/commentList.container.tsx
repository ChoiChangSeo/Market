import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { IQuery, IQueryFetchUseditemQuestionsArgs } from '../../../../../commons/types/generated/types';
import CommentListPresenter from './commentList.presenter';

const FETCH_USEDITEM_QUESTION = gql`
    query fetchUseditemQuestions($useditemId: ID! $page:Int){
        fetchUseditemQuestions(useditemId: $useditemId , page:$page){
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



export default function CommentListContainer(){
    const router = useRouter()
    const {data,fetchMore} = useQuery<Pick<IQuery,"fetchUseditemQuestions">,IQueryFetchUseditemQuestionsArgs>(FETCH_USEDITEM_QUESTION,({
        variables:{useditemId:String(router.query.boardId)}
    }))


    const onLoadMore = () =>{
        if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data.fetchUseditemQuestions.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });

    }
    return(
    <CommentListPresenter data={data} onLoadMore={onLoadMore}/>
    )
}