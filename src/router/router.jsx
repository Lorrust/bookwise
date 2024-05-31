import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Login } from "../pages/login";

const routers = createBrowserRouter([{
    path: '/',
    element: <Login />
}])

export const Routers = () => {
  return <RouterProvider router={routers} />
}
