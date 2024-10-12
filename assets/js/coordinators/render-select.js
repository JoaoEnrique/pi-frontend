import { API_URL } from "../config.js";

// apresenta coordenadores no select
async function renderCoordinators() {
    const list = document.querySelector("#coordinator_id");
    const coordinators = await fetchCoordinators();

    coordinators.forEach((coordinator) => {
        const option = document.createElement('option'); // Cria um novo elemento <option>
        option.value = coordinator.id; // Define o valor da opção como o ID do coordenador
        option.textContent = `${coordinator.name}`; // Define o texto da opção

        list.appendChild(option); // Adiciona a opção ao select
    });
}


// Busca coordenadores
async function fetchCoordinators() {
    // Faz a requisição GET
    const response = await axios(`${API_URL}/coordinators`);

    // Converte a resposta para JSON
    return await response.data;
}

await renderCoordinators();
