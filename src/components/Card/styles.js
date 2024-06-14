import styled from "styled-components";

export const Container = styled.div`
  margin: 10px;
  height: 300px;
  width: 150px;
  // border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  justifiy-content: center;
  text-align: center;

  &:hover {
    transition: 0.5s;
    cursor: pointer;
    transform: scale(1.05);
  }

  .card {
    border-radius: 5px;
    padding: 10px;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
  }

  .info h2 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .info p {
    font-size: 1rem;
    font-weight: 400;
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 100px;
    margin: 0 auto;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  // .card:hover {
  //   transition: 0.5s;
  //   cursor: pointer;
  //   transform: scale(1.05);
  // }
`;
