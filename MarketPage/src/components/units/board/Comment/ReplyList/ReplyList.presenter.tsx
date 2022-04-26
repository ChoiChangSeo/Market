
import ReplyListItem from './ReplyListItem'
import { v4 as uuidv4 } from 'uuid';


interface IReplyListPresenter{
    data: any
    el?: any
}

export default function ReplyListPresenter(props:IReplyListPresenter){
    
    return(
        <>
            {props.data?.fetchUseditemQuestionAnswers.map((al:any) => (
                <ReplyListItem el={props.el} key={uuidv4()} al={al}/> 
            ))}
        </>
    )
}