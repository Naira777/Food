import React from "react";
import First from "../components/First/First";
import Last from "../components/Last/Last";
import Middle from "../components/Middle/Middle";
import * as Styled from "./styled";

function Home() {
  return (
    <Styled.AppContent>
      <First />
      <Middle />
      <Last />
    </Styled.AppContent>
  );
}

export default Home;
