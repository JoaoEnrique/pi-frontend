import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "./Pages/Index";
import { HomeTeacher } from "./Pages/HomeTeacher";
import { NotFound } from "./Pages/Errors/NotFound";
import { HomeCoordinator } from "./Pages/HomeCoordinator";
import { ListStudents } from "./Pages/Students/List";
import { ListClasses } from "./Pages/Classes/List";
import { ListCourses } from "./Pages/Courses/List";
import { StoreCourse } from "./Pages/Courses/Store";
import { HomeAdmin } from "./Pages/HomeAdmin";
import { ListTeachers } from "./Pages/Teachers/List";

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Index/> }/>

                <Route path="/professor/dashboard" element={ <HomeTeacher/> }/>
                <Route path="/coordenador/dashboard" element={ <HomeCoordinator/> }/>
                <Route path="/admin/dashboard" element={ <HomeAdmin/> }/>

                {/* alunos */}
                <Route path="/alunos" element={ <ListStudents/> }/>

                {/* professores */}
                <Route path="/professores" element={ <ListTeachers/> }/>

                {/* turmas */}
                <Route path="/turmas" element={ <ListClasses/> }/>

                {/* cursos */}
                <Route path="/cursos" element={ <ListCourses/> }/>
                <Route path="/cursos/novo" element={ <StoreCourse/> }/>

                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    );
}