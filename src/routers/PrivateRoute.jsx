import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export function PrivateRoute({ children }) {
  const { isLogged } = useContext(AuthContext);

  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  return children;
}