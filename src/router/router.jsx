import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAuthValue } from "../contexts/AuthContext";

import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Teste } from "../pages/Teste";
import { Search } from "../pages/Search";

const publicRouters = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <Login />, // Componente para exibir quando a rota não é encontrada
  }
]);

const privateRouters = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/perfil",
    element: <Profile />
  },
  {
    path: "/teste",
    element: <Teste />
  },
  {
    path: "/search",
    element: <Search/>  
  },
  {
    path: "*",
    element: <Home />, // Componente para exibir quando a rota não é encontrada
  }
]);

export const Routers = () => {
  const { logged } = useAuthValue();

  return (
    <RouterProvider router={logged ? privateRouters : publicRouters} />
  );
};
