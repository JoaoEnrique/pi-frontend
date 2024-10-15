import { useState } from "react";
import { PrimaryButton } from "../../components/Buttons";
import { Nav, NavLeft } from "../../components/Nav"
import { SearchForm } from "../../components/SeachForm";
import './file.css'

export function ListStudents(){
    const [textFile, setTextFile] = useState("<p>Arraste o arquivo para esta <i>zona</i>.</p>");

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

    return (
        <>
            <Nav></Nav>
            <NavLeft></NavLeft>
            <div className="main-content">
                <h1>Alunos</h1>

                <SearchForm/>

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