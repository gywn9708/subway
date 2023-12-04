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
  const handleClickNavList = (item: string) => {
    switch (item) {
      case "BREADS":
        console.log(item);
        break;
      case "CHEESE":
        console.log(item);
        break;
      case "EXTRAS":
        console.log(item);
        break;
      case "VEGGIES":
        console.log(item);
        break;
      case "SAUCES":
        console.log(item);
        break;
      case "SEASONINGS":
        console.log(item);
        break;
    }
  };
  return (
    <Container>
      {navArray.map((item) => (
        <Nav onClick={() => handleClickNavList(item)}>{item}</Nav>
      ))}
    </Container>
  );
}

const Container = styled.div`
  background-color: #e9e9e9;
  color: #000000;
  font-size: 24px;
  font-weight: 900;
  height: 100%;
  width: 20%;
`;

const Nav = styled.div`
  padding: 34px 52px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  &:last-child {
    padding-bottom: 66px;
  }
`;

export default SideNavBar;
