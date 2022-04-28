import { gql, useQuery } from "@apollo/client";
import MyPagePresenter from "./MyPage.presenter";




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
const FETCH_PIKED = gql`
    query fetchUseditemsIPicked($search:String,$page:Int){
        fetchUseditemsIPicked(search:$search page:$page){
            _id
            name
            price
            images
        }
    }
`

export default function MyPageContainer () {
 const {data} = useQuery(FETCH_USER)
 const {data:PickData} = useQuery(FETCH_PIKED,({
     variables:{search:"",page:1}
 }))
    return(
        <MyPagePresenter data={data} PickData={PickData}/>
        )
}