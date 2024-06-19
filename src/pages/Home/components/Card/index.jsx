import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import PropTypes from "prop-types";
import * as Styled from "./styles";

export const Card = ({ title, author, imageUrl }) => {
  return (
    <Styled.Container>
      <Styled.ButtonContainerDiv>
        <Styled.ButtonContainer>
          <HeartIcon />
        </Styled.ButtonContainer>
      </Styled.ButtonContainerDiv>
      <img src={imageUrl} alt="Book Cover" />
      <div>
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </Styled.Container>
  );
};
