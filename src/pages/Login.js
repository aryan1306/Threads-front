import React, { useState } from "react";
import PropTypes from "prop-types";
import { login } from "./../redux/actions/auth_actions";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import Form from "./../components/Form";
import Button from "./../components/Button";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  if (isAuthenticated) {
    return <Redirect to='/profile' />;
  }
  return (
    <Form size='2.5rem' pSize='0.85rem' pColor='#757575'>
      <h2>Login</h2>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email'
            onChange={(e) => onChange(e)}
            name='email'
            value={email}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            onChange={(e) => onChange(e)}
            name='password'
            value={password}
          />
          <Button style={{ marginTop: "1rem" }}>Login</Button>
          <p>
            Don't have an Account? <Link to='/'>Sign Up</Link>
          </p>
        </div>
      </form>
    </Form>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
