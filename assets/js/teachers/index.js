import { API_URL, showEror } from "../config.js";

// Função para fazer a requisição
async function index() {
    const response = await axios(`${API_URL}/teachers`);
    return response.data;
}

// apresenta conteudo na tela
function render(students) {
    const list = document.querySelector(".users-list");
    list.innerHTML = ''; // Limpa a lista antes de renderizar
    students.forEach((e) => {
        list.innerHTML += `
            <div class="user" onclick="window.location.href = 'edit_professor.html?id=${e.id}'">
                <div class="user-info">
                    <h3>${e.name}</h3>
                    <p>${e.email}</p>
                </div>
                <div class="user-ra">
                    RM: ${e.code}
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
    try {
        const allStudents = await index(); // Busca todos os cursos
        render(allStudents); // Renderiza todos os cursos
        setupSearch(allStudents); // Configura o evento de busca
    } catch (error) {
        showEror('Erro:', error?.response?.data?.error ?  error?.response?.data?.error : error.message );
        console.error('Ocorreu um erro:', error);
    }
}

// Chame a função show() para carregar os cursos quando o script for carregado
show(); 