import UploadFile from '../../../commons/UploadFile/uploadfile'
import * as S from '../ProductNew/prodcutNew.styles'

interface IProductNewPresenter{
    onClickProductSubmit : (data:any) => void
    onClickProductUpdate : (data:any) => void
    register : any
    handleSubmit : any
    formState : any
    isEdit?:boolean
    data?:any
    myImage: string[]
    setMyImage : any
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
            <S.ProductDetail defaultValue={props.data?.fetchUseditem.contents} {...props.register("contents")} placeholder="상품을 설명해주세요"/>
            <S.ProductPriceTagWrapper>
                <S.ProductPriceInput type="number" defaultValue={props.data?.fetchUseditem.price} {...props.register("price")} placeholder="판매 가격을 입력해주세요"/>
                <S.ProductTag defaultValue={props.data?.fetchUseditem.tags} {...props.register("tags")} placeholder='#태그 #태그 #태그'/>
            </S.ProductPriceTagWrapper>
            <S.LocationWrapper>
                <S.Location>
                    <S.LocationFont>거래위치</S.LocationFont>
                    <S.LocationMap></S.LocationMap>
                </S.Location>
                <S.GPSWrapper>
                    <S.LatiLongWrapper>    
                        <S.Latitude type='button'>위도</S.Latitude>
                        <S.Longitude type='button'>경도</S.Longitude>
                    </S.LatiLongWrapper>
                    <S.AddressWrapper>
                        <S.AddressFont>주소</S.AddressFont>
                        <S.AddressInput/>
                        <S.AddressDetailInput/>
                    </S.AddressWrapper>
                </S.GPSWrapper>
            </S.LocationWrapper>
            <S.ImageWrapper>
                <S.ImageFont>사진첨부</S.ImageFont>
                <div>
                    <UploadFile data={props.data} myImage={props.myImage} setMyImage={props.setMyImage}/>
                </div>
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
        </S.Wrapper>
    )
}