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
    course: {
        name: string;
        is_annual: boolean;
    };
    teacher: {
        name: string
    };
    semester: number;
}

export function ListClasses(){
    const [classes, setClasses] = useState<TheClass[]>([]);
    const [filteredClasses, setFilteredClasses] = useState<TheClass[]>([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [titleMessage, setTitleMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const URL_API = import.meta.env.VITE_URL_API;

     // Função para buscar a lista de Turmas na API
     useEffect(() => {
        async function fetchStudents() {
            try {
                const response = await axios.get(`${URL_API}/classes`);
                setClasses(response.data); // Armazena os dados no estado
                setFilteredClasses(response.data);
            } catch (error: any) {
                console.error("Erro ao buscar os Turmas:", error);
                setTitleMessage("Erro ao buscar os Turmas: ");
                setErrorMessage(error.response.data.error ?? error.message);
            }
        }

        fetchStudents(); // Chama a função ao carregar a página
    }, [URL_API]);

    function redirectEdit(id: number){
        return window.location.href = `edit_aluno.html?id=${id}`;
    }

     // Função para filtrar Turmas
     function handleSearch(query: string) {
        const filtered = classes.filter((theClass) =>
            theClass.course.name.toLowerCase().includes(query.toLowerCase()) || 
            theClass.semester.toString().toLowerCase().includes(query.toLowerCase()) || 
            theClass.teacher.name.toString().includes(query)
        );
        setFilteredClasses(filtered);
    }

    return (
        <>
            <Helmet>
                <title>Listar Turmas</title>
            </Helmet>
            <Nav></Nav>
            <NavLeft></NavLeft>
            <div className="main-content">
                <h1>Turmas</h1>

                <ErrorMessage title={titleMessage} isVivible={errorMessage.length ? true : false} text={errorMessage}/>
                <SuccessMessage title={titleMessage} isVivible={successMessage.length ? true : false} text={successMessage}/>

                <SearchForm  onSearch={handleSearch}/>

                <div className="users-list">
                    {filteredClasses.map((e, index) => (
                        <div key={index} className="user">
                            <div className="user-info">
                                <h3>{e.course.name}</h3>
                                <p>Prof: {e.teacher.name}</p>
                            </div>
                            <div className="text-capitalize user-ra">
                                {e.course.is_annual ? 'Ano' : "Semestre"} {e.semester} 
                            </div>
                        </div>
                    ))}
                </div>


                <PrimaryButton type="submit">Adicionar Aluno</PrimaryButton>
            </div>
        </>
    );
}