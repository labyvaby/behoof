import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
const routerConfig  = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  }, 
  
]); 

export { routerConfig };
