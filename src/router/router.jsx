import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';
import { Home } from '../pages/Home';
import { AddBook } from '../pages/AddBook';

const routers = createBrowserRouter([{
    path: '/',
    element: <Login />
}, {
  path: '/cadastro',
  element: <SignUp />
}, {
  path: '/home',
  element: <Home />
}, {
    path: '/addlivro',
    element: <AddBook />
  
}])

export const Routers = () => {
  return <RouterProvider router={routers} />
}
