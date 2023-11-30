import React from "react";
import "./App.css";
import DetailHeader from "./components/DetailHeader";
import SideNavBar from "./components/SideNavBar";
// import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <DetailHeader />
      <SideNavBar />
    </div>
  );
}

export default App;
