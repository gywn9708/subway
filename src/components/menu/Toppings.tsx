import styled from "styled-components";

const Toppings = () => {
  return (
    <Container>
      <Topping key={1}>
        <ToppingImg>1</ToppingImg>
        <ToppingInfo>
          <ToppingTitle>Lettuce</ToppingTitle>
          <ToppingKcal>5kcal</ToppingKcal>
        </ToppingInfo>
        <ToppingCheck>
          <input type="checkbox" />
        </ToppingCheck>
      </Topping>
      <Topping key={2}>
        <ToppingImg>1</ToppingImg>
        <ToppingInfo>
          <ToppingTitle>Lettuce</ToppingTitle>
          <ToppingKcal>5kcal</ToppingKcal>
        </ToppingInfo>
      </Topping>
      <Topping key={3}>
        <ToppingImg>1</ToppingImg>
        <ToppingInfo>
          <ToppingTitle>Lettuce</ToppingTitle>
          <ToppingKcal>5kcal</ToppingKcal>
        </ToppingInfo>
      </Topping>
      <Topping key={4}>
        <ToppingImg>1</ToppingImg>
        <ToppingInfo>
          <ToppingTitle>Lettuce</ToppingTitle>
          <ToppingKcal>5kcal</ToppingKcal>
        </ToppingInfo>
      </Topping>
      <Topping key={5}>
        <ToppingImg>1</ToppingImg>
        <ToppingInfo>
          <ToppingTitle>Lettuce</ToppingTitle>
          <ToppingKcal>5kcal</ToppingKcal>
        </ToppingInfo>
      </Topping>
      <Topping key={6}>
        <ToppingImg>1</ToppingImg>
        <ToppingInfo>
          <ToppingTitle>Lettuce</ToppingTitle>
          <ToppingKcal>5kcal</ToppingKcal>
        </ToppingInfo>
      </Topping>
      <Topping key={7}>
        <ToppingImg>1</ToppingImg>
        <ToppingInfo>
          <ToppingTitle>Lettuce</ToppingTitle>
          <ToppingKcal>5kcal</ToppingKcal>
        </ToppingInfo>
      </Topping>
    </Container>
  );
};
export default Toppings;

const Container = styled.div`
  width: 50%;
  height: 100%;
  background-color: yellow;
  justify-contents: left;
`;
const Topping = styled.div`
  display: flex;
  flex-direction: rows;
  width: 100%;
  height: 14.28%;
  padding: 5px 40px;
`;
const ToppingImg = styled.div`
  background-color: purple;
  width: 85px;
  height: 85px;
`;

const ToppingInfo = styled.div`
  background-color: #4073e9;
  width: 93px;
  height: 55px;
  margin: 15px 30px;
  display: flex;
  flex-direction: column;
`;

const ToppingTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  text-align: left;
`;

const ToppingKcal = styled.div`
  font-size: 20px;
  color: #d5d5d5;
  text-align: left;
`;

const ToppingCheck = styled.div`
  width: 40px;
  height: 40px;
  background-color: #51964c;
  margin: 23px 40px 23px 52px;
  border-radius: 50%;
`;
