import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

export default function App() {
  const user = { name: "Kartik" };
  return (
    <Router>
      <IsUserRedirect
        exact
        path={ROUTES.SIGN_IN}
        user={user}
        loggedInPath={ROUTES.BROWSE}
        element={<Signin />}
      />
      <IsUserRedirect
        exact
        path={ROUTES.SIGN_UP}
        user={user}
        loggedInPath={ROUTES.BROWSE}
        element={<Signup />}
      />
      <ProtectedRoute exact path={ROUTES.BROWSE} user={user} element={<Browse />} />
      <IsUserRedirect
        exact
        path={ROUTES.HOME}
        user={user}
        loggedInPath={ROUTES.BROWSE}
        element={<Home />}
      />
    </Router>
  );
}
