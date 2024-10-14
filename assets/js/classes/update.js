import { API_URL, showEror, handleErrorSession, handleSuccessSession, showSuccess } from "../config.js";

// Função para fazer a requisição
async function index() {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);// Cria um objeto URL a partir da URL atual
    const params = new URLSearchParams(url.search); // Usa URLSearchParams para obter os parâmetros da query string

    if(!params.get("id")){
        handleErrorSession('Erro ao buscar curso:', "Esse curso não foi encontrado", 'curso.html');
        return
    }
    
    const response = await axios(`${API_URL}/classes/${params.get("id")}`);

    return await response.data;
}

// apresenta conteudo na tela
async function render() {
    try {
        const thisClass = await index();
        
        if(!thisClass){
            handleErrorSession('Erro ao buscar turma:', "Essa turma não foi encontrada", 'turma.html');
            return
        }
        
        document.querySelector("#id").value = thisClass.id;
        document.querySelector("#teacher_id").value = thisClass.teacher_id;
        document.querySelector("#course_id").value = thisClass.course_id;
        document.querySelector("#semester").value = thisClass.semester;
    } catch (error) {
        showEror('Erro ao buscar curso:', error?.response?.data?.error ?  error?.response?.data?.error : error.message );
        console.error('Ocorreu um erro:', error);
    }
}


async function update(e){
    try {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());

        if(!data.teacher_id || !data.course_id || !data.semester){
            showEror('Erro:', 'Informe todos os campos');
            return;
        }    

        document.querySelector(".alert-danger").style.display = 'none';

        const response = await axios.put(`${API_URL}/classes/${data.id}`, data);

        showSuccess(response.data.message);

    } catch (error) {
        showEror('Erro:', error?.response?.data?.error ?  error?.response?.data?.error : error.message );
        console.error('Ocorreu um erro:', error);
    }
}

document.querySelector("#form").addEventListener('submit', (e) => update(e))

render(); //renderiza informações no formulario