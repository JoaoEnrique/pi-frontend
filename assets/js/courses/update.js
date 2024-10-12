import { API_URL, showEror, handleErrorSession } from "../config.js";

// Função para fazer a requisição
async function index() {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);// Cria um objeto URL a partir da URL atual
    const params = new URLSearchParams(url.search); // Usa URLSearchParams para obter os parâmetros da query string
    
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
        
        document.querySelector("#annual").checked = course.is_annual
        document.querySelector("#bimonthly").checked = !course.is_annual
        
    } catch (error) {
        showEror('Erro ao buscar curso:', error?.response?.data?.error ?  error?.response?.data?.error : error.message );
        console.error('Ocorreu um erro:', error);
    }
}

render(); //renderiza informações do curso