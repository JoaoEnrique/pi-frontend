import { API_URL } from "../config.js";

// Função para fazer a requisição
async function index() {
    try {
        const currentUrl = window.location.href;
        const url = new URL(currentUrl);// Cria um objeto URL a partir da URL atual
        const params = new URLSearchParams(url.search); // Usa URLSearchParams para obter os parâmetros da query string

        // Faz a requisição GET
        const response = await fetch(`${API_URL}/courses/${params.get("id")}`);

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

// apresenta conteudo na tela
function render() {
    const list = document.querySelector(".users-list");
    const course = index();
    console.log(course);
    

    // list.innerHTML = ''; // Limpa a lista antes de renderizar
    //     list.innerHTML += `
    //         <div class="user">
    //             <div class="user-info">
    //                 <h3>${e.name}</h3>
    //                 <p>Coord: ${e.coordinator.name}</p>
    //             </div>
    //             <div class="text-capitalize user-ra">
    //                 ${e.period}
    //             </div>
    //         </div>
    //     `;
}


// Chame a função show() para carregar os cursos quando o script for carregado
render(); 