import { API_URL, showEror } from "../config.js";

// Busca coordenadores
async function fetchCoordinators() {
    const response = await axios(`${API_URL}/coordinators`);
    return await response.data;
}


// apresenta coordenadores no select
async function renderCoordinators() {
    try {
        const list = document.querySelector("#coordinator_id");
        const coordinators = await fetchCoordinators();

        coordinators.forEach((coordinator) => {
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

await renderCoordinators();
