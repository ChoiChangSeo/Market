import * as S from '../Navigation/navigation.presenter'
import { useRouter } from "next/router";


export default function NavigationLayout() {
  const router = useRouter();

  const onClickMoveBoardList = () => {
    router.push("/boards/new");
  };

  return (
    <>
      <S.Wrapper>
        <S.Mark></S.Mark>
        <S.Board onClick={onClickMoveBoardList}>상품등록</S.Board>
        <S.Mark></S.Mark>
        <S.Market>중고마켓</S.Market>
        <S.Mark></S.Mark>
        <S.MyPage>마이페이지</S.MyPage>
        <S.Mark></S.Mark>
      </S.Wrapper>
    </>
  );
}
