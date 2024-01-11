import { Router, RouterProvider } from "react-router-dom";
import { DashboardLayout } from "./presentation/layouts/DashboardLayout";
import { Children } from "react";

export const ReactOIA = () => {
  return (
    <Router>
      <RouterProvider router={Children}>
        <DashboardLayout />
      </RouterProvider>
    </Router>
  );
};
