import PaymentPage from "../../../commons/Payment";
import * as S from "../MyPage/MyPage.styles"
import { Pagination } from 'antd';

interface IMyPagePresenter{
    data?:any
    PickData?:any
}

export default function MyPagePresenter (props:IMyPagePresenter) {

    return(
    <S.Wrapper>
        <S.MyPageWrapper>
            <S.MyPageFont>MYPAGE</S.MyPageFont>
            <S.ProfileImg src={props.data?.fetchUserLoggedIn.picture}/>
            <S.UserNameFont>{props.data?.fetchUserLoggedIn.name}</S.UserNameFont>
            <S.PointWrapper>
                <S.PointImg src="/PigMoney.png"/>
                <S.Point>{props.data?.fetchUserLoggedIn.userPoint.amount}Point</S.Point>
            </S.PointWrapper>
            <PaymentPage/>
        </S.MyPageWrapper>
        <S.PickWrapper> 찜목록
        {props.PickData?.fetchUseditemsIPicked.map((el:any)=>(
            <S.Row key={el._id}>
                <S.PickImg src={el.images[0] || el.images[1]? `https://storage.googleapis.com/${el.images[0] || el.images[1]}` :'/NoImage.webp' }/>
                <S.PickName>{el.name}</S.PickName>
                <S.PickPrice>{el.price}</S.PickPrice>
            </S.Row>
        ))}
        <Pagination defaultCurrent={6} total={100} />
        </S.PickWrapper>
    </S.Wrapper>)
}