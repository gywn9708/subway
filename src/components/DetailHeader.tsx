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
  margin-bottom: 6px;
  padding: 24px;
  background-color: #51964c;
  justify-content: center;
`;
const PrevButton = styled.div`
  border: none;
  cursor: pointer;
  justify-content: left;
`;
const Title = styled.div`
  justify-content: center;
`;
export default DetailHeader;
