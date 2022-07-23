import PaymentPage from "../../../commons/Payment";
import * as S from "../MyPage/MyPage.styles";
import { Modal, Pagination } from "antd";

interface IMyPagePresenter {
  data?: any;
  PickData?: any;
  onClickUpdateUser: () => void;
  handleCancel: () => void;
  showModal: () => void;
  onChangeFile: () => void;
  onClickImg: () => void;
  fileRef: any;
  imgUrl: string;
  isModalVisible: boolean;
}

export default function MyPagePresenter(props: IMyPagePresenter) {
  return (
    <S.Wrapper>
      <S.MyPageWrapper>
        <S.MyPageFont>MYPAGE</S.MyPageFont>
        <S.ProfileImg
          src={`https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.picture}`}
        />
        <S.UserNameFont>{props.data?.fetchUserLoggedIn.name}</S.UserNameFont>
        <S.PointWrapper>
          <S.PointImg src="/PigMoney.png" />
          <S.Point>
            {props.data?.fetchUserLoggedIn.userPoint.amount}Point
          </S.Point>
        </S.PointWrapper>
        <PaymentPage />
        <S.UserUpdate onClick={props.showModal}>회원정보변경</S.UserUpdate>
      </S.MyPageWrapper>
      <S.PickWrapper>
        {" "}
        찜목록
        {props.PickData?.fetchUseditemsIPicked.map((el: any) => (
          <S.Row key={el._id}>
            <S.PickImg
              src={
                el.images[0] || el.images[1]
                  ? `https://storage.googleapis.com/${
                      el.images[0] || el.images[1]
                    }`
                  : "/NoImage.webp"
              }
            />
            <S.PickName>{el.name}</S.PickName>
            <S.PickPrice>{el.price}</S.PickPrice>
          </S.Row>
        ))}
        <Pagination defaultCurrent={6} total={100} />
      </S.PickWrapper>
      {props.isModalVisible && (
        <Modal
          visible={true}
          onOk={props.onClickUpdateUser}
          onCancel={props.handleCancel}
        >
          <img onClick={props.onClickImg} src="/Userimg.png" />
          <input
            ref={props.fileRef}
            style={{ display: "none" }}
            type="file"
            onChange={props.onChangeFile}
          />
          <img
            style={{
              width: "100px",
              height: "100px",
              border: "1px solid black",
              borderRadius: "100%",
            }}
            src={props.imgUrl}
          />
        </Modal>
      )}
    </S.Wrapper>
  );
}
