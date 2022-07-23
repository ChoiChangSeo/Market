
import styled from "@emotion/styled";
import { useRef, ChangeEvent, useEffect, MouseEvent } from 'react';
import { Modal } from "antd";
import { gql , useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const Wrapper = styled.div`
    width: 100%;
  `;
  const InputImage = styled.input`
    border: 1px solid red;
  `
  const Img = styled.img`
    width: 100px;
    height: 100px;
    margin-left: 2%;
    border: 3px solid #F2522E;
    border-radius: 15px;
  `
  const Button = styled.button`
    width: 100px;
    height: 100px;
    font-size: 16px;
  `

  interface IUploadFile {
    myImage?: any
    setMyImage: any
    data?:any
  }

export default function UploadFile(props:IUploadFile) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  // const [myImage,setMyImage] = useRecoilState(setMyImageState)

  const addImage = (event:ChangeEvent<HTMLInputElement>) =>{
    const file:null|any = event.target.files
    const ImageURLList = [...file]
    ImageURLList.map(async (el:any) =>{
    try{
        const result = await uploadFile({
          variables:{file : el}
        })
        props.setMyImage((prev:string[]) =>[...prev ,result.data.uploadFile.url])
      }catch(error){
        if(error instanceof Error) Modal.error({content:error.message})
      }
    })
  }
  
  const onClickImg = () =>{
    fileRef.current?.click()

  }
  const deleteImage = (event:MouseEvent<HTMLImageElement>) => {
    props.myImage.splice((event.target as HTMLImageElement).id, 1)
    props.setMyImage([...props.myImage])
  }

  useEffect(() => {
    if(props.data?.fetchUseditem.images?.length){
      props.setMyImage([...props.data?.fetchUseditem.images])
    }
  },[props.data])
  
 
  return (
    <Wrapper>
        <Button type="button" onClick={onClickImg}>이미지등록</Button>
        <InputImage ref={fileRef} style={{display:"none"}} type="file" onChange={addImage} multiple accept=".jpg,.jpeg,.png"/>
      {props.myImage.map((image:any ,index:any)=>(
         <Img key={uuidv4()} id={index} onClick={deleteImage}  src={`https://storage.googleapis.com/${image}`}/>
      ))}
     
    </Wrapper>
  );
}