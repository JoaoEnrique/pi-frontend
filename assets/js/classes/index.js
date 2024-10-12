import { API_URL,showEror } from "../config.js";

// Função para fazer a requisição
async function index() {
    const response = await axios(`${API_URL}/classes`);
    return response.data;
}

// apresenta conteudo na tela
function render(classes) {
    const list = document.querySelector(".users-list");
    list.innerHTML = ''; // Limpa a lista antes de renderizar
    classes.forEach((e) => {
        list.innerHTML += `
            <div class="user" onclick="window.location.href = 'edit_turma.html?id=${e.id}'">
                <div class="user-info">
                    <h3>${e.course.name}</h3>
                    <p>Prof: ${e.teacher.name}</p>
                </div>
                <div class="text-capitalize user-ra">
                    ${e.course.is_annual ? 'Ano' : "Semestre"} ${e.semester} 
                </div>
            </div>
        `;
    });
}

function filter(classes, searchTerm) {
    return classes.filter(theClass => {
        return (
            theClass.course.name.toLowerCase().includes(searchTerm) || 
            theClass.teacher.name.toLowerCase().includes(searchTerm) ||
            theClass.semester.toString().includes(searchTerm)
        );
    });
}

function setupSearch(classes) {
    const searchInput = document.querySelector('.search-bar input[type="text"]');
    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredClasses = filter(classes, searchTerm);
        render(filteredClasses);
    });
}

async function show() {
    try {
        const allClasses = await index(); // Busca todos os cursos
        render(allClasses); // Renderiza todos os cursos
        setupSearch(allClasses); // Configura o evento de busca
    } catch (error) {
        showEror('Erro:', error?.response?.data?.error ?  error?.response?.data?.error : error.message );
        console.error('Ocorreu um erro:', error);
    }
}

// Chame a função show() para carregar os cursos quando o script for carregado
show(); 