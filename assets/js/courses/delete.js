import { API_URL, showEror, handleSuccessSession } from "../config.js";

// Função para fazer a requisição
async function reremove(id) {
    await axios.delete(`${API_URL}/courses/${id}`);
}

document.querySelector("#btn-delete").addEventListener("click", () =>{
    try {
        const id = document.querySelector("#id").value
        reremove(id)
        handleSuccessSession("Curso Apagado", 'curso.html')
        console.log(id);
    } catch (error) {
        showEror('Erro:', error?.response?.data?.error ?  error?.response?.data?.error : error.message );
        console.error('Ocorreu um erro:', error);
    }
})