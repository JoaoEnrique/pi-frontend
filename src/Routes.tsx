import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "./Pages/Index";
import { HomeTeacher } from "./Pages/HomeTeacher";
import { NotFound } from "./Pages/Errors/NotFound";
import { HomeCoordinator } from "./Pages/HomeCoordinator";

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Index/> }/>

                <Route path="/professor/dashboard" element={ <HomeTeacher/> }/>
                <Route path="/coordenador/dashboard" element={ <HomeCoordinator/> }/>

                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    );
}