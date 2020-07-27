import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  background: ${(props) => props.bg || "#7d72c1"};
  color: ${(props) => props.color || "#fff"};
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: ${(props) => props.border || "none"};
  border-radius: 3px;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
`;
export default Button;
