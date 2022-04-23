import { gql, useQuery } from "@apollo/client"
import styled from '@emotion/styled';
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";

const FETCH_USED_ITEMS = gql`
    query fetchUseditems{
        fetchUseditems{
            name
            remarks
            price
            tags
            images
            pickedCount
        }
    }
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 1200px;
    height: auto;
    border: none;
    border-top: solid 1px gray;
    border-bottom: solid 1px gray;
`
const Image = styled.img`
    width: 160px;
    height: 160px;
`
const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const Name = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-weight: 500;
    font-size: 24px;
`
const Remarks = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
`
const Tags = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-weight: 500;
    font-size: 16px;
    color: #BDBDBD;
`
const User = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-weight: 500;
    font-size: 16px;
`
const Price = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-weight: 700;
    font-size: 24px;
`
export default function ProductListContainer(){
const {data} = useQuery(FETCH_USED_ITEMS)
const [userInfo] = useRecoilState(userInfoState);
 return(
     <>
        {data?.fetchUseditems.map((el:any,index:number) =>(
            <Row key={index}>
                <Image src={`https://storage.googleapis.com/${el.images[0]}`} />
                <ProductWrapper>
                    <Name>{el.name}</Name>
                    <Remarks>{el.remarks}</Remarks>
                    <Tags>{el.tags}</Tags>
                    <User>{userInfo.name}</User>
                </ProductWrapper>
                <Price>{el.price}원</Price>
            </Row>
        ))}
     </>
 )
}