import styled from "styled-components";

export const Container = styled.div`
  height: 290px;
  width: 150px;
  border-radius: 5px;
  box-shadow: 0px 0px 20px -3px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease-in-out;
  position: relative;

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 5px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 80%;
    color: #666666;
    /* margin-top: 10px; */
    padding: 10px;
    text-align: center;
    
    h3{
      font-weight: 600;
      /* max-height: 30px; */
      text-overflow: ellipsis;
    }
  }
`;

export const ButtonContainerDiv = styled.div`
  position: absolute;
`;

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  transition: 0.5s;
  
  &:hover {
    cursor: pointer;
  }
`;