import styled from "@emotion/styled"

export const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
export const NameContentsWrapper = styled.div`
    display: flex;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
`
export const Name = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-weight: 500;
    font-size: 16px;
`
export const Picture = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`
export const Contents = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #4F4F4F;
`
export const ReplyArrow = styled.img`
    width: 15px;
    height: 17px;
    margin: 10px 15px 0px 50px;
`
export const ReplyEdit = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`
export const ReplyDel = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`

export const ReplyButton = styled.div`
    display: flex;
    flex-direction: row;
`