import "./App.css";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/menu/Menu";
import SideNavBar from "./components/SideNavBar";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Header />

      <Container>
        <SideNavBar />

        <MenuWrapper>
          <Menu />
        </MenuWrapper>
      </Container>

      <Footer />
    </div>
  );
}

export default App;

const MenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 768px;
  overflow: scroll;
  display: flex;
  justify-content: center;
  margin: 50px 0;
`