import { BrowserRouter as Router } from "react-router-dom";
import { DashboardLayout } from "./presentation/layouts/DashboardLayout";

export const ReactGPT = () => {
  return (
    <Router>
      <div>
        <DashboardLayout />
      </div>
    </Router>
  );
};
