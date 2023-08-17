import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/home";
import Products from "./routes/products";
import RootLayout from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/products", element: <Products /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
