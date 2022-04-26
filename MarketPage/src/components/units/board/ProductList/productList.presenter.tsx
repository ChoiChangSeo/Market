import { MouseEvent } from 'react'
import InfiniteScroll from "react-infinite-scroller";
import * as S from '../ProductList/productList.styles'

interface IProductListPresenter{
    data?:any
    MoveToDetail: (event:MouseEvent<HTMLImageElement>) => void
    onLoadMore: () => void
}

export default function ProductListPresenter(props:IProductListPresenter){

 return(
     <>
     <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={true}
        >
       {props.data?.fetchUseditems.map((el:any,index:number) =>(
            <S.Row key={index}>
                <S.Image id={el._id} onClick={props.MoveToDetail} src={el.images[0] || el.images[1]?  `https://storage.googleapis.com/${el.images[0]}` : `/NoImage.webp`} />
                <S.ProductWrapper>
                    <S.Name>{el.name}</S.Name>
                    <S.Remarks>{el.remarks}</S.Remarks>
                    <S.Tags>{el.tags}</S.Tags>
                    <S.User>{el.name}</S.User>
                </S.ProductWrapper>
                <S.Price>{el.price}원</S.Price>
            </S.Row>
        ))}
        </InfiniteScroll>
     </>
 )
}