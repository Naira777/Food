import React from "react";
import * as Styled from "./styled";

const HeaderFirst = () => {
  return (
    <Styled.Content>
      <Styled.Cycle1>
        <Styled.Svg2
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="17"
          fill="white"
          class="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </Styled.Svg2>
      </Styled.Cycle1>

      <Styled.Box>
        <Styled.Text>
          LEEDS <Styled.Red>RED</Styled.Red> CHILI RESTAURANT
        </Styled.Text>

        <Styled.Text1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry, Lorem Ispum.
        </Styled.Text1>

        <Styled.Box1>
          <Styled.OrderText>ORDER NOW</Styled.OrderText>
        </Styled.Box1>
      </Styled.Box>
      <Styled.Cycle2>
        <Styled.Svg1
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="17"
          fill="white"
          class="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </Styled.Svg1>
      </Styled.Cycle2>
    </Styled.Content>
  );
};
export default HeaderFirst;
