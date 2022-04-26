
import CommentListContainer from "../../../src/components/units/board/Comment/ProductCommentList/commentList.container";
import CommentWriteContainer from "../../../src/components/units/board/Comment/ProductCommentWrite/commentWrite.container";
import ProductDetailContainer from "../../../src/components/units/board/ProductDetail/productDetail.container";



export default function BoardPage() {

  return (
<>
<ProductDetailContainer/>
<CommentWriteContainer />
<CommentListContainer />
</>
  );
}
