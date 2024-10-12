import { API_URL, showEror, handleSuccessSession } from "../config.js";

async function store(e){
    try {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());

        if(!data.name || !data.email || !data.code){
            showEror('Erro:', 'Informe todos os campos');
            return;
        }    

        document.querySelector(".alert-danger").style.display = 'none';

        const response = await axios.post(`${API_URL}/students`, data);

        handleSuccessSession(response.data.message, `edit_aluno.html?id=${response.data.student.id}`);

    } catch (error) {
        showEror('Erro:', error?.response?.data?.error ?  error?.response?.data?.error : error.message );
        console.error('Ocorreu um erro:', error);
    }
}

document.querySelector("#form").addEventListener('submit', (e) => store(e))