import UploadFile from '../../../commons/UploadFile/uploadfile'
import * as S from '../ProductNew/prodcutNew.styles'
import "react-quill/dist/quill.snow.css";
import dynamic from 'next/dynamic';
import { Modal } from 'antd';
import DaumPostcode from 'react-daum-postcode';
import KakaoMap from '../../../commons/Map';


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
}

export default function ProductNewPresenter (props:IProductNewPresenter){

    return(
        <S.Wrapper>
            <form onSubmit={props.handleSubmit(props.isEdit? props.onClickProductUpdate : props.onClickProductSubmit)}>
            <S.Title>{props.isEdit? "상품수정하기" : "상품등록하기"}</S.Title>
            <S.ProductNameWrapper>
                    <S.NameInput defaultValue={props.data?.fetchUseditem.name} {...props.register("name")} placeholder="상품명을 입력해주세요" />
                    <S.RemarksInput defaultValue={props.data?.fetchUseditem.remarks} {...props.register("remarks")} placeholder="상품명을 한줄요약해주세요"/>
            </S.ProductNameWrapper>
            <ReactQuill onChange={props.onChangeContents} style={{margin:"0px 0px 80px 0px" ,width:"996px", height:"320px" , border:"1px solid #BDBDBD"}} value={props.getValues("contents") || ""} placeholder="상품을 설명해주세요"/>
            <S.ProductPriceTagWrapper>
                <S.ProductPriceInput type="number" defaultValue={props.data?.fetchUseditem.price} {...props.register("price")} placeholder="판매 가격을 입력해주세요"/>
                <S.ProductTag defaultValue={props.data?.fetchUseditem.tags} {...props.register("tags")} placeholder='#태그 #태그 #태그'/>
            </S.ProductPriceTagWrapper>
            <S.LocationWrapper>
                <S.Location>
                    <S.LocationFont>거래위치</S.LocationFont>
                    <S.LocationMap>
                        <KakaoMap data={props.data} isEdit={props.isEdit} address={props.address}/>
                    </S.LocationMap>
                </S.Location>
                <S.GPSWrapper>
                    <S.AddressWrapper>
                        <S.AddressFont>주소</S.AddressFont>
                        <S.AddressInput readOnly onChange={props.setValue("useditemAddress.address",props.address)} value={props.address? props.address : props.data?.fetchUseditem.useditemAddress?.address}/>
                        <S.AddressDetailInput {...props.register("useditemAddress.addressDetail")} defaultValue={props.data?.fetchUseditem.useditemAddress?.addressDetail}/>
                        <S.AddressButton type='button' onClick={props.showModal}>주소찾기</S.AddressButton>
                    </S.AddressWrapper>
                </S.GPSWrapper>
            </S.LocationWrapper>
            <S.ImageWrapper>
                <S.ImageFont>사진첨부</S.ImageFont>
                <UploadFile data={props.data} myImage={props.myImage} setMyImage={props.setMyImage}/>
            </S.ImageWrapper>
            <S.MainImageSelectWrapper>
                <S.MainImgFont>메인사진설정</S.MainImgFont>
            </S.MainImageSelectWrapper>
            <div>{props.formState.errors.name?.message}
            {props.formState.errors.contents?.message}
            {props.formState.errors.tags?.message}
            {props.formState.errors.remarks?.message}
            {props.formState.errors.price?.message}
            </div>
            <S.SubmitButton>{props.isEdit? "수정하기" : "등록하기"}</S.SubmitButton>
            </form>
            {props.isModalVisible && (
          <Modal 
            visible={true}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
          >
            <DaumPostcode onComplete={props.handleComplete} />
          </Modal>
        )}
        </S.Wrapper>
    )
}