import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;

  div {
    background: rgb(173, 216, 230, 0.2);
    height: 200px;
    width: 150px;
    border-radius: 1rem;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`

export const ButtonsFotter = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;
`

export const ErrorLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: red
  }
`
