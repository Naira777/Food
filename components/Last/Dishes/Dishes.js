import React from "react";
import styled from "styled-components";
import * as Styled from "./styled";
import pic from "../../../pics/plate.jpg";
const Dishes = () => {
  return (
    <Styled.Box>
      <Styled.Red>
        <Styled.Price>$20</Styled.Price>
      </Styled.Red>

      <Styled.Pic src={pic}></Styled.Pic>

      <Styled.Text> Menu Title Here </Styled.Text>
    </Styled.Box>
  );
};
export default Dishes;
