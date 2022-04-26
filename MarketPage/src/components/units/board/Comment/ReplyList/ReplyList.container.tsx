import { gql, useQuery } from "@apollo/client"
import ReplyListPresenter from "./ReplyList.presenter"

const USEDITEM_ANSWER_LIST = gql`
    query fetchUseditemQuestionAnswers($useditemQuestionId: ID!){
        fetchUseditemQuestionAnswers(useditemQuestionId:$useditemQuestionId){
            _id
    contents
    user{
        name
        picture
    }
    }
    }
`

interface IReplyListContainer{
    el?:any
}


export default function ReplyListContainer(props:IReplyListContainer){
    const {data} = useQuery(USEDITEM_ANSWER_LIST,({
        variables:{useditemQuestionId: props.el._id}
    }))
    return(
        <ReplyListPresenter el={props.el} data={data}/>
    )
}