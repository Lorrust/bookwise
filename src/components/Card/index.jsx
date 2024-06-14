/* eslint-disable react/prop-types */
import { Container } from "./styles";
export const Card = ({ name, author, img_source }) => {
  return (
    <Container>
      <div className="card">
        <img className="image" src={img_source} alt="Book Cover" />
        <div className="info">
          <h2>{name}</h2>
          <p>{author}</p>
        </div>
      </div>
    </Container>
  );
};
