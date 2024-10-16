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
import { ListCoorinators } from "./Pages/Coordinators/List";
import { StoreCoordinator } from "./Pages/Coordinators/Store";
import { StoreTeacher } from "./Pages/Teachers/Store";

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
                <Route path="/alunos/novo" element={ <ListStudents/> }/>

                {/* professores */}
                <Route path="/professores" element={ <ListTeachers/> }/>
                <Route path="/professores/novo" element={ <StoreTeacher/> }/>
                <Route path="/professores/editar/:id" element={<StoreTeacher />} />

                {/* coordenadores */}
                <Route path="/coordenadores" element={ <ListCoorinators/> }/>
                <Route path="/coordenadores/novo" element={ <StoreCoordinator/> }/>
                <Route path="/coordenadores/editar/:id" element={<StoreCoordinator />} />

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