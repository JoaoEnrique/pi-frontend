import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "./Pages/Index";
import { HomeTeacher } from "./Pages/HomeTeacher";

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Index/> }/>
                <Route path="/professor/dashboard" element={ <HomeTeacher/> }/>
            </Routes>
        </Router>
    );
}