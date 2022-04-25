import styled from "styled-components"

export const FooterWrapper = styled.div`  
  background-color: #efefef;
  position: relative;
  padding-top:80px;

    .page-footer{
      h5{
        color: #333;
        font-size: 16px;
        line-height: 22px;
        text-transform: uppercase;
        margin-bottom: 20px;
      }

      ul{
          margin:0;
        
        li{
            margin-bottom: 5px;
        }
        a{
            color: #333;
            font-size: 14px;
            line-height:22px;
            text-decoration: none;
            display: block;
        }
      }
      .follow-us-list li{
          display: inline-block;
          padding: 0 8px;
        svg{
          font-size: 22px;
        }
      }
      .footer-copyright {
        padding-top: 2em;
        padding-bottom: 1.66666em;
        border-top: 1px solid #424242;
        margin-top: 1em;
          
        p{
            color: #333;
            font-size: 14px;
            line-height: 22px;
          }
      }
    }
`