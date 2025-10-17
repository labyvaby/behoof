import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import Home from '../pages/Home';
import Productgroup from '../pages/Productgroup';
import ProductInfo from '../pages/ProductInfo';
import PageReviews from '../pages/PageReviews';
import NotFound from '../pages/NotFound';
import Comparison from '../pages/Comparison/Sections/Comparison/Comparison';
import Categories from '../pages/Categories/Sections/Categories/Categories';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Login from '../pages/Login/Sections/Login/Login';
import Profile from '../pages/Profile/Sections/Profile/Profile';
import ArticlePage from '../pages/ArticlePage/Sections/ArticlePage/ArticlePage';
import Articles from '../pages/Articles/Sections/BlogPage/BlogPage'
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
      },
      {
        path: "Categories",   // 👈 сюда мы заходим через /products
        element: <Categories />,
      },
      {
        path: "PrivacyPolicy",   // 👈 сюда мы заходим через /products
        element: <PrivacyPolicy />,
      },
      {
        path: "Login",   // 👈 сюда мы заходим через /products
        element: <Login onLogin={function (_email: string, _password: string): void {
          throw new Error('Function not implemented.');
        }} />,
      },
      {
        path: "Profile",   // 👈 сюда мы заходим через /products
        element: <Profile />,
      },
      {
        path: "ArticlePage",   // 👈 сюда мы заходим через /products
        element: <ArticlePage />,
      },
      {
        path: "Articles",   // 👈 сюда мы заходим через /products
        element: <Articles />,
      },


    ],
  },
]);
