import styled from 'styled-components';


export const Wrapper = styled.div`
display: block;
height: 100%;


  .row{
    width:100%;
  }
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 2.5rem;
    position: relative;
    z-index: 1;
    width: 100%;
    box-shadow: 1px 1px 2px #2222224a;

    .logo{
      text-decoration: none;
      h4{
        font-family: "open_sansbold";
        font-size: 36px;
        color: #E6356F;
        text-align: left;
      }
    }
  li a{
    color: #333;
    font-family: "open_sansbold";
    }
  li a:hover{
    color: #bc0000;
  }  
  }
  
  .showBar {
    background: #efefef;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem 2.5rem;
    box-shadow: 1px 1px 21px #2222224a;
    animation: moveDown 0.5s ease-in-out;
    
    li a{
      color: #333;
      font-family: "open_sansbold";
      :hover{
        color: #333;
      }
      }
    img {
        max-width: 125px;
        width:100%;  
    }
  }

  @keyframes moveDown {
  from {
    transform: translateY(-5rem);
  }
  to {
    transform: translateY(0rem);
  }
}

`;
