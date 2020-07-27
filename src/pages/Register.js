import React, { useState } from "react";
import Form from "../components/Form";
import Button from "../components/Button";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "./../redux/actions/alert_actions";
import { Register } from "../redux/actions/auth_actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Card = styled.div`
  h1 {
    font-size: 2.5rem;
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0.03, rgb(35, 118, 174)),
      color-stop(0.52, rgb(39, 128, 177)),
      color-stop(0.76, rgb(42, 24, 173))
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    text-align: center;
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
    return <Redirect to='/profile' />;
  }
  return (
    <Card>
      <h1>Share Photos, Videos and Memes...</h1>
      <h2>Sign Up</h2>
      <p>
        <i className='fas fa-user-plus'></i> Create your Account
      </p>
      <Form>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
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
          <div className='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              onChange={(e) => onChange(e)}
              value={password2}
            />
          </div>
          <Button>Sign Up!</Button>
          <p>
            Already have an account? <Link to='/login'>Login</Link>
          </p>
        </form>
      </Form>
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
