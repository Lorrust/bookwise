import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';
import { Home } from '../pages/Home';
import { AddBook } from '../pages/AddBook';
import { Notes } from '../pages/Notes';

const routers = createBrowserRouter([{
    path: '/',
    element: <Login />
}, {
  path: '/sing-up',
  element: <SignUp />
}, {
  path: '/home',
  element: <Home />
}, {
    path: '/add-book',
    element: <AddBook />
  
}, {
  path: '/notes',
  element: <Notes />
}])

export const Routers = () => {
  return <RouterProvider router={routers} />
}
