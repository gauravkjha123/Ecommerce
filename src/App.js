import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavBar } from './components/navbar';
import { ProductListPage } from './pages/productListPage';
import { AddProductPage } from './pages/addProductPage';
import { ProductDetaills } from './pages/ProductDetailPage';
import { CartItem } from './components/cartItem';
import { PriceDetails } from './components/priceDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { index: true, element: <PriceDetails /> },
      {path:"add",element:<AddProductPage/>},
      {path:"update/:id",element:<ProductDetaills/>},
      
    ]
  }
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
