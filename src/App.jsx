import { AuthProvider } from "./contexts/AuthContext";
import { BooksProvider } from "./contexts/BooksContext";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import { CloseModalProvider } from "./contexts/CloseModalContext";
import { NotesProvider } from "./contexts/NotesContext";
import { Routers } from "./router/router";

import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <AuthProvider >
        <BooksProvider>
          <CategoriesProvider>
            <NotesProvider>
              <CloseModalProvider>
                <Routers />
              </CloseModalProvider>
            </NotesProvider>
          </CategoriesProvider>
        </BooksProvider>
      </AuthProvider>

      <GlobalStyles />
    </>
  )
}

export default App
