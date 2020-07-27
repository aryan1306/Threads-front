import React from "react";
import styled from "styled-components";

const Myfooter = styled.footer`
  footer {
    height: 5vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: auto;
    border-radius: 10px;
    background-image: linear-gradient(260deg, #2376ae 0%, #c16ecf 100%);
  }
  html {
    height: 100%;
  }
  body {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
  i {
    color: #fff;
  }
  @media (min-width: 1024px) {
    footer {
      display: none;
    }
  }
`;

const Footer = () => {
  return (
    <Myfooter>
      <footer>
        <i className='fas fa-home'></i>
        <i className='fas fa-globe'></i>
        <i className='fas fa-plus'></i>
        <i className='far fa-smile-wink'></i>
      </footer>
    </Myfooter>
  );
};
export default Footer;
