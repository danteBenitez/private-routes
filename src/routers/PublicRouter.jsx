import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/404";
import { Login } from "../pages/Login";

export function PublicRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
