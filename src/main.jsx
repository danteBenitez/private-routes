import React from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "./routers/AppRouter";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  </React.StrictMode>
);
