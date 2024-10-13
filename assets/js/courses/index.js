import { API_URL, showEror } from "../config.js";

// Função para fazer a requisição
async function index() {
    const response = await axios(`${API_URL}/courses`);
    return response.data;
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
    try {
        const allCourses = await index(); // Busca todos os cursos
        render(allCourses); // Renderiza todos os cursos
        setupSearch(allCourses); // Configura o evento de busca
    } catch (error) {
        showEror('Erro:', error?.response?.data?.error ?  error?.response?.data?.error : error.message );
        console.error('Ocorreu um erro:', error);
    }
}

// Chame a função show() para carregar os cursos quando o script for carregado
show(); 