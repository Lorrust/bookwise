import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAuthValue } from "../contexts/AuthContext";

import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Home } from "../pages/Home";
import { AddBook } from "../pages/AddBook";
import { Notes } from "../pages/Notes";

const publicRouters = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/sing-up",
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
    path: "/add-book",
    element: <AddBook />,
  },
  {
    path: "/notes",
    element: <Notes />,
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
