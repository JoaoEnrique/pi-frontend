import { API_URL, showEror, handleSuccessSession } from "../config.js";

async function store(e){
    try {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());

        if(!data.coordinator_id || !data.name || !data.period || !data.is_annual || !data.type_work){
            showEror('Erro:', 'Informe todos os campos');
            return;
        }    

        document.querySelector(".alert-danger").style.display = 'none';

        const response = await axios.post(`${API_URL}/courses`, data);

        handleSuccessSession(response.data.message, `edit_curso.html?id=${response.data.course.id}`);

    } catch (error) {
        showEror('Erro:', error?.response?.data?.error ?  error?.response?.data?.error : error.message );
        console.error('Ocorreu um erro:', error);
    }
}

document.querySelector("#form").addEventListener('submit', (e) => store(e))