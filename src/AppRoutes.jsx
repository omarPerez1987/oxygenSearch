import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageSearch from "./pages/PageSearch";
import PageFavourites from "./pages/PageFavourites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageSearch />,
  },
  {
    path: "my-photos",
    element: <PageFavourites />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
