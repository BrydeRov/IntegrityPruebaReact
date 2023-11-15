// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // JS

import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Page Components
import Login from './Pages/Login';
import ProductosIndex from './Pages/Table/Index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: '/Productos/Inicio',
    element: <ProductosIndex />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);