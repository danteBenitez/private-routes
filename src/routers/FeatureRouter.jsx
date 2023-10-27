import App from "../pages/App";
import { NotFound } from "../pages/404";
import { PrivateRoute } from "./PrivateRoute";
import { Route, Routes } from "react-router-dom";

export function PrivateRouter() {

  return (
    <PrivateRoute>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PrivateRoute>
  );
}
