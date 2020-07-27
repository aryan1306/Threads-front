import styled from "styled-components";

const Form = styled.form`
  .form .form-group {
    margin: 1.2rem 0;
  }

  .form .form-text {
    display: block;
    margin-top: 0.3rem;
    color: #888;
  }

  .form input[type="text"],
  .form input[type="email"],
  .form input[type="password"],
  .form input[type="date"],
  .form select,
  .form textarea {
    display: block;
    width: 100%;
    padding: 0.4rem;
    font-size: 1.2rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .form input:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;
export default Form;
