import styled from "@emotion/styled"

export const Wrapper = styled.div`
    width: 1000px;
    height: auto;
    display: flex;
    justify-content: flex-end;
`
export const ReplyArrow = styled.img`
    width: 15px;
    height: 17px;
    margin: 30px 120px 0px 0px
`
export const QuestionFont = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-weight: 500;
    font-size: 18px;
`
export const QuestionTextArea = styled.textarea`
    width: 1000px;
    height: 56px;
    resize: none;
`
export const QuestionSubmitWrapper = styled.div`
    width: 1000px;
    height: 52px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #BDBDBD;
`
export const CommentLength = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-weight: 500;
    font-size: 16px;
    color: #BDBDBD;
`
export const SubmitButton = styled.button`
    width: 91px;
    height: 52px;
    background: #000000;
    color: white;
`