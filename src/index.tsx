import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import { About } from "pages/About";
import { Header } from "components/Header";
import { Home } from "pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

//@ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

function HeaderWrapper() {
  return (
    <div className="flex flex-col min-h-screen dark">
      <Header />
      <Outlet />
    </div>
  );
}
