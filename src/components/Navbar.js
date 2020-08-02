import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../redux/actions/auth_actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
    font-family: "Gilroy", sans-serif;
    font-weight: 500;
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

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
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
      <li className='links'>
        <Link onClick={logout} to='/'>
          <i className='fas fa-sign-out-alt' />{" "}
          <span className='hide-sm'>Logout</span>
        </Link>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul className='nav-links'>
      <li className='links'>
        <Link to='/'>Sign Up</Link>
      </li>
      <li className='links'>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );
  return (
    <MyNavbar>
      <nav>
        <h1>
          <Link to='/'>Threads</Link>
        </h1>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </nav>
    </MyNavbar>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
