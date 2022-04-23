
import * as S from '../ProductDetail/productDetail.styles'

interface IProductDetailPresenter{
    data?:any
    onClickEdit : () => void
    onClickDelete : () => void
}
export default function ProductDetailPresenter(props:IProductDetailPresenter){
    return(
        <S.Wrapper>
            <S.Header>
                <S.UserImage src="/UserImg.png"/>
                <S.UserDateWrapper>
                    <S.UserName>{props.data?.fetchUseditem.name}</S.UserName>
                    <S.CreatedAt>{props.data?.fetchUseditem.createdAt}</S.CreatedAt>
                </S.UserDateWrapper>
                <S.Address src="/Map.png"/>
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
                        <S.Like src="/Like.png"/>
                        <S.LikeNumber></S.LikeNumber>
                    </S.LikeWrapper>
                </S.BodyHeader>
                <S.Images>
                    {props.data?.fetchUseditem.images.map((el:any ,index:number)=>(
                        <div key={index}>
                            <S.Img src={`https://storage.googleapis.com/${el}`}/>
                        </div>
                    ))}
                </S.Images>
                <S.Contents>{props.data?.fetchUseditem.contents}</S.Contents>
                <S.Tags>{props.data?.fetchUseditem.tags}</S.Tags>
                <S.Mark></S.Mark>
                <S.Map></S.Map>
                <S.Mark></S.Mark>
            </S.BodyWrapper>
            <S.FooterWrapper>
                <S.ListButton>목록으로</S.ListButton>
                <S.EditButton onClick={props.onClickEdit}>수정하기</S.EditButton>
                <S.DeleteButton onClick={props.onClickDelete}>삭제하기</S.DeleteButton>
            </S.FooterWrapper>
            <S.Mark></S.Mark>
        </S.Wrapper>
    )
}