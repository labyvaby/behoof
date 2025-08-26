import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import Home from '../pages/Home';
import  Productgroup  from '../pages/Productgroup';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, 
    children: [
      {
        index: true,
        element: <Home />, 
      }, 
       {
        path: "Productgroup",   // 👈 сюда мы заходим через /products
        element: <Productgroup />,
      },
    ],
  },
]);
