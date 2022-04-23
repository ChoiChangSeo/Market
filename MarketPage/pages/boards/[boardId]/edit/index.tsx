import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductNewContainer from "../../../../src/components/units/board/ProductNew/productNew.container";

const FETCH_USED_ITEM = gql`
    query fetchUseditem($useditemId:ID!){
        fetchUseditem(useditemId:$useditemId){
            name
            remarks
            contents
            price
            tags
            images
            createdAt
        }
    }
`


export default function BoardEditPage() {
  const router = useRouter();
  const {data} = useQuery(FETCH_USED_ITEM,{
    variables:{useditemId: router.query.boardId}
})
    

  return (
    <>
    <ProductNewContainer data={data} isEdit={true}/>
    </>
  );
}
