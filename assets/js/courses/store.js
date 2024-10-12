import { API_URL, showEror } from "../config.js";

// Função para fazer a requisição
async function fetchCoordinators() {
    try {
        // Faz a requisição GET
        const response = await axios.get(`${API_URL}/coordinators`);

        // Verifica se a resposta foi bem-sucedida
        if (response.status != 200) {
            throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }

        // Converte a resposta para JSON
        return await response.data;
        

    } catch (error) {
        // Lida com erros
        console.error('Ocorreu um erro:', error.message);
    }
}

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

async function store(e){
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());

    if(!data.coordinator_id || !data.name || !data.period || !data.is_annual || !data.type_work){
        showEror('Erro:', 'Informe todos os campos');
        return;
    }

    console.log(data);
    

    document.querySelector(".alert-danger").style.display = 'none';

    try {
        // Faz a requisição GET
        const response = await axios.post(`${API_URL}/courses`, data);

        // Verifica se a resposta foi bem-sucedida
        if (response.status != 200) {
            throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }

        // Converte a resposta para JSON
        return await response.json();
        

    } catch (error) {
        // Lida com erros
        showEror('Erro:', error?.response?.data?.error);
        console.error('Ocorreu um erro:', error);
    }
}

document.querySelector("#form").addEventListener('submit', (e) => store(e))

renderCoordinators();