import NovoVideo from "./pages/NovoVideo";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes () {

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/NovoVideo" element={<NovoVideo />}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;