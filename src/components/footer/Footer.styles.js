import styled from "styled-components"

export const FooterWrapper = styled.div`  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #efefef;
  position: relative;
  padding-top:80px;

    .page-footer{
      width: 90%;

      .container-fluid{
          padding: 0;
      }
      .row {
        --bs-gutter-x: 5.5rem;
      }
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
      .app-icon {
        a{
            max-width: 160px !important;
        margin: 0 0 10px 0;
        display: block;
          }
          img{
            filter: invert(1);
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