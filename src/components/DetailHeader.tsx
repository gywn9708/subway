import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function DetailHeader() {
  return (
    <>
      <Header>
        <PrevButton>
          <ArrowBackIosIcon />
        </PrevButton>
        <Title>Choose Toppings</Title>
      </Header>
    </>
  );
}

const Header = styled.div`
  color: #ffffff;
  display: flex;
  font-size: 35px;
  font-weight: bold;
  padding: 24px;
  background-color: #51964c;
  width: 100%;
  justify-content: center;
`;
const PrevButton = styled.button`
  background-color: #51964c;
  border: none;
  color: #ffffff;
  cursor: pointer;
  justify-content: left;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
`;
export default DetailHeader;
