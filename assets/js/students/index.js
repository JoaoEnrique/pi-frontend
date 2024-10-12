import { API_URL } from "../config.js";

// Função para fazer a requisição
async function index() {
    const response = await axios(`${API_URL}/students`);
    return response.data;
}

// apresenta conteudo na tela
function render(students) {
    const list = document.querySelector(".users-list");
    list.innerHTML = ''; // Limpa a lista antes de renderizar
    students.forEach((e) => {
        list.innerHTML += `
            <div class="user">
                <div class="user-info" onclick="window.location.href = 'edit_curso.html?id=${e.id}'">
                    <h3>${e.name}</h3>
                    <p>${e.email}</p>
                </div>
                <div class="user-ra">
                    RA: ${e.code}
                    <img src="assets/alt_user.png" alt="Perfil">
                </div>
            </div>
        `;
    });
}

function filter(students, searchTerm) {
    return students.filter(student => {
        return (
            student.name.toLowerCase().includes(searchTerm) || 
            student.email.toLowerCase().includes(searchTerm) ||
            student.code.toLowerCase().includes(searchTerm)
        );
    });
}

function setupSearch(students) {
    const searchInput = document.querySelector('.search-bar input[type="text"]');
    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredStudents = filter(students, searchTerm);
        render(filteredStudents);
    });
}

async function show() {
    const allStudents = await index(); // Busca todos os cursos
    render(allStudents); // Renderiza todos os cursos
    setupSearch(allStudents); // Configura o evento de busca
}

// Chame a função show() para carregar os cursos quando o script for carregado
show(); 