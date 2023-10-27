import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./FeatureRouter";
import { NotFound } from "../pages/404";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app/*" element={<PrivateRouter />} />
        <Route path="/*" element={<PublicRouter />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
