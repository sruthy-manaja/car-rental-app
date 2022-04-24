import styled from "styled-components";

export const FlowWrapper = styled.div`

.bookingFlow{
    padding: 0;
    padding-top: 50px;
    ul {
        padding-left: 0px;
        .active {
            background: #E6356F !important;
            h3 {
                color: #fff;
            }
        }
        li {
            list-style: none;
            width: 25%;
            float: left;
            border-bottom: solid #e2e2e2;
            border-left: solid #e2e2e2;
            padding: 15px 20px;
            background: #EFEFEF;
            div{
                display: flex;
                justify-content: center;
                h3{
                    font-size: 16px;
                    margin :0;
                    @media (max-width: 767px) {
                        font-size: 12px;
                    }
                }
                .circle{
                    h3 {
                        margin-right: 15px;
                        margin-bottom:0;
                        @media (max-width: 767px) {
                            margin-right:5px;
                        }
                        img{
                            max-width: 15px;
                            opacity: 0.5;
                            margin: 0;
                            
                        }
                    }
                }
                
            }
        }
    }
}


`