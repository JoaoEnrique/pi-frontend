import { API_URL, showEror, handleSuccessSession } from "../config.js";

// Função para fazer a requisição
async function reremove(id) {
    return await axios.delete(`${API_URL}/classes/${id}`);
}

document.querySelector("#btn-delete").addEventListener("click", async () =>{
    try {
        const id = document.querySelector("#id").value
        const response = await reremove(id)
        
        handleSuccessSession(response.data.message, 'turma.html')
    } catch (error) {
        showEror('Erro:', error?.response?.data?.error ?  error?.response?.data?.error : error.message );
        console.error('Ocorreu um erro:', error);
    }
})