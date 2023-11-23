import styled from "styled-components";

function Header() {
  return <Title>Subway</Title>;
}

const Title = styled.div`
  color: #ffffff;
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 6px;
  padding: 24px;
  background-color: #51964c;
`;
export default Header;
