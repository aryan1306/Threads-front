import React, { useState } from "react";
import Form from "../components/Form";
import Button from "../components/Button";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "./../redux/actions/alert_actions";
import { Register } from "../redux/actions/auth_actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import social from "../img/social.svg";

const Card = styled.div`
  h2 {
    /* font-size: 2.5rem; */
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0.03, rgb(35, 118, 174)),
      color-stop(0.52, rgb(25, 250, 17)),
      color-stop(0.76, rgb(67, 176, 113))
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    text-align: center;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .image {
    width: 100vh;
    height: 100vh;
  }
  form {
    /* align-self: center; */
  }
  @media (max-width: 769px) {
    .image {
      display: none;
    }
  }
`;
const RegisterForm = ({ setAlert, Register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords don't match", "danger");
    } else {
      Register({ name, email, password });
    }
  };
  if (isAuthenticated) {
    return <Redirect to='/photo' />;
  }
  return (
    <Card>
      <div className='container'>
        <div className='wrapper'>
          <div className='image'>
            <img
              src={social}
              className='image'
              style={{ width: "100vh", height: "100vh", marginRight: "1rem" }}
              alt='illustration'
            />
          </div>
          {/* <h1>Share Photos, Videos and Memes with your Friends...</h1> */}

          <Form h2color='#888888'>
            <h2>Share Photos, Videos and Memes with your Friends..</h2>
            <form
              className='form'
              style={{ marginLeft: "1em" }}
              onSubmit={(e) => onSubmit(e)}
            >
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  onChange={(e) => onChange(e)}
                  value={name}
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  placeholder='Email'
                  name='email'
                  onChange={(e) => onChange(e)}
                  value={email}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  onChange={(e) => onChange(e)}
                  value={password}
                />
              </div>
              <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                Enter a password 8 characters long and use alphanumeric
                characters (!@#1qwGgr)
              </p>
              <div className='form-group'>
                <input
                  type='password'
                  placeholder='Confirm Password'
                  name='password2'
                  onChange={(e) => onChange(e)}
                  value={password2}
                />
              </div>
              <Button btnWidth='100%'>Start!</Button>
              <p style={{ color: "#888888" }}>
                Already have an account?{" "}
                <Link style={{ color: "teal" }} to='/login'>
                  Login
                </Link>
              </p>
            </form>
          </Form>
        </div>
      </div>
    </Card>
  );
};
RegisterForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
  Register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, Register })(RegisterForm);
