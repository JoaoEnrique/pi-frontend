import { API_URL, showEror, handleErrorSession, showSuccess } from "../config.js";

// Função para fazer a requisição
async function index() {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);// Cria um objeto URL a partir da URL atual
    const params = new URLSearchParams(url.search); // Usa URLSearchParams para obter os parâmetros da query string

    if(!params.get("id")){
        handleErrorSession('Erro ao buscar coordenador:', "Esse coordenador não foi encontrado", 'coordenadors.html');
        return
    }
    
    const response = await axios(`${API_URL}/coordinators/${params.get("id")}`);

    return await response.data;
}

// apresenta conteudo na tela
async function render() {
    try {
        const student = await index();
        
        if(!student){
            handleErrorSession('Erro ao buscar coordenador:', "Esse coordenador não foi encontrado", 'coordenadores.html');
            return
        }

        document.querySelector("#id").value = student.id;
        document.querySelector("#name").value = student.name;
        document.querySelector("#email").value = student.email;
        document.querySelector("#code").value = student.code;

    } catch (error) {
        showEror('Erro ao buscar curso:', error?.response?.data?.error ?  error?.response?.data?.error : error.message );
        console.error('Ocorreu um erro:', error);
    }
}


async function update(e){
    try {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());

        if(!data.name || !data.email || !data.code){
            showEror('Erro:', 'Informe todos os campos');
            return;
        }    

        document.querySelector(".alert-danger").style.display = 'none';

        const response = await axios.put(`${API_URL}/coordinators/${data.id}`, data);

        showSuccess(response.data.message);

    } catch (error) {
        showEror('Erro:', error?.response?.data?.error ?  error?.response?.data?.error : error.message );
        console.error('Ocorreu um erro:', error);
    }
}

document.querySelector("#form").addEventListener('submit', (e) => update(e))

render(); //renderiza informações do no form