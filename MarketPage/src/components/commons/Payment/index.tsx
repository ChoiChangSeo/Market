import { useState, ChangeEvent } from 'react';
import Head from "next/head";
import { gql, useMutation, useQuery } from '@apollo/client';
declare const window: typeof globalThis & {
  IMP: any;
};

const FETCH_USER = gql`
   query fetchUserLoggedIn{
       fetchUserLoggedIn{
           email
           picture
           name
           userPoint{
               amount
           }
       }
   }
`
const CREATE_POINT = gql`
  mutation createPointTransactionOfLoading($impUid:ID!){
    createPointTransactionOfLoading(impUid:$impUid){
      _id
      impUid
    }
  }
`

export default function PaymentPage() {
  const [amount, setAmount] = useState(100);
  const {data} = useQuery(FETCH_USER)
  const [createPointTransactionOfLoading] = useMutation(CREATE_POINT)
  const onChangeAmount = (event:ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.valueAsNumber)
  }

 

  const requestPay = async() => {
    const IMP = window.IMP;
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "WithMarketPoint",
        amount: amount,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
      },
      (rsp: any) => {
        if (rsp.success) {
            createPointTransactionOfLoading({
              variables:{impUid : rsp.imp_uid },
              refetchQueries:[{
                query: FETCH_USER,
              }]
            })
            alert("충전에 성공하였습니다.")
        } else {
          alert("결제에 실패하였습니다. 다시 시도해주세요.");
        }
      }
    );
  };
  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <button style={{width:"100",height:"100"}} onClick={requestPay}>포인트 충전하기</button>
      <input type="number" onChange={onChangeAmount} placeholder="충전가능 금액은 100원 이상부터 입니다." />
    </div>
  );
}
