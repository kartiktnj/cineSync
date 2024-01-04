import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  console.log("is user");
  return (
    <Routes>
      <Route
        {...rest}
        render={(props) => {
          console.log("user", user);
          if (!user) {
            return children;
          }

          if (user) {
            console.log(user, loggedInPath);
            return <Navigate to={{ pathname: loggedInPath }} />;
          }

          return null;
        }}
      />
    </Routes>
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Routes>
      <Route
        {...rest}
        render={({ location }) => {
          if (user) {
            return children;
          }

          if (!user) {
            return <Navigate to={{ pathname: "signin", state: { from: location } }} />;
          }

          return null;
        }}
      />
    </Routes>
  );
}
