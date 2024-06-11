import Footer from "./components/footer/Footer.jsx";
import { Routers } from "./router/router";

import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <Routers />

      <GlobalStyles />
      <Footer />
    </>
  )
}

export default App
