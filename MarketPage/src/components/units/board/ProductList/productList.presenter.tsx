import { MouseEvent } from 'react'
import InfiniteScroll from "react-infinite-scroller";
import * as S from '../ProductList/productList.styles'
// import ProductSoldOutContainer from '../ProductSoldOut/productsold.container';

interface IProductListPresenter{
    sold :boolean
    data?:any
    basketItems: any
    MoveToDetail: (event:MouseEvent<HTMLImageElement>) => void
    onLoadMore: () => void
    onClickSold : () => void
    onClickBasket : (el:any) =>(event:MouseEvent<HTMLDivElement>) => void
    DeleteBasket : (event:MouseEvent<HTMLDivElement>) => void
}

export default function ProductListPresenter(props:IProductListPresenter){

 return(
     <S.Wrapper>
    <S.TodayColumn>
     {props.basketItems.map((el:any)=>(
         <S.Column key={el._id}>
             <S.TodayImg src={el.images[0] || el.images[1]?  `https://storage.googleapis.com/${el.images[0] || el.images[1]}` : `/NoImage.webp`}/>
             <S.TodayName onClick={props.DeleteBasket} id={el._id} >상품명 : {el.name}</S.TodayName>
             <S.TodayPrice>가격 : {el.price}</S.TodayPrice>
         </S.Column>
     ))}
     </S.TodayColumn>
     <S.StyleScroll>
     <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
        <div onClick={props.onClickSold}>판매중</div>
        <div onClick={props.onClickSold}>판매완료</div>
       {props.data?(props.data?.fetchUseditems.map((el:any,index:number) =>(
            <S.Row onClick={props.onClickBasket(el)} key={index}>
                <S.Image id={el._id} onClick={props.MoveToDetail} src={el.images[0] || el.images[1]?  `https://storage.googleapis.com/${el.images[0] || el.images[1]}` : `/NoImage.webp`} />
                <S.ProductWrapper>
                    <S.Name>상품명: {el.name}</S.Name>
                    <S.Remarks>한줄요약: {el.remarks}</S.Remarks>
                    <S.Tags>태그: {el.tags}</S.Tags>
                    <S.User>판매자: {el.name}</S.User>
                </S.ProductWrapper>
                <S.Price>{el.price}원</S.Price>
            </S.Row>
        ))):(<div></div>)}
        {/* {props.sold? <ProductSoldOutContainer/>
        :(<div></div>)} */}
        </InfiniteScroll>
        </S.StyleScroll>
     </S.Wrapper>
 )
}