import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

function SideNavBar() {
  let breadData: string[] = [];
  const getMenus = () => {
    let totalData: any[] = [];
    axios.get("http://localhost:8000/menu").then((response) => {
      console.log(response.data);
      totalData = [...response.data];
    });
    return totalData;
  };
  // totalData.map((a) => console.log(a.category));
  // for (let i = 0; i < totalData.length; i++) {
  //   console.log(totalData[i]);
  //   if (totalData[i].category === "breads") {
  //     breadData.push(totalData[i]);
  //     console.log(totalData[i]);
  //   }
  // }
  console.log(breadData);

  const [btnActive, setBtnActive] = useState<string>("");
  const navArray = [
    "BREADS",
    "CHEESE",
    "EXTRAS",
    "VEGGIES",
    "SAUCES",
    "SEASONINGS",
  ];

  const handleClickNavList = (item: string) => {
    setBtnActive(item);
    console.log(btnActive);
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
  const renderSubjects = (item: string) => {
    if (item === "") return null;
    if (item === "BREAD") {
      return <></>;
    }
  };
  useEffect(() => {
    breadData = getMenus()
      .filter((a) => a.category === "breads")
      .slice();
  }, []);
  return (
    <Container>
      {navArray.map((item, idx) => (
        <Nav
          isSelected={item === btnActive}
          onClick={(e: any) => {
            handleClickNavList(item);
          }}
        >
          {item}
        </Nav>
      ))}
      {renderSubjects(btnActive)}
    </Container>
  );
}

const Container = styled.div`
  background-color: #f5f5f5;
  color: #000000;
  font-size: 24px;
  font-weight: 900;
  height: 100%;
  width: 20%;
`;

const Nav = styled.div<{ isSelected?: boolean }>`
  padding: 34px 52px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  border-bottom: 1px solid #e9e9e9;
  border-right: ${(props) => (props.isSelected ? "none" : "1px solid #e9e9e9")};
  color: ${(props) => (props.isSelected ? "#51964c" : "#000000")};
  background-color: ${(props) => (props.isSelected ? "#FFFFFF" : "")};
  &:last-child {
    border-bottom: none;
  }
`;

export default SideNavBar;
