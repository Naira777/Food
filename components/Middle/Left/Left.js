import React from "react";
import * as Styled from "./styled";

const Left = () => {
  return (
    <>
      <Styled.Left>
        <Styled.Header>
          {" "}
          Red <Styled.TextRed>Chili</Styled.TextRed> <br />
          For Getting Real <br />
          Taste <br />
        </Styled.Header>

        <Styled.Text> DISCOVER OUR FOOD</Styled.Text>

        <Styled.Line> </Styled.Line>
        <Styled.Text1>
          {" "}
          Lorem Ipsum is simply dummy text of th printing and <br />
          typesetting industry. Lorem Ipsum has been the <br />
          industry's standard dummy text ever since the 1500s, when <br />
          an unknown printer took a galley of type and scrambled
          <br />
          it to make a type specimen book.
        </Styled.Text1>

        <Styled.BoxRed>
          <Styled.Text2>
            {" "}
            READ MORE
            <b>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
                fill="#FD2E55"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>{" "}
            </b>
          </Styled.Text2>
        </Styled.BoxRed>
      </Styled.Left>
    </>
  );
};
export default Left;
