import { gql, useQuery } from "@apollo/client"

const FETCH_USEDITEMS_SOLD = gql`
   query fetchUseditemsISold($search:String, $page:Int){
        fetchUseditemsISold(search:$search, page:$page){
            _id
            name
            price
            images
            soldAt
        }
    }
`

export default function ProductSoldOutContainer(){
const {data} = useQuery(FETCH_USEDITEMS_SOLD)
    return(
        <div>
            {data?.fetchUseditemsISold.map((el:any)=>(
                <div key={el._id}>
                    <div>{el.name}</div>
                    <div>{el.price}</div>
                    <img src={el.images}/>
                    <div>{el.soldAt}</div>
                </div>
            ))}
        </div>
    )
}