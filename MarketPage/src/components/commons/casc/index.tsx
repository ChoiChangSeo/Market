
import styled from "@emotion/styled";
import { useRef, ChangeEvent } from 'react';
import { Modal } from "antd";
import { gql , useMutation } from "@apollo/client";

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
  `
  const Button = styled.button`
    width: 100px;
    height: 100px;
    border: 1px solid red;
  `

  interface IUploadFile {
    myImage?: any
    setMyImage: any
  }

export default function UploadFile(props:IUploadFile) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const addImage = async (event:ChangeEvent<HTMLInputElement>) =>{
    const file:null|any = event.target.files
    const files=event.target.files?.[0]
    let ImageURLList = [...props.myImage]
    try{
      const result = await uploadFile({
        variables:{file:files}
      })
      console.log(result.data?.uploadFile.url)
    } catch(error){
      if(error instanceof Error) Modal.error({content:error.message})
    }
    console.log(files)
    
    for(let i=0; i<file.length; i++){
      const ImageUrl = URL.createObjectURL(file[i])
      ImageURLList.push(ImageUrl)
    }
    if(ImageURLList.length>5){
      ImageURLList = ImageURLList.slice(0,5)
    }
    props.setMyImage(ImageURLList)
    console.log(props.myImage)
  }

  const onClickImg = () =>{
    fileRef.current?.click()

  }
  
  return (
    <Wrapper>
        <Button type="button" onClick={onClickImg}>이미지등록</Button>
        <InputImage ref={fileRef} style={{display:"none"}} type="file" onChange={addImage} multiple accept=".jpg,.jpeg,.png"/>
      {props.myImage.map((image:any ,index:any)=>(
         <Img key={index} src={image}/>
      ))}
     
    </Wrapper>
  );
}