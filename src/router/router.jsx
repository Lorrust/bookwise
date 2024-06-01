import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';
import { Home } from '../pages/Home';

const routers = createBrowserRouter([{
    path: '/',
    element: <Login />
}, {
  path: '/cadastro',
  element: <SignUp />
}, {
  path: '/home',
  element: <Home />
}])

export const Routers = () => {
  return <RouterProvider router={routers} />
}
