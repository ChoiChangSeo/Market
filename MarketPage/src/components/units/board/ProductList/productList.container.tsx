import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import ProductListPresenter from "./productList.presenter";
import { IQuery, IQueryFetchUseditemsArgs } from '../../../../commons/types/generated/types';

const FETCH_USED_ITEMS = gql`
    query fetchUseditems($page:Int){
        fetchUseditems(page:$page){
            _id
            name
            remarks
            price
            tags
            images
            pickedCount
        }
    }
`

export default function ProductListContainer(){
const {data,fetchMore} = useQuery<Pick<IQuery,"fetchUseditems">,IQueryFetchUseditemsArgs>(FETCH_USED_ITEMS)
const router = useRouter()

const MoveToDetail = (event:MouseEvent<HTMLImageElement>) =>{
    router.push(`boards/${(event.target as HTMLImageElement).id}`)
}

const onLoadMore = () =>{
    if (!data) return;
fetchMore({
  variables: { page: Math.ceil(data.fetchUseditems.length / 10) + 1 },
  updateQuery: (prev, { fetchMoreResult }) => {
    if (!fetchMoreResult?.fetchUseditems)
      return { fetchUseditems: [...prev.fetchUseditems] };
    return {
      fetchUseditems: [
        ...prev.fetchUseditems,
        ...fetchMoreResult.fetchUseditems,
      ],
    };
  },
});
}
 return(
    <ProductListPresenter data={data} onLoadMore={onLoadMore} MoveToDetail={MoveToDetail}/>
 )
}