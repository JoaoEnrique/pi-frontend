import { API_URL, showEror } from "../config.js";

// Busca cursos
async function fetchClasses() {
    const response = await axios(`${API_URL}/classes`);
    return await response.data;
}

// apresenta cursos no select
async function renderClasses() {
    try {
        const list = document.querySelector("#class_id");
        const classes = await fetchClasses();

        classes.forEach((theClass) => {
            const option = document.createElement('option'); // Cria um novo elemento <option>
            option.value = theClass.id; // Define o valor da opção como o ID do coordenador
            option.textContent = `${theClass.course.is_annual ? 'Ano: ' : "Semestre: " } ${theClass.semester } - Curso: ${theClass.course.name}`; // Define o texto da opção

            list.appendChild(option); // Adiciona a opção ao select
        });
    } catch (error) {
        showEror('Erro:', error?.response?.data?.error ?  error?.response?.data?.error : error.message );
        console.error('Ocorreu um erro:', error);
    }
}



await renderClasses();
