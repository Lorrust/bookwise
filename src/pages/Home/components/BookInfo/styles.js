import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

export const Container = styled.div`
  display: flex;
  align-items: center; 
  .bookinfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    background-color: lightblue;

    input {
      width: 100%;
      padding: 7px;
      margin-bottom: 15px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    img {
      max-width: 50%;
      height: auto;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    div {
      display: flex;
      justify-content: space-around;
      margin-top: 15px;
    }

    button {
      display: inline-flex;
      width: auto;
      padding: 7px 15px;
      margin-bottom: 5px;
      border-radius: 5px;
      border: 1px solid #000;
      cursor: pointer;
      background-color: #f0f0f0;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #d0d0d0;
      }
    }
  }

  #Adicionar {
    font-size: 40px;
    width: 45px;
    height: 45px;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      background-color: rgb(75, 193, 210, 0.3);
    }
  }
`;

export const StyledDialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
`;

export const StyledDialogContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 90%;
  max-width: 500px;
  z-index: 1000;
`;
