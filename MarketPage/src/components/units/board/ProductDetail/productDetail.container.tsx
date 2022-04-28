import { gql, useQuery, useMutation } from '@apollo/client';
import { Modal } from 'antd';
import { useRouter } from "next/router";
import { useState, MouseEvent } from 'react';
import ProductDetailPresenter from "./productDetail.presenter";

const FETCH_USED_ITEM = gql`
    query fetchUseditem($useditemId:ID!){
        fetchUseditem(useditemId:$useditemId){
            _id
            name
            remarks
            contents
            price
            tags
            images
            createdAt
            pickedCount
            seller{
                email
            }
            useditemAddress{
                address
                addressDetail
            }
        }
    }
`
const DELETE_USED_ITEM = gql`
    mutation deleteUseditem($useditemId:ID!){
        deleteUseditem(useditemId:$useditemId)
    }
`

const BUY_PRODUCT = gql`
    mutation createPointTransactionOfBuyingAndSelling($useritemId:ID!){
        createPointTransactionOfBuyingAndSelling(useritemId:$useritemId){
            _id
        }
    }
`
const TOGGLE_PICK = gql`
    mutation toggleUseditemPick($useditemId: ID!){
        toggleUseditemPick(useditemId:$useditemId)
    }
`
const FETCH_USER = gql`
  query fetchUserLoggedIn{
    fetchUserLoggedIn{
      _id
      name
      email
    }
  }
`

export default function ProductDetailContainer(){
const router = useRouter()
const [,setIsEdit] = useState(false)
const [deleteUseditem] = useMutation(DELETE_USED_ITEM)
const [toggleUseditemPick] = useMutation(TOGGLE_PICK)
const [createPointTransactionOfBuyingAndSelling] = useMutation(BUY_PRODUCT)
const {data} = useQuery(FETCH_USED_ITEM,{
    variables:{useditemId: router.query.boardId}
})
const {data:UserData} = useQuery(FETCH_USER)

const onClickEdit = () => {
    setIsEdit(true)
    router.push(`/boards/${String(router.query.boardId)}/edit`)
}

const onClickDelete = async () => {
    try{
    await deleteUseditem({
        variables:{useditemId:router.query.boardId}
    })
    Modal.success({content:"게시물을 삭제하였습니다."})
    router.push(`/boards`)
}catch(error:any){
    Modal.error({content: error.message})
}
}
const onClickBuy = async () => {
    try{
    await createPointTransactionOfBuyingAndSelling({
        variables:{useritemId:data.fetchUseditem._id}
    })
    Modal.success({content:"상품 구매에 성공하였습니다."})
    }catch(error:any){
    Modal.error({content:error.message})
    }
}
const onClickPick = async(event:MouseEvent<HTMLImageElement>) => {
    try{
       await toggleUseditemPick({
            variables:{useditemId:data.fetchUseditem._id},
            refetchQueries:[{
                query: FETCH_USED_ITEM,
                variables:{useditemId: router.query.boardId}
            }]
        })
    }catch(error){
        Modal.error({content:error.message})
    }
}
    return(
    <ProductDetailPresenter UserData={UserData} onClickPick={onClickPick} onClickBuy={onClickBuy} onClickDelete={onClickDelete} onClickEdit={onClickEdit} data={data}/>
    )
}