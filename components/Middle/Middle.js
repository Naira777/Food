import React from "react";
import Left from "./Left/Left";
import * as Styled from "./styled";
import burger from "../../pics/burger.png";
const Middle = () => {
  return (
    <Styled.Box>
      <Styled.Box1>
        <img
          src="https://image.freepik.com/free-photo/handsome-professional-chef-in-uniform-juggling-with-vegetables-on-white-background_23-2147863842.jpg"
          width="100%"
          height="100%"
          alt="image"
        />
      </Styled.Box1>

      <Styled.Box2>
        {" "}
        <Left />
        <Styled.Pic src={burger} />
      </Styled.Box2>
    </Styled.Box>
  );
};
export default Middle;
