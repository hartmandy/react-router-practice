import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/home";
import Products from "./routes/products";
import RootLayout from "./routes/root";
import ErrorPage from "./routes/error";
import ProductDetail from "./routes/productDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
