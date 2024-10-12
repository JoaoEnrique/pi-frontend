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

// apresenta conteudo na tela
function render(courses) {
    const list = document.querySelector(".users-list");
    list.innerHTML = ''; // Limpa a lista antes de renderizar
    courses.forEach((e) => {
        list.innerHTML += `
            <div class="user" onclick="window.location.href = 'edit_curso.html?id=${e.id}'">
                <div class="user-info">
                    <h3>${e.name}</h3>
                    <p>Coord: ${e.coordinator.name}</p>
                </div>
                <div class="text-capitalize user-ra">
                    ${e.period}
                </div>
            </div>
        `;
    });
}

function filter(courses, searchTerm) {
    return courses.filter(course => {
        return (
            course.name.toLowerCase().includes(searchTerm) || 
            course.coordinator.name.toLowerCase().includes(searchTerm) ||
            course.period.toLowerCase().includes(searchTerm)
        );
    });
}

function setupSearch(courses) {
    const searchInput = document.querySelector('.search-bar input[type="text"]');
    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredCourses = filter(courses, searchTerm);
        render(filteredCourses);
    });
}

async function show() {
    const allCourses = await index(); // Busca todos os cursos
    render(allCourses); // Renderiza todos os cursos
    setupSearch(allCourses); // Configura o evento de busca
}

// Chame a função show() para carregar os cursos quando o script for carregado
show(); 