import { API_URL, showEror } from "../config.js";

// Busca cursos
async function fetchCourses() {
    const response = await axios(`${API_URL}/courses`);
    return await response.data;
}

// apresenta cursos no select
async function renderCourses() {
    try {
        const list = document.querySelector("#course_id");
        const courses = await fetchCourses();

        courses.forEach((coordinator) => {
            const option = document.createElement('option'); // Cria um novo elemento <option>
            option.value = coordinator.id; // Define o valor da opção como o ID do coordenador
            option.textContent = `${coordinator.name}`; // Define o texto da opção

            list.appendChild(option); // Adiciona a opção ao select
        });
    } catch (error) {
        showEror('Erro:', error?.response?.data?.error ?  error?.response?.data?.error : error.message );
        console.error('Ocorreu um erro:', error);
    }
}



await renderCourses();
