import Dompurify from "dompurify";
import { MouseEvent } from "react";
import KakaoMap from "../../../commons/Map";
import { getDate } from "../../../../commons/libraries/utils";

import * as S from '../ProductDetail/productDetail.styles'

interface IProductDetailPresenter{
    data?:any
    UserData?:any
    onClickEdit : () => void
    onClickDelete : () => void
    onClickBuy : () => void
    onClickPick: (event:MouseEvent<HTMLImageElement>) => void
    onClickMoveList : () => void
}
export default function ProductDetailPresenter(props:IProductDetailPresenter){
    return(
        <S.Wrapper>
            <S.Header>
                <S.UserImage src="/UserImg.png"/>
                <S.UserDateWrapper>
                    <S.UserName>{props.data?.fetchUseditem.name}</S.UserName>
                    <S.CreatedAt>{getDate(props.data?.fetchUseditem.createdAt)}</S.CreatedAt>
                </S.UserDateWrapper>
            </S.Header>
            <S.Mark></S.Mark>
            <S.BodyWrapper>
                <S.BodyHeader>
                    <S.ProductNameWrapper>
                        <S.Remarks>{props.data?.fetchUseditem.remarks}</S.Remarks>
                        <S.ProductName>{props.data?.fetchUseditem.name}</S.ProductName>
                        <S.Price>{props.data?.fetchUseditem.price}원</S.Price>
                    </S.ProductNameWrapper>
                    <S.LikeWrapper>
                        <S.Like onClick={props.onClickPick} src="/Like.png"/>
                        <S.LikeNumber>{props.data?.fetchUseditem.pickedCount}</S.LikeNumber>
                    </S.LikeWrapper>
                </S.BodyHeader>
                <S.Images>
                    {props.data?.fetchUseditem.images?.filter((el:string)=>el)
                    .map((el:any ,index:number)=>(
                        <div key={index}>
                            <S.Img src={`https://storage.googleapis.com/${el}`}/>
                        </div>
                    ))}
                </S.Images>
                {typeof window !== "undefined" ? (
                <S.Contents dangerouslySetInnerHTML={{__html: Dompurify.sanitize(props.data?.fetchUseditem.contents)}}>
                </S.Contents>
                ):(<S.Contents></S.Contents>)}
                <S.Tags>{props.data?.fetchUseditem.tags}</S.Tags>
                <S.Mark></S.Mark>
                <S.Map>
                    <KakaoMap data={props.data}/>
                </S.Map>
                <S.Mark></S.Mark>
            </S.BodyWrapper>
            <S.FooterWrapper>
                <S.ListButton onClick={props.onClickMoveList}>목록으로</S.ListButton>
                {props.data?.fetchUseditem.seller.email === props.UserData?.fetchUserLoggedIn.email?
                <>
                <S.EditButton onClick={props.onClickEdit}>수정하기</S.EditButton>  
                <S.DeleteButton onClick={props.onClickDelete}>삭제하기</S.DeleteButton>
                </> : <S.BuyButton onClick={props.onClickBuy}>구매하기</S.BuyButton>
                } 
            </S.FooterWrapper>
            <S.Mark></S.Mark>
        </S.Wrapper>
    )
}