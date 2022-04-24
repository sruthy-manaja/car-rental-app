import styled from "styled-components";

export const RequestWrapper = styled.div`
padding-bottom: 40px;
.wrapper{ 
    button{
        max-width: 200px;
    margin: 0 auto;
    margin-right: 0;
    background: #E6356F;
    border: none;
    color: #fff;
    border-radius: 4px;
    font-weight: 600;
    padding: 0 40px;
    width: 100%;
    display: block;
    }
}
`
export const ChooseWrapper = styled.div`
padding: 40px 0;
.search_input_wrap{
    width: 100%;
}
.mobile_order_one{
    @media (max-width: 767px) {
        order: 1
    }
}
.mobile_order_two{
    @media (max-width: 767px) {
        order: 2;
    }
}
`
export const ConfirmationWrapper = styled.div` 
padding: 40px 0;
    img{
        @media (max-width: 767px) {
            width: 100%;
        }
    }
`