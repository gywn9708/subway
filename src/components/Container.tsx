import React from "react";
import styled from "styled-components";

function Container({ children }: any) {
  return <Wrapper>{children}</Wrapper>;
}
const Wrapper = styled.div`
  display: flex;
`;
export default Container;
