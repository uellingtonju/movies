import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Watch from "./pages/Watch";
import PageNotFound from "./pages/PageNotFound";
import Seach from "./pages/seach";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home />}></Route>
                <Route path="/watch/:id" element={ <Watch />}></Route>
                <Route path="/seach" element={ <Seach />}></Route>
                <Route path="*" element={ <PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;