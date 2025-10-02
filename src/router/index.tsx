import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import Home from '../pages/Home';
import  Productgroup  from '../pages/Productgroup';  
import ProductInfo from '../pages/ProductInfo';  
import PageReviews from '../pages/PageReviews'; 
import NotFound from '../pages/NotFound'; 
import Comparison from '../pages/Comparison/Sections/Comparison/Comparison';
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
      {
        path: "ProductInfo",   // 👈 сюда мы заходим через /products
        element: <ProductInfo />,
      }, 
      { 
        path: "PageReviews",   // 👈 сюда мы заходим через /products
        element: <PageReviews />,
      }, 
      { 
        path: "NotFound",   // 👈 сюда мы заходим через /products
        element: <NotFound />,
      }, 
      { 
        path: "Comparison",   // 👈 сюда мы заходим через /products
        element: <Comparison />,
      }
    ],
  },
]);
