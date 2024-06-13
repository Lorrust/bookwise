import { Container } from "./homebody";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { SearchFilter } from "./SearchFilter";

export const InvolvesPages = ({
  children,
  title,
  catalog_name1,
  catalog_name2,
  catalog_name3,
}) => {
  return (
    <Container>
      <Header />
      <Sidebar />
      <main>
        <SearchFilter />
        <section className="container">
          {/* {children} */}
          {/* <h1>{title}</h1> */}
          <div className="catalog">
            <div className="favorite">
              <h2>{catalog_name1}</h2>
              <div className="contain">{children}</div>
            </div>
            <div className="recently-added">
              <h2>{catalog_name2}</h2>
              <div className="contain">{children}</div>
            </div>
            <div className="reading">
              <h2>{catalog_name3}</h2>
              <div className="contain">{children}</div>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
};
