import styled from "@emotion/styled"

export const Title = styled.div`
    text-align: start;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    margin-top: 3%;
    margin-bottom: 4%;
`
export const ProductNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 2%;
    border-radius: 15px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5%;
    padding-bottom: 3%;
    width: 65%;
    height: 80%;
`
export const NameInput = styled.input`
    width: 95%;
    height: 52px;
    background: #F2F0EB;
    border: 1px solid #BDBDBD;
    border-radius: 15px;
    box-shadow: 0px 0px 5px rgba(242, 82, 46, 0.8);
    font-size: 17px;
`

export const RemarksInput = styled.input`
    width: 95%;
    height: 52px;
    background: #F2F0EB;
    border: 1px solid #BDBDBD;
    border-radius: 15px;
    box-shadow: 0px 0px 5px rgba(242, 82, 46, 0.8);
    font-size: 17px;
`

export const ProductPriceInput = styled.input`
    width: 95%;
    height: 52px;
    background: #F2F0EB;
    border: none;
    border-radius: 15px;
    box-sizing: border-box; 
    box-shadow: 0px 0px 5px rgba(242, 82, 46, 0.8);
    font-size: 17px;
`
export const ProductTag = styled.input`
    width:95%;
    height: 52px;
    margin-bottom: 3%;
    background: #F2F0EB;
    border: 1px solid #BDBDBD;
    border-radius: 15px;
    box-shadow: 0px 0px 5px rgba(242, 82, 46, 0.8);
    font-size: 17px;  
`

export const ProductPriceTagWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 3% 0% 3% 0%;
    border-radius: 15px;
`
export const ProductContentsWrapper = styled.div`
    margin-bottom: 2%;
    padding: 2% 0% 2% 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 300px;
    border-radius: 15px;
    box-shadow: 0px 0px 5px rgba(242, 82, 46, 0.8);
`

export const LocationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    background: #F2F0EB;
    width: 100%;
    padding: 3% 0% 3% 3%;
    height: auto;
    border-radius: 15px;
    /* box-shadow: 0px 0px 5px rgba(242, 82, 46, 0.8);    */
    margin-bottom: 40px;
`

export const AddressWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const ImageWrapper = styled.div`
    background: #F2F0EB;
    width: 100%;
    margin-top: 2%;
    padding: 3% 0% 3% 3%;
    height: auto;
    border: 1px solid #BDBDBD;
    border-radius: 15px;
    box-shadow: 0px 0px 5px rgba(242, 82, 46, 0.8); 
`
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
export const Span = styled.span`
    background-color: orange;
    border-radius: 15px;
    font-size: 20px;
    margin-right: 1%;
`

export const Location = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 350px;
    margin-right: 24px;
`
export const LocationFont = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 2%;
`
export const LocationMap = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    border: 1px solid gray;
`
export const GPSWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 6%;
`

export const AddressFont = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 2%;
`
export const AddressInput = styled.input`
    width: 91%;
    height: 52px;
    margin-bottom: 3%;
    background: #F2F0EB;
    border: 1px solid #BDBDBD;
    border-radius: 15px;
    box-shadow: 0px 0px 5px rgba(242, 82, 46, 0.8);
    font-size: 17px;   
`
export const AddressDetailInput = styled.input`
    width: 91%;
    height: 52px;
    background: #F2F0EB;
    border: 1px solid #BDBDBD;
    border-radius: 15px;
    box-shadow: 0px 0px 5px rgba(242, 82, 46, 0.8);
    font-size: 17px;     
`

export const AddressButton = styled.button`
    width: 20%;
    height: 50px;
    margin-top: 5%;
    font-size: 16px;
`
export const ImageFont = styled.div`
    margin-bottom: 2%;
    font-family: 'Noto Sans CJK KR';
    font-weight: 500;
    font-size: 16px;       
`
export const SubmitButton = styled.button`
    width: 17%;
    height: 52px;
    margin-top: 2%;
    border: none;
    font-weight: 500;
    font-size: 16px;
`

export const NameInputError = styled.div`
    margin: 1% 0% 2% 0%;
    font-size: 15px;
    color : red;
`
export const RemarkInputError = styled.div`
    margin: 1% 0% 2% 0%;
    font-size: 15px;
    color : red;
`
export const ContentsInputError = styled.div`
    margin-top: 4%;
    font-size: 15px;
    color : red;
`
export const PriceError = styled.div`
    margin-top: 2%;
    font-size: 15px;
    color : red;
`
export const SpanWrapper = styled.div`
    width: 93%;
`