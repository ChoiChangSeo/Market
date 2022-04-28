import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import ProductListPresenter from "./productList.presenter";
import { IQuery, IQueryFetchUseditemsArgs, IBoard } from '../../../../commons/types/generated/types';

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
const [basketItems, setBasketItems] = useState([]);

const newDate = new Date();
const yyyy = newDate.getFullYear();
const mm = newDate.getMonth() + 1;
const dd = newDate.getDate();
const Today = `${yyyy}-${mm}-${dd}`

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

const onClickBasket = (el:IBoard) => (event:MouseEvent<HTMLDivElement>) => {
  const baskets = JSON.parse(localStorage.getItem(Today) || "[]");

  const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
  if (temp.length === 1) {
    return alert("이미 담으신 게시글입니다.");
  }
  const { __typename, ...rest } = el;
  baskets.push(rest);
  localStorage.setItem(Today, JSON.stringify(baskets)); 
}

useEffect(() => {
  const Day = JSON.parse(localStorage.getItem(Today) || "[]");
  setBasketItems(Day);
},[]);

 return(
    <ProductListPresenter 
    data={data} 
    onLoadMore={onLoadMore} 
    MoveToDetail={MoveToDetail}
    onClickBasket = {onClickBasket}
    basketItems={basketItems}/>
 )
}