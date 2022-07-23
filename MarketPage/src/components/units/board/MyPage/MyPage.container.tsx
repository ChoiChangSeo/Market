import { gql, useQuery, useMutation } from '@apollo/client';
import { ChangeEvent, useRef, useState } from 'react';
import MyPagePresenter from "./MyPage.presenter";




const FETCH_USER = gql`
   query fetchUserLoggedIn{
       fetchUserLoggedIn{
           picture
           name
           userPoint{
               amount
           }
       }
   }
`
const FETCH_PIKED = gql`
    query fetchUseditemsIPicked($search:String,$page:Int){
        fetchUseditemsIPicked(search:$search page:$page){
            _id
            name
            price
            images
        }
    }
`
const UPDATE_USER = gql`
    mutation updateUser($updateUserInput:UpdateUserInput!){
        updateUser(updateUserInput:$updateUserInput){
            email
        }
    }
`

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function MyPageContainer () {
 const {data} = useQuery(FETCH_USER)
 const {data:PickData} = useQuery(FETCH_PIKED,({
     variables:{search:"",page:1}
 }))
 const fileRef = useRef<HTMLInputElement>(null)
 const [file, setFile] = useState<File>();
 const [imgUrl, setImgUrl] = useState("");
 const [uploadFile] = useMutation(UPLOAD_FILE);
 const [isModalVisible, setIsModalVisible] = useState(false);
 const [updateUser] = useMutation(UPDATE_USER)

 console.log(PickData)
 const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return alert("파일이 없습니다.");
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImgUrl(data.target?.result);
        setFile(file);
      }
    };

  };

  const onClickImg = () =>{
    fileRef.current?.click()

  }
 const showModal = () => {
    setIsModalVisible(true);
  };
  
  const handleCancel = () => {
    setIsModalVisible(false);
  };

 const onClickUpdateUser = async() => {
    const result1 = await uploadFile({
        variables: { file },
      });
      const imageUrl = result1.data.uploadFile.url
    const result2 = await updateUser({
        variables:{updateUserInput:{
            name:"철수",
            picture: imageUrl
        }}
    })
    setIsModalVisible(false);
    console.log(result2)
 }
    return(
        <MyPagePresenter 
        onClickUpdateUser={onClickUpdateUser} 
        handleCancel={handleCancel} 
        showModal={showModal}
        onChangeFile={onChangeFile}
        onClickImg={onClickImg}
        fileRef={fileRef}
        imgUrl={imgUrl}
        isModalVisible={isModalVisible}
        data={data} 
        PickData={PickData}/>
        )
}