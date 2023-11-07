import React from "react";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import PageSearch from "./pages/PageSearch";
import PageFavourites from "./pages/PageFavourites";

const router = createHashRouter([
  {
    path: "/",
    element: <PageSearch />,
  },
  {
    path: "/my-photos",
    element: <PageFavourites />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
