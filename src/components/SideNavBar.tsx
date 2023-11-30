import styled from "styled-components";

function SideNavBar() {
  const navArray = [
    "BREADS",
    "CHEESE",
    "EXTRAS",
    "VEGGIES",
    "SAUCES",
    "SEASONINGS",
  ];
  return (
    <Container>
      {navArray.map((a) => (
        <Nav>{a}</Nav>
      ))}
    </Container>
  );
}

const Container = styled.div`
  background-color: #e9e9e9;
  color: #000000;
  font-size: 24px;
  height: 100%;
  width: 20%;
`;

const Nav = styled.div`
  height: 96px;
`;

export default SideNavBar;
