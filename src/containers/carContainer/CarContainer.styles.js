import styled from "styled-components"

export const SearchcarWrapper = styled.div`  
.search_area_wrap{
    background-color: #EFEFEF;
    padding: 30px 20px;
    margin: 30px 0;
    border-radius: 6px;
    h3{
        font-size: 24px;
        text-align: left;
        margin-bottom: 25px;
    }
    label{
        font-family: "open_sansregular";
        font-size: 16px;
        font-weight: 700;
        text-align: left;
        width: 100%;
        margin-bottom: 10px;
        @media (max-width: 767px) {
            font-size: 14px;
        }
    }
    input, select{
        width: 100%;
        background: #c7c7cd78;
        border: 1px Solid #C7C7CD;
        border-radius: 4px;
        padding: 10px 5px;
        margin-top: 10px;
    }
    input[type="checkbox"] {
        width: auto;
        margin-right: 10px;
    }

    button{
        max-width: 200px;
    margin: 12px auto;
    margin-right: 0;
    background: #E6356F;
    border: none;
    color: #fff;
    border-radius: 4px;
    font-weight: 600;
    }
}
`

export const CarResultsWrapper = styled.div` 

    .info_header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: transparent;
        box-shadow: 1px 1px 6px #dddddf;
        padding: 10px 20px;
        margin-bottom : 20px;
        @media (max-width: 767px) {
            flex-direction: column;
        }
    .compare{
        color: #E6356F;
        background: transparent;
        border: 1px solid #E6356F;
        padding: 0 30px;
        border-radius: 5px;
        @media (max-width: 767px) {
            margin: 5px 0;
        }
    }

    p{
        margin: 0;
    }
    .sort{
        display: flex;
    justify-content: center;
    align-items: center;
    button{
        border: none;
        background: #efefef;
        border-radius: 18px;
        padding: 5px 9px;
        font-size: 14px;
        height: auto;
        margin: 0 6px;
    }
    }
    }
    .results{
        .results_listing{
            margin:0;
            padding: 0;
            list-style: none;

            li{
                padding: 20px;
                transition: 1s all;
                :hover{
                    transform: scale(1.04);
                }
            }
        }
    }
    
`
export const SingleCarWrapper = styled.div` 
.car_box > * {
    flex: 1;
  }
    .car_box{
        display: flex;
        justify-content: space-between;
        align-content: center;
        @media (max-width: 767px) {
            flex-direction: column;
        }
        
        .car_box_picture{
            max-width: 345px;
            position: relative;
            align-self: flex-start;
            .featuredimg{
                width: 100%;
            }
            .vendorimg{
                background: #efefefab;
                padding: 12px 10px;
                border-radius: 4px;
                img{
                    max-width: 100px;
                }
                span{
                    color: #E6356F;
                    margin-left: 10px;
                }
            }
            .compare{
                color: #E6356F;
                border: none;
                background: none;
                text-align: left;
                margin: 0;
            }
            
        }
        .car_box_description{
            h2{
                font-family: "open_sansbold";
                font-size: 36px;
                line-height: 49px;
                text-align: left;
                span{
                    display: block;
                    color: #8b8b8f;
                    letter-spacing: 0.6px;
                }
            }
            ul.first_set{
                list-style: none;
                margin:10px 0; padding: 0;
                text-align: left;
                li{
                    margin: 0 4px;
                    display: inline-flex;
                    padding: 0 6px;
                    background: #333;
                    color: #fff;
                    font-size: 12px;
                    text-transform: uppercase;
                    min-height: 30px;
                    align-items: center;
                    border-radius: 6px;
                    svg{
                        fill: #fff;
                        width: 15px;
                        height: 20px;
                        margin-right: 6px;
                        path{
                            fill: #fff;
                        }
                    }
                    span{
                        font-size: 16px;
                    }
                    .hovertext {
                        position: relative;
                        border-bottom: 1px dotted black;
                      }
                      
                      .hovertext:before {
                        content: attr(data-hover);
                        visibility: hidden;
                        opacity: 0;
                        min-width: 140px;
                        background-color: #f1f1f1;
                        color: #333; font-size: 12px;
                        text-align: center;
                        border-radius: 5px;
                        padding: 5px 5px;
                        transition: opacity 1s ease-in-out;
                      
                        position: absolute;
                        z-index: 1;
                        left: 0;
                        top: 110%;
                      }
                      
                      .hovertext:hover:before {
                        opacity: 1;
                        visibility: visible;
                      }
                }
            }
            ul.second_set{
                list-style: disc;
                text-align: left;
                padding-left: 10px;
                list-style-position: inside;
                li{
                    padding: 3px 1px;
                    margin: 0;
                    font-size: 16px;
                    svg{
                        width: 15px;
                        height: 15px;
                        margin-right: 6px
                    }
                }
            }
        }
        .car_box_price {
            background: #efefef;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 20px 0;
            .price{
                font-size: 1.9rem;
                font-weight: bold;
            }
            .btn_pink{
                background: #E6356F;
                border: 1px solid #E6356F;
                border-radius: 5px;
                color: #fff;
                max-width: 80%;
                margin: 5px auto;
                width: 100%;
            }
            .email_quote{
                background: transparent;
                border: 1px solid #E6356F;
                border-radius: 5px;
                color: #E6356F;
                max-width: 80%;
                margin: 5px auto;
                width: 100%;
            }
        }
    }
.single_car_page{
    padding: 40px 0;
}
.nav_btn{
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    .btn_pinkoutline{
        background: transparent;
        border: 1px solid #E6356F;
        border-radius: 5px;
        color: #E6356F;
        padding: 0 15px;
    }
    .btn_pink{
        background: #E6356F;
        border: 1px solid #E6356F;
        border-radius: 5px;
        color: #fff;
        padding: 0 15px;
    }
}
`
