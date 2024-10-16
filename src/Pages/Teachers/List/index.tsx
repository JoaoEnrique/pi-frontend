import { useEffect, useState } from "react";
import { PrimaryButton } from "../../../components/Buttons";
import { Nav, NavLeft } from "../../../components/Nav"
import { SearchForm } from "../../../components/SeachForm";
import axios from "axios";
import './style.css'
import { ErrorMessage, SuccessMessage } from "../../../components/Messages";
import { Helmet } from "react-helmet";

type Student = {
    id: number
    code: number
    name: string;
    email: string;
}

export function ListTeachers(){
    const [students, setStudents] = useState<Student[]>([]);
    const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [titleMessage, setTitleMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const URL_API = import.meta.env.VITE_URL_API;

     // Função para buscar a lista de alunos na API
     useEffect(() => {
        async function fetchStudents() {
            try {
                const response = await axios.get(`${URL_API}/teachers`);
                setStudents(response.data); // Armazena os dados no estado
                setFilteredStudents(response.data);
            } catch (error: any) {
                console.error("Erro ao buscar os alunos:", error);
                setTitleMessage("Erro ao buscar os alunos: ");
                setErrorMessage(error.response.data.error ?? error.message);
            }
        }

        fetchStudents(); // Chama a função ao carregar a página
    }, [URL_API]);


    function redirectEdit(id: number){
        return window.location.href = `edit_aluno.html?id=${id}`;
    }

     // Função para filtrar alunos
     function handleSearch(query: string) {
        const filtered = students.filter((student) =>
            student.name.toLowerCase().includes(query.toLowerCase()) || 
            student.email.toLowerCase().includes(query.toLowerCase()) || 
            student.code.toString().includes(query)
        );
        setFilteredStudents(filtered);
    }

    return (
        <>
            <Helmet>
                <title>Listar Professores</title>
            </Helmet>
            <Nav></Nav>
            <NavLeft></NavLeft>
            <div className="main-content">
                <h1>Professores</h1>

                <ErrorMessage title={titleMessage} isVivible={errorMessage.length ? true : false} text={errorMessage}/>
                <SuccessMessage title={titleMessage} isVivible={successMessage.length ? true : false} text={successMessage}/>

                <SearchForm  onSearch={handleSearch}/>

                <div className="users-list">
                    {filteredStudents.map((e, index) => (
                        <div key={index} className="user">
                            <div className="user-info">
                                <h3>{e.name}</h3>
                                <p>{e.email}</p>
                            </div>
                            <div className="user-ra">
                                RM: {e.code}
                                <img src="img/alt_user.png" alt="Perfil"/>
                            </div>
                        </div>
                    ))}
                </div>


                <PrimaryButton type="submit">Adicionar Professor</PrimaryButton>
            </div>
        </>
    );
}