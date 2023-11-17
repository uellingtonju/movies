import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Watch from "./pages/Watch/index";
import PageNotFound from "./pages/PageNotFound";
import Seach from "./pages/seach";
import Favorites from "./pages/Favore";
import FavoritesProvider from "./components/contexts/Favorites";
import VideoCadastre from "./pages/VideoCadastre";

function AppRoutes() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/watch/:id" element={<Watch />}></Route>
          <Route path="/seach" element={<Seach />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/cadastre" element={<VideoCadastre />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
