import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import { About } from "pages/About";
import { Header } from "components/Header";
import { Home } from "pages/Home";
import { Footer } from "components/Footer";
import { DemoReel, videosOtherWorks, videosPrimary } from "pages/DemoReel";

const router = createHashRouter([
  {
    path: "/",
    element: <AppWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/demo-reel",
        element: <DemoReel videos={videosPrimary} />,
      },
      {
        path: "/other-works",
        element: <DemoReel videos={videosOtherWorks} />,
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

function AppWrapper() {
  return (
    <div className="flex flex-col min-h-screen dark">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
