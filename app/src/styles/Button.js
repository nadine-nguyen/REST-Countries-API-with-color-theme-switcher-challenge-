import styled from 'styled-components';

const Button = styled.button`
  border: none;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1em;
  background-color: ${(props) => props.theme.element};
  color: ${(props) => props.theme.text};
  padding: 10px 15px;
  cursor: pointer;
`;

export default Button;
