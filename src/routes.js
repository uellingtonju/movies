import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Watch from "./pages/Watch/index";
import PageNotFound from "./pages/PageNotFound";
import Seach from "./pages/seach";
import Favorites from "./pages/Favorites";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/watch/:id" element={<Watch />}></Route>
        <Route path="/seach" element={<Seach />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
