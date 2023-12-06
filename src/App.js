import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavBar } from "./components/navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductListPage } from "./pages/productListPage.js";
import { AddProductPage } from "./pages/addProductPage";
import { CartPage } from "./pages/cartPage";
import { ProductDetaills } from "./pages/ProductDetailPage";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/reducers/productReducer.js";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { index: true, element: <ProductListPage /> },
      { path: "add", element: <AddProductPage /> },
      { path: "product-details/:id", element: <ProductDetaills /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const fetchAlbumsFromApi = async () => {
    let res = await fetch(
      "https://my-json-server.typicode.com/gauravkjha123/Ecommerce/products"
    );
    let data = await res.json();
    dispatch(fetchProducts(data));
  };
  useEffect(() => {
    fetchAlbumsFromApi();
  }, []);
  return (
    <>
      <div className="App">
        <ToastContainer />
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
