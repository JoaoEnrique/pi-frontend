import { API_URL, showEror, handleSuccessSession } from "../config.js";

async function storeByFile(e){
    try {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());

        console.log(data); 
        

        document.querySelector(".alert-danger").style.display = 'none';

        const response = await axios.post(`${API_URL}/students`, data);

        handleSuccessSession(response.data.message, `edit_aluno.html?id=${response.data.student.id}`);

    } catch (error) {
        showEror('Erro:', error?.response?.data?.error ?  error?.response?.data?.error : error.message );
        console.error('Ocorreu um erro:', error);
    }
}

document.querySelector("#store-by-file").addEventListener('submit', (e) => storeByFile(e))