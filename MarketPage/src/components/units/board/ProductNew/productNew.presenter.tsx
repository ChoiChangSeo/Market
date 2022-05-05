import UploadFile from '../../../commons/UploadFile/uploadfile'
import * as S from '../ProductNew/prodcutNew.styles'
import "react-quill/dist/quill.snow.css";
import dynamic from 'next/dynamic';
import { Modal } from 'antd';
import DaumPostcode from 'react-daum-postcode';
import KakaoMap from '../../../commons/Map';
import { MouseEvent } from 'react';


const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface IProductNewPresenter{
    onClickProductSubmit : (data:any) => void
    onClickProductUpdate : (data:any) => void
    onChangeContents : (value: string) => void
    showModal : any
    isModalVisible : boolean
    handleOk : any
    handleCancel : any
    handleComplete : any
    getValues:any
    setValue:any
    register : any
    handleSubmit : any
    formState : any
    isEdit?:boolean
    data?:any
    myImage: string[]
    setMyImage : any
    address:string
    hasArr:string[]
    onKeyUpHash: (event:any) => void
    DeleteTags: (event:MouseEvent<HTMLSpanElement>) => void
}

export default function ProductNewPresenter (props:IProductNewPresenter){
    const toolbarOptions = [[{ header: [1, 2, 3, false] }], [{
        'size':  ['10px', '12px', '14px','16px','18px','20px','24px','26px','32px','48px'] }], 
       ["bold", "italic", "underline", "strike"], ["blockquote"], [{ list: "ordered" }, { list: "bullet" }], [{ color: [] }, { background: [] }], [{ align: [] }], ];
    const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "align",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "background",
        "color",
        "link",
        "image",
        "video",
        "width",
      ];
      
      const modules = {
        toolbar: {
          container: toolbarOptions,
        },
      };
      
      
    return(
        <S.Form onSubmit={props.handleSubmit(props.isEdit? props.onClickProductUpdate : props.onClickProductSubmit)}>
                        <S.Title>{props.isEdit? "상품수정하기" : "상품등록하기"}</S.Title>
            <S.ProductNameWrapper>
                    <S.NameInput defaultValue={props.data?.fetchUseditem.name} {...props.register("name")} placeholder="상품명을 입력해주세요" />
                    <S.NameInputError>{props.formState.errors.name?.message}</S.NameInputError>
                    <S.RemarksInput defaultValue={props.data?.fetchUseditem.remarks} {...props.register("remarks")} placeholder="상품명을 한줄요약해주세요"/>
                    <S.RemarkInputError>{props.formState.errors.remarks?.message}</S.RemarkInputError>
                    <S.SpanWrapper>
          {props.hasArr.map((el:any, idex:any) => (
            <S.Span onClick={props.DeleteTags} id={idex} key={idex}>{el}</S.Span>
          ))}
        </S.SpanWrapper>
                <S.ProductTag onKeyUp={props.onKeyUpHash} placeholder='#태그 #태그 #태그'/>
            </S.ProductNameWrapper>
            <S.ProductContentsWrapper>
                <ReactQuill modules={modules} formats={formats} onChange={props.onChangeContents} style={{width:"96%", height:"20vh"}} value={props.getValues("contents") || ""} placeholder="상품을 설명해주세요"/>
                <S.ContentsInputError>{props.formState.errors.contents?.message}</S.ContentsInputError>
            </S.ProductContentsWrapper>
            <S.ProductPriceTagWrapper>
                <S.ProductPriceInput type="number" defaultValue={props.data?.fetchUseditem.price} {...props.register("price")} placeholder="판매 가격을 입력해주세요"/>
                <S.PriceError>{props.formState.errors.price?.message}</S.PriceError>
            </S.ProductPriceTagWrapper>
            <S.LocationWrapper>
                <S.Location>
                    <S.LocationFont>거래위치</S.LocationFont>
                    <S.LocationMap>
                        <KakaoMap data={props.data} address={props.address}/>
                    </S.LocationMap>
                </S.Location>
                <S.GPSWrapper>
                    <S.AddressWrapper>
                        <S.AddressFont>주소</S.AddressFont>
                        <S.AddressInput readOnly onChange={props.setValue("useditemAddress.address",props.address)} value={props.address? props.address : props.data?.fetchUseditem.useditemAddress?.address || ""}/>
                        <S.AddressDetailInput {...props.register("useditemAddress.addressDetail")} defaultValue={props.data?.fetchUseditem.useditemAddress?.addressDetail || ""}/>
                        <S.AddressButton type='button' onClick={props.showModal}>주소찾기</S.AddressButton>
                    </S.AddressWrapper>
                </S.GPSWrapper>
            </S.LocationWrapper>
            <S.ImageWrapper>
                <S.ImageFont>사진첨부</S.ImageFont>
                <UploadFile data={props.data} myImage={props.myImage} setMyImage={props.setMyImage}/>
            </S.ImageWrapper>
            <S.ButtonWrapper>
                <S.SubmitButton>{props.isEdit? "수정하기" : "등록하기"}</S.SubmitButton>
            </S.ButtonWrapper>
            {props.isModalVisible && (
          <Modal 
            visible={true}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
          >
            <DaumPostcode onComplete={props.handleComplete} />
          </Modal>
        )}
        </S.Form>
    )
}