import { API_URL, showEror } from "../config.js";

// Busca professores
async function fetchTeachers() {
    const response = await axios(`${API_URL}/teachers`);
    return await response.data;
}

// apresenta professores no select
async function renderTeachers() {
    try {
        const list = document.querySelector("#teacher_id");
        const teachers = await fetchTeachers();

        teachers.forEach((teacher) => {
            const option = document.createElement('option'); // Cria um novo elemento <option>
            option.value = teacher.id; // Define o valor da opção como o ID do coordenador
            option.textContent = `${teacher.name}`; // Define o texto da opção

            list.appendChild(option); // Adiciona a opção ao select
        });
    } catch (error) {
        showEror('Erro:', error?.response?.data?.error ?  error?.response?.data?.error : error.message );
        console.error('Ocorreu um erro:', error);
    }
}



await renderTeachers();
