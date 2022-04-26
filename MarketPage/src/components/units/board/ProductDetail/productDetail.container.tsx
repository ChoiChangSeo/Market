import { gql, useQuery, useMutation } from '@apollo/client';
import { Modal } from 'antd';
import { useRouter } from "next/router";
import { useState } from "react";
import ProductDetailPresenter from "./productDetail.presenter";

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


export default function ProductDetailContainer(){
const router = useRouter()
const [,setIsEdit] = useState(false)
const [deleteUseditem] = useMutation(DELETE_USED_ITEM)
const {data} = useQuery(FETCH_USED_ITEM,{
    variables:{useditemId: router.query.boardId}
})

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
    return(
    <ProductDetailPresenter onClickDelete={onClickDelete} onClickEdit={onClickEdit} data={data}/>
    )
}