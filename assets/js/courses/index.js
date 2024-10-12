import { API_URL } from "../config.js";

// Função para fazer a requisição
async function index() {
    try {
        // Faz a requisição GET
        const response = await fetch(`${API_URL}/courses`);

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }

        // Converte a resposta para JSON
        return await response.json();
        

    } catch (error) {
        // Lida com erros
        console.error('Ocorreu um erro:', error.message);
    }
}

// Função para mostrar na view os valores da requisição
async function show(){
    try {
        const usersList = document.querySelector(".users-list");
        const courses = await index();

        courses.forEach((e) =>{
            
            usersList.innerHTML += ` 
                <div class="user">
                    <div class="user-info">
                        <h3> ${e.name} </h3>
                        <p>Coord:  ${e.coordinator.name}</p>
                    </div>
                    <div class="text-capitalize user-ra">
                        ${e.period}
                    </div>
                </div>
            `;
        })
    } catch (error) {
        console.error('Ocorreu um erro:', error.message);
    }
}


show();