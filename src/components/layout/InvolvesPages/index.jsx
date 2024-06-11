import { Container } from "./homebody";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
export const InvolvesPages = ({children}) => {
  return (
    <Container>
      <section>
        <Header />
        <Sidebar />
        <main>
          {children}
        </main>
      </section>
    </Container>
  );
};
