import { InvolvesPages } from "../../components/layout/InvolvesPages";

export const AddBook = () => {
  return (
    <InvolvesPages>
        <h2>Add a New Book:</h2>
        <div>
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
          <br/>
          <label>Select an Image:</label>
          <br/>
          <input type="file"/> <br/>
          <button type="submit">Add</button>
        </div>
    </InvolvesPages>
  );
};
