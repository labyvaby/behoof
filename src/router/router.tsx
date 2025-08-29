import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Home";
import Productgroup from "../pages/Productgroup";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />, // Главная страница
      },
      {
        path: "Productgroup", // 👈 сюда мы заходим через /products
        element: <Productgroup />,
      },
      
    ],
  },
]);

export { routerConfig };
