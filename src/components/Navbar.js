import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MyNavbar = styled.nav`
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: linear-gradient(260deg, #2376ae 0%, #c16ecf 100%);
    color: white;
    height: 10vh;
    width: 100%;
  }
  a {
    text-decoration: none;
    color: white;
    font-family: "Poppins", sans-serif;
  }
  a:hover {
    color: #bebfc1;
  }
  .nav-links {
    display: flex;
    justify-content: space-around;
  }
  .links {
    margin-left: 2.5rem;
  }
  ul {
    list-style: none;
  }
  h1 {
    font-size: 2rem;
    margin: auto 2rem;
    cursor: pointer;
  }
  @media (max-width: 769px) {
    .nav-links {
      display: none;
    }
  }
`;

const Navbar = () => {
  return (
    <MyNavbar>
      <nav>
        <h1>
          <Link to='/'>Threads</Link>
        </h1>
        <ul className='nav-links'>
          <li className='links'>
            <Link to='/'>Home</Link>
          </li>
          <li className='links'>
            <Link to='/explore'>Explore</Link>
          </li>
          <li className='links'>
            <Link to='/me'>Me</Link>
          </li>
        </ul>
      </nav>
    </MyNavbar>
  );
};
export default Navbar;
