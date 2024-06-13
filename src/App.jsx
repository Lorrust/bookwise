import { AuthProvider } from "./contexts/AuthContext";
import { Routers } from "./router/router";

import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <AuthProvider >
        <Routers />
      </AuthProvider>

      <GlobalStyles />
    </>
  )
}

export default App
