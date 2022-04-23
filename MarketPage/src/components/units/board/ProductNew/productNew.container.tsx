import ProductNewPresenter from "./productNew.presenter"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { useMutation , gql } from '@apollo/client';
import { Modal } from "antd";
import useAuth from "../../../../commons/HOCS/useAuth";
import { useState } from "react";
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../../../commons/store/index';
import { useRouter } from "next/router";



const CREATE_USED_ITEM = gql`
    mutation createUseditem($createUseditemInput:CreateUseditemInput!){
        createUseditem(createUseditemInput:$createUseditemInput){
            _id
            name
            remarks
            contents
            price
            tags
            images
        }
    }
`
const UPDATE_USED_ITEM = gql`
    mutation updateUseditem($updateUseditemInput:UpdateUseditemInput!,$useditemId:ID!){
        updateUseditem(updateUseditemInput:$updateUseditemInput,useditemId:$useditemId){
            _id
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

const schema = yup.object({
    name:yup.string().required("상품제목은 필수입력입니다."),
    remarks:yup.string().required("상품제목 요약은 필수입력입니다."),
    contents:yup.string().required("상품상세정보는 필수입력입니다."),
    price : yup.number().required("상품가격은 필수입력입니다."),
    tags: yup.array().of(yup.string()).nullable()
})

const nonSchema = yup.object({
    name:yup.string(),
    remarks:yup.string(),
    contents:yup.string(),
    price : yup.number(),
    tags: yup.array().of(yup.string()).nullable()
})

interface IProduct{
    name? : string
    remarks?: string
    contents?: string
    price?: number
    tags?: string[]
}

interface IProductNewContainer{
    isEdit:boolean
    data?:any
}
interface IUpdate{
    name? : string
    remarks?: string
    contents? : string
    price? : number
    tags? : string[]
    images? : string[]
}

export default function ProductNewContainer (props:IProductNewContainer){
useAuth()
console.log(props.data)
const [userInfo] = useRecoilState(userInfoState);
const [createUseditem] = useMutation(CREATE_USED_ITEM)
const [updateUseditem] = useMutation(UPDATE_USED_ITEM)
const [myImage,setMyImage] = useState<string[]>([])
const router = useRouter()
const {register, handleSubmit, formState} = useForm({
    resolver:yupResolver(props.isEdit? nonSchema : schema),
    mode:"onChange",
    defaultValues: {},
})
// console.log(userInfo)

const onClickProductUpdate = async (data:IProduct) => {
    const currentFiles = JSON.stringify(myImage);
    const defaultFiles = JSON.stringify(props.data.fetchUseditem.myImage);
    const isChangedFiles = currentFiles !== defaultFiles;
    const updateUseditemInput : IUpdate = {}
    if(data.name) updateUseditemInput.name = data.name
    if(data.remarks) updateUseditemInput.remarks = data.remarks
    if(data.contents) updateUseditemInput.contents = data.contents
    if(data.price) updateUseditemInput.price = data.price
    if(data.tags) updateUseditemInput.tags = data.tags
    if(isChangedFiles) updateUseditemInput.images = myImage
    try{
        await updateUseditem({
            variables:{
                useditemId : String(router.query.boardId),
                updateUseditemInput
            }
        })
        Modal.success({ content: "게시물이 수정되었습니다." });
      router.push(`/boards/${String(router.query.boardId)}`);
    }catch (error: any) {
        Modal.error({ content: error.message });
      }
}

const onClickProductSubmit = async (data:IProduct) => {
    console.log(userInfo)
    // console.log(data)
    try{
        const result = await createUseditem({
            variables: {
                createUseditemInput:{
                    ...data,images:myImage
                }
            }
        })

        console.log(result)
        Modal.success({ content: "게시물이 작성되었습니다." });
        router.push(`/boards/${result.data?.createUseditem._id}`)
    }catch(error:any){
        Modal.error({ content: error.message });
    }
}

    return(
        <ProductNewPresenter myImage={myImage} setMyImage={setMyImage} data={props.data} isEdit={props.isEdit} onClickProductSubmit={onClickProductSubmit} onClickProductUpdate={onClickProductUpdate} register={register} handleSubmit={handleSubmit} formState={formState}/>
    )
}
