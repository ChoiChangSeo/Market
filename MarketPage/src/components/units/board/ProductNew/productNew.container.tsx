import ProductNewPresenter from "./productNew.presenter"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { useMutation , gql } from '@apollo/client';
import { Modal } from "antd";
import useAuth from "../../../../commons/HOCS/useAuth";
import { useState, useEffect, MouseEvent } from 'react';
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
            useditemAddress{
                address
                addressDetail
            }
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
            useditemAddress{
                address
                addressDetail
            }
        }
    }
`

const schema = yup.object({
    name:yup.string().required("상품제목은 필수입력입니다."),
    remarks:yup.string().required("상품제목 요약은 필수입력입니다."),
    contents:yup.string().required("상품상세정보는 필수입력입니다."),
    price : yup.number().required("상품가격은 필수입력입니다."),
    useditemAddress:yup.object({
        address:yup.string(),
        addressDetail:yup.string()
    }),
})

const nonSchema = yup.object({
    name:yup.string(),
    remarks:yup.string(),
    contents:yup.string(),
    price : yup.number(),
    useditemAddress:yup.object({
        address:yup.string(),
        addressDetail:yup.string()
    }),
})

interface IProduct{
    name? : string
    remarks?: string
    contents?: string
    price?: number
    tags?: string[]
    useditemAddress?:{
        address?:string 
        addressDetail?: string 
    } 
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
    useditemAddress?:{
        address?:string | undefined
        addressDetail?: string | undefined
    } 
}

export default function ProductNewContainer (props:IProductNewContainer){
useAuth()
const [address,setAddress] = useState("")
const [createUseditem] = useMutation(CREATE_USED_ITEM)
const [updateUseditem] = useMutation(UPDATE_USED_ITEM)
const [isModalVisible, setIsModalVisible] = useState(false);
const [myImage,setMyImage] = useState<string[]>([])
const router = useRouter()
const [hasArr, setHashArr] = useState<string[]>([]);

const onKeyUpHash = (event:any) => {
  if (event.keyCode === 32 && event.target.value !== " ") {
    setHashArr([...hasArr, "#" + event.target.value]);
    event.target.value = "";
  }
};

const DeleteTags = (event:MouseEvent<HTMLSpanElement>) =>  {
    hasArr.splice(Number((event.target as HTMLSpanElement).id),1)
    setHashArr([...hasArr])
}

const {register, handleSubmit, formState, trigger, setValue, reset, getValues} = useForm({
    resolver:yupResolver(props.isEdit? nonSchema : schema),
    mode:"onChange",
})

const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const handleComplete = (data: any) => {
    setIsModalVisible((prev) => !prev);
    setAddress(data.address);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

const onClickProductUpdate = async (data:IUpdate) => {
    const currentFiles = JSON.stringify(myImage);
    const defaultFiles = JSON.stringify(props.data.fetchUseditem.myImage);
    const isChangedFiles = currentFiles !== defaultFiles;
    const updateUseditemInput : IUpdate = {}
    if(data.name) updateUseditemInput.name = data.name
    if(data.remarks) updateUseditemInput.remarks = data.remarks
    if(data.contents) updateUseditemInput.contents = data.contents
    if(data.price) updateUseditemInput.price = data.price
    if(hasArr) updateUseditemInput.tags = hasArr
    if(isChangedFiles) updateUseditemInput.images = myImage
    if(data.useditemAddress?.address || data.useditemAddress?.addressDetail){
        updateUseditemInput.useditemAddress={}
        if(data.useditemAddress?.address) updateUseditemInput.useditemAddress.address = data.useditemAddress.address
        if(data.useditemAddress?.addressDetail) updateUseditemInput.useditemAddress.addressDetail = data.useditemAddress.addressDetail
    }
    
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
    try{
        const result = await createUseditem({
            variables: {
                createUseditemInput:{
                    ...data,images:myImage,tags:hasArr
                }
            }
        })
        Modal.success({ content: "게시물이 작성되었습니다." });
        router.push(`/boards/${result.data?.createUseditem._id}`)
    }catch(error:any){
        Modal.error({ content: error.message });
    }
}   

    useEffect(()=>{
        reset({ contents: props.data?.fetchUseditem?.contents });
    },[props.data])

    useEffect(() => {
        if (props.data?.fetchUseditem?.tags?.length) {
          setHashArr([...props.data?.fetchUseditem?.tags]);
        }
      }, [props.data]);
    
    return(
        <ProductNewPresenter 
        getValues={getValues} 
        handleComplete={handleComplete} 
        showModal={showModal} 
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalVisible={isModalVisible}
        onChangeContents={onChangeContents} 
        myImage={myImage} setMyImage={setMyImage} 
        data={props.data} isEdit={props.isEdit} 
        onClickProductSubmit={onClickProductSubmit} 
        onClickProductUpdate={onClickProductUpdate} 
        register={register} 
        setValue={setValue}
        handleSubmit={handleSubmit} 
        formState={formState}
        address={address}
        onKeyUpHash={onKeyUpHash}
        hasArr={hasArr}
        DeleteTags={DeleteTags}/>
    )
}
