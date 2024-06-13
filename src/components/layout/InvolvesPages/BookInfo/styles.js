import styled from "styled-components";

export const Container = styled.div`
  .bookinfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 10px;

    input {
      width: 100%;
      padding: 7px;
      margin-bottom: 15px;
      border-radius: 5px;
      border: 1px solid #000;
    }

    input[type="file"] {
      margin-bottom: 5px;
      border: 0;
    }

    #file-input {
      display: none;
    }

    #file-input-label {
      padding: 5px;
      background-color: #f0f0f0;
      border: 1px solid #000;
      border-radius: 5px;
      cursor: pointer;
      display: inline-block;
    }

    img {
      max-width: 65%;
      height: auto;
      margin-bottom: 15px;
      border: 1px solid #000;
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
      padding: 7px;
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
`;