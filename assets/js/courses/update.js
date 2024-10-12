import { API_URL, showEror, handleErrorSession, handleSuccessSession } from "../config.js";

// Função para fazer a requisição
async function index() {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);// Cria um objeto URL a partir da URL atual
    const params = new URLSearchParams(url.search); // Usa URLSearchParams para obter os parâmetros da query string

    if(!params.get("id")){
        handleErrorSession('Erro ao buscar curso:', "Esse curso não foi encontrado", 'curso.html');
        return
    }
    
    const response = await axios(`${API_URL}/courses/${params.get("id")}`);

    return await response.data;
}

// apresenta conteudo na tela
async function render() {
    try {
        const course = await index();
        
        if(!course){
            handleErrorSession('Erro ao buscar curso:', "Esse curso não foi encontrado", 'curso.html');
            return
        }
        
        document.querySelector("#id").value = course.id;
        document.querySelector("#coordinator_id").value = course.coordinator_id;
        document.querySelector("#name").value = course.name;
        document.querySelector("#period").value = course.period;
        document.querySelector("#type_work").value = course.type_work;
        
        // anual ou bimestral
        document.querySelector("#bimonthly").checked = !course.is_annual;
        document.querySelector("#annual").checked = course.is_annual;

    } catch (error) {
        showEror('Erro ao buscar curso:', error?.response?.data?.error ?  error?.response?.data?.error : error.message );
        console.error('Ocorreu um erro:', error);
    }
}


async function update(e){
    try {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());

        if(!data.id || !data.coordinator_id || !data.name || !data.period || !data.is_annual || !data.type_work){
            showEror('Erro:', 'Informe todos os campos');
            return;
        }    

        document.querySelector(".alert-danger").style.display = 'none';

        const response = await axios.put(`${API_URL}/courses/${data.id}`, data);

        handleSuccessSession(response.data.message, `edit_curso.html?id=${response.data.course.id}`);

    } catch (error) {
        showEror('Erro:', error?.response?.data?.error ?  error?.response?.data?.error : error.message );
        console.error('Ocorreu um erro:', error);
    }
}

document.querySelector("#form").addEventListener('submit', (e) => update(e))

render(); //renderiza informações do curso