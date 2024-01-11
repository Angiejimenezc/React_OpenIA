import { Route, Switch } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <Switch>
      <Route path="/path-to-component" component={YourComponent} />
      {/* Add more Route components as needed */}
    </Switch>
  );
};
