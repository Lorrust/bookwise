import { useState } from "react";
import * as Styled from "./styles";

export const Note = ({text}) => {
  return (
    <Styled.Container>
      <Styled.Fita />
      <Styled.TextContainer 
        contentEditable="true" 
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </Styled.Container>
  );
};
