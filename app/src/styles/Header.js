import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.text};
`;

const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.element};
  height: 100%;
  width: 100%;
`;

export { Header, HeaderContainer };
