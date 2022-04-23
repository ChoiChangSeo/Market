import { MouseEvent } from 'react'
import * as S from '../ProductList/productList.styles'

interface IProductListPresenter{
    data?:any
    MoveToDetail: (event:MouseEvent<HTMLImageElement>) => void
}

export default function ProductListPresenter(props:IProductListPresenter){

 return(
     <>
        {props.data?.fetchUseditems.map((el:any,index:number) =>(
            <S.Row key={index}>
                <S.Image id={el._id} onClick={props.MoveToDetail} src={`https://storage.googleapis.com/${el.images[0]}`} />
                <S.ProductWrapper>
                    <S.Name>{el.name}</S.Name>
                    <S.Remarks>{el.remarks}</S.Remarks>
                    <S.Tags>{el.tags}</S.Tags>
                    <S.User>{el.name}</S.User>
                </S.ProductWrapper>
                <S.Price>{el.price}원</S.Price>
            </S.Row>
        ))}
     </>
 )
}