import styled from "styled-components";

function Header() {
  return <Title>Subway</Title>;
}

const Title = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  color: #ffffff;
  font-size: 35px;
  font-weight: bold;
  padding: 24px;
  background-color: #51964c;
  text-align: center;
  z-index: 1;
`;
export default Header;
