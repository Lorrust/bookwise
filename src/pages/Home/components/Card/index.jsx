import { HeartIcon,HeartFilledIcon } from "@radix-ui/react-icons";
import * as Styled from "./styles";
export const Card = ({ name, author, img_source }) => {
  return (
    <Styled.Container>
      <Styled.ButtonContainerDiv>
        <Styled.ButtonContainer>
          <HeartIcon />
        </Styled.ButtonContainer> 
      </Styled.ButtonContainerDiv>
      <img src={img_source} alt="Book Cover" />
      <div>
        <h3>{name}</h3>
        <p>{author}</p>
      </div>
    </Styled.Container>
  );
};
