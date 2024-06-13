import "./styles"
import { Container } from "./styles"
export const BookInfo = ({pageName}) => {
    return(
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
            <br/>
            <label>Select an Image:</label>
            <br/>
            <input type="file"/> <br/>
            <div>
                <button type="submit">Confirm</button>
                <button>Cancel</button>
            </div>
            </form>
        </div>
        </Container>
    )
}