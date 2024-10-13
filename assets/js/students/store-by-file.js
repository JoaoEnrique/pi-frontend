import { API_URL, showEror, handleSuccessSession } from "../config.js";

async function storeByFile(e){
    try {
        e.preventDefault();
        const formData = new FormData(e.target);

        if(!formData.get('file').size) {
            showEror('Erro:', 'Insira o arquivo');
            return;
        }

        // Verifica se o arquivo é um Excel
        const allowedTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
        if (!allowedTypes.includes(formData.get('file').type)) {
            showEror('Erro:', 'O arquivo deve ser um arquivo Excel (.xlsx ou .xls)');
            return;
        }
        
        document.querySelector(".alert-danger").style.display = 'none';

        const response = await axios.post(`${API_URL}/students/store-by-file`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        handleSuccessSession(response.data.message + " As senhas foram enviadas por email!", `alunos.html`);

    } catch (error) {
        showEror('Erro:', error?.response?.data?.error ?  error?.response?.data?.error : error.message );
        console.error('Ocorreu um erro:', error);
    }
}

document.querySelector("#store-by-file").addEventListener('submit', (e) => storeByFile(e))