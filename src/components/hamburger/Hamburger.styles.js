import styled from 'styled-components';

export const HamburgerButton = styled.div`
  position: relative;
  z-index: 100000;

  .fabars {
    position: absolute;
    display: block;
    z-index: 100000;
    right: 30px;
    top: 35px;
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 5px;
    padding: 2px 8px;
    box-shadow: 1px 1px 5px 0px #1f1d1d;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 49px;
    line-height: 23px;

    :hover {
      transform: scale(1.2);
    }

    @media (min-width: 992px) {
      display: none;
    }
  }
  .showBar {
    background: #fff;
    position: fixed;
    top: 0;
    right: 0;
  }
`;
