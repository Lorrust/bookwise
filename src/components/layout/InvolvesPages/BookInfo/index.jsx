import React, { useState } from "react";
import "./styles";
import { Container } from "./styles";

export const BookInfo = ({ pageName }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <Container>
      <div className="bookinfo">
        <h1>{pageName}</h1>
        <form>
          <label>Title:</label>
          <br />
          <input type="text" placeholder="Title" /> <br />
          <label>Author:</label>
          <br />
          <input type="text" placeholder="Author" />
          <br />
          <label>Publisher:</label>
          <br />
          <input type="text" placeholder="Publisher" />
          <br />
          <label id="file-input-label" htmlFor="file-input">
            Select an Image:
          </label>
          <br />
          <input
            type="file"
            id="file-input"
            name="file-input"
            accept="image/png, image/gif, image/jpeg"
            onChange={handleImageChange}
          />
          <br />
          {selectedImage && (
            <img id="blah" src={selectedImage} alt="your image" />
          )}
          <div>
            <button type="submit">Confirm</button>
            <button>Cancel</button>
          </div>
        </form>
      </div>
    </Container>
  );
};
