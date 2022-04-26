import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import PaymentPage from "../../../commons/Payment";


const Wrapper = styled.div`
    width: 300px;
    height: 500px;
`
const MyPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const MyPageFont = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-weight: 700;
    font-size: 24px;
`
const ProfileImg = styled.img`
    width: 80px;
    height: 80px;
`
const UserNameFont = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-weight: 700;
    font-size: 24px;
`
const PointWrapper = styled.div`
    display: flex;
`
const PointImg = styled.img`
    width: 20px;
    height: 19px;
`
const Point = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-weight: 700;
    font-size: 16px;
    color: #4F4F4F;
`
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

export default function MyPageContainer () {
 const {data} = useQuery(FETCH_USER)
    return(
    <Wrapper>
        <MyPageWrapper>
            <MyPageFont>MYPAGE</MyPageFont>
            <ProfileImg src={data?.fetchUserLoggedIn.picture}/>
            <UserNameFont>{data?.fetchUserLoggedIn.name}</UserNameFont>
            <PointWrapper>
                <PointImg src="/PigMoney.png"/>
                <Point>{data?.fetchUserLoggedIn.userPoint.amount}Point</Point>
            </PointWrapper>
            <PaymentPage/>
        </MyPageWrapper>
    </Wrapper>)
}