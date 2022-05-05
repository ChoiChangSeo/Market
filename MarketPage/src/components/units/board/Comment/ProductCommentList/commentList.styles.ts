import styled from "@emotion/styled"

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
    border: none;
    border-bottom: 2px solid #F2522E;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`
export const UserImg = styled.img`
    width: 6.5%;
    height: 35px;
    margin-right: 2%;
`

export const ContentsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
`

export const UserName = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
`

export const Contents = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-weight: 400;
    font-size: 16px;
    color: #4F4F4F;
`
export const CreatedAt = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #BDBDBD;
`
export const EditDelButton = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
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
export const Reply = styled.img`
    width: 20px;
    height: 20px;
`
export const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const ReplyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`