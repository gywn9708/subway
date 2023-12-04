import React from "react";
import "./App.css";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/menu/Menu";
import SideNavBar from "./components/SideNavBar";

function App() {
  return (
    <div className="App">
      <Header />

      <Container>
        <SideNavBar />
        <Menu />
      </Container>

      <Footer />
    </div>
  );
}

export default App;
