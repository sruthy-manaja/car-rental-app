import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
  display: flex;
    justify-content: end;
    align-items: center;
    align-content: center;
    height: 100%;

  .nav-active {
    color: #E6356F;
  }
  ul{
    display: flex;
    list-style: none;
    margin-bottom:0;
    align-self: center;
    height:100%;
    align-items: center;
    padding: 15px 0;

    @media (max-width: 991px) {
      align-items: start;
      flex-direction: column;
      margin: 0;
    }
  }
  

  @media (min-width: 1200px) {
    font-size: 1rem;
  }

  ul li {
    margin: 0 10px 0 0;
    height: auto;
    position: relative;
    padding-left: 30px;

    a {
      display: flex;
      padding: 0 0 0 10px;
      transition: all 0.2s ease;
      text-decoration: none;

      @media (max-width: 991px) {
        width:100%;
        text-align: center;
      }

      div {
        margin: -4px 0 0 5px;
      }
    }
    @media (max-width: 991px) {
      margin: 0;
      height: auto;
      position: relative;
      padding: 6px 0;
      width:100%;
    }
  }

  ul li:hover > ul {
    display: block;
  }

  ul li a:hover {
    color: #fff;
  }

  ul ul {
    animation: fadeInMenu 0.3s both ease-in;
    display: none;
    position: absolute;
    left: 0;
    margin: 0;
    top: 30px;
    text-transform: none;
    background: #fff;
    padding: 15px 10px 10px 10px;
    box-shadow: 0px 6px 23px -10px rgba(0, 0, 0, 0.5);
  }

  ul ul li {
    width: auto;
    min-width: 170px;
  }

  ul ul li a {
    padding: 5px 10px;
    text-decoration: none;
    white-space: nowrap;
  }

  @keyframes fadeInMenu {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
