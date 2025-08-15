import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import Home from '../pages/Home';

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, 
    children: [
      {
        index: true,
        element: <Home />, // Главная страница
      },
    ],
  },
]);

export { routerConfig };
