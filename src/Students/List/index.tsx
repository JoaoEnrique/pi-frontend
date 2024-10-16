import { useEffect, useState } from "react";
import { PrimaryButton } from "../../components/Buttons";
import { Nav, NavLeft } from "../../components/Nav"
import { SearchForm } from "../../components/SeachForm";
import axios from "axios";
import './style.css'
import { ErrorMessage, SuccessMessage } from "../../components/Messages";

type Student = {
    id: number
    code: number
    name: string;
    email: string;
}

export function ListStudents(){
    const [textFile, setTextFile] = useState("<p>Arraste o arquivo para esta <i>zona</i>.</p>");
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
                const response = await axios.get(`${URL_API}/students`);
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


    function dropHandler(ev: React.DragEvent<HTMLDivElement>) {
        ev.preventDefault(); // Prevenir comportamento padrão
        console.log("Arquivo(s) solto(s)");

        if (ev.dataTransfer.items) {
            // Processar lista de itens
            [...ev.dataTransfer.items].forEach((item, i) => {
                if (item.kind === "file") {
                    const file = item.getAsFile();
                    if (file) {
                        console.log(`Arquivo [${i}]: ${file.name}`);
                        setTextFile(`<p>${file.name}</p>`);
                    }
                }
            });
        } else {
            // Processar arquivos soltos diretamente
            [...ev.dataTransfer.files].forEach((file, i) => {
                console.log(`Arquivo [${i}]: ${file.name}`);
                setTextFile(`<p>${file.name}</p>`);
            });
        }
    }

    function dragOverHandler(ev: React.DragEvent<HTMLDivElement>) {
        ev.preventDefault(); // Prevenir comportamento padrão
        console.log("Arquivo(s) sobre a área de soltura");
    }

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (file) {
            console.log(`Arquivo selecionado: ${file.name}`);
            setTextFile(`<p>${file.name}</p>`);
        }
    }

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
            <Nav></Nav>
            <NavLeft></NavLeft>
            <div className="main-content">
                <h1>Alunos</h1>

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


                <PrimaryButton type="submit">Adicionar Aluno</PrimaryButton>

                <h2>Adicionar Aluno usando arquivo</h2>

                <form id="store-by-file">
                    <label className="w-100 label-file" htmlFor="file">
                        <div id="drop_zone">
                            <div dangerouslySetInnerHTML={{ __html: textFile }} className="drop_zone-input" onDrop={dropHandler} onDragOver={dragOverHandler}>
                            </div>
                            <label htmlFor="file">Escolher Arquivo</label>
                        </div>
                    </label>

                    <input onChange={handleFileChange} type="file" id="file" name="file" accept=".xlsx,.xls" hidden/>

                    <div className="add-user">
                        <button>Salvar Alunos</button>
                    </div>
                    
                </form>
            </div>
        </>
    );
}