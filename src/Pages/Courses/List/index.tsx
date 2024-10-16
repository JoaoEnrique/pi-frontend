import { useEffect, useState } from "react";
import { PrimaryButton } from "../../../components/Buttons";
import { Nav, NavLeft } from "../../../components/Nav"
import { SearchForm } from "../../../components/SeachForm";
import axios from "axios";
import './style.css'
import { ErrorMessage, SuccessMessage } from "../../../components/Messages";
import { Helmet } from "react-helmet";

type TheClass = {
    id: number
    name: string;
    period: number;
    coordinator: {
        name: string
    };
}

export function ListCourses(){
    const [classes, setCourses] = useState<TheClass[]>([]);
    const [filteredCourses, setFilteredCourses] = useState<TheClass[]>([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [titleMessage, setTitleMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const URL_API = import.meta.env.VITE_URL_API;

     // Função para buscar
     useEffect(() => {
        async function fetchStudents() {
            try {
                const response = await axios.get(`${URL_API}/courses`);
                setCourses(response.data); // Armazena os dados no estado
                setFilteredCourses(response.data);
            } catch (error: any) {
                console.error("Erro ao buscar os Cursos:", error);
                setTitleMessage("Erro ao buscar os Cursos: ");
                setErrorMessage(error.response.data.error ?? error.message);
            }
        }

        fetchStudents(); // Chama a função ao carregar a página
    }, [URL_API]);

    function redirectEdit(id: number){
        return window.location.href = `edit_aluno.html?id=${id}`;
    }

     // Função para filtrar Cursos
     function handleSearch(query: string) {
        const filtered = classes.filter((theClass) =>
            theClass.name.toLowerCase().includes(query.toLowerCase()) || 
            theClass.coordinator.name.toString().toLowerCase().includes(query.toLowerCase()) || 
            theClass.period.toString().includes(query)
        );
        setFilteredCourses(filtered);
    }

    return (
        <>
            <Helmet>
                <title>Listar Cursos</title>
            </Helmet>
            <Nav></Nav>
            <NavLeft></NavLeft>
            <div className="main-content">
                <h1>Cursos</h1>

                <ErrorMessage title={titleMessage} isVivible={errorMessage.length ? true : false} text={errorMessage}/>
                <SuccessMessage title={titleMessage} isVivible={successMessage.length ? true : false} text={successMessage}/>

                <SearchForm  onSearch={handleSearch}/>

                <div className="users-list">
                    {filteredCourses.map((e, index) => (
                        <div key={index} className="user">
                            <div className="user-info">
                                <h3>{e.name}</h3>
                                <p>Coord: {e.coordinator.name}</p>
                            </div>
                            <div className="text-capitalize user-ra">
                                {e.period}
                            </div>
                        </div>
                    ))}
                </div>


                <PrimaryButton type="submit">Adicionar Aluno</PrimaryButton>
            </div>
        </>
    );
}