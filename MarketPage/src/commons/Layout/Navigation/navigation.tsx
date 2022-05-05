import * as S from '../Navigation/navigation.presenter'
import { useRouter } from "next/router";


export default function NavigationLayout() {
  const router = useRouter();

  const onClickMoveBoardList = () => {
    router.push("/boards/new");
  };
  const onClickMoveMyPage = () => {
    router.push("/boards/mypage");
  };

  const onClickMoveProductList = () => {
    router.push("/boards")
  }

  return (
    <>
      <S.Wrapper>
        <S.Board onClick={onClickMoveBoardList}>상품등록</S.Board>
        <S.Mark></S.Mark>
        <S.Market onClick={onClickMoveProductList}>중고마켓</S.Market>
        <S.Mark></S.Mark>
        <S.MyPage onClick={onClickMoveMyPage}>마이페이지</S.MyPage>
      </S.Wrapper>
    </>
  );
}
