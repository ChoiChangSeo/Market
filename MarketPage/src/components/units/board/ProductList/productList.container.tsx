import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import ProductListPresenter from "./productList.presenter";

const FETCH_USED_ITEMS = gql`
    query fetchUseditems{
        fetchUseditems{
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
const {data} = useQuery(FETCH_USED_ITEMS)
const router = useRouter()

const MoveToDetail = (event:MouseEvent<HTMLImageElement>) =>{
    router.push(`boards/${(event.target as HTMLImageElement).id}`)
}
 return(
    <ProductListPresenter data={data} MoveToDetail={MoveToDetail}/>
 )
}