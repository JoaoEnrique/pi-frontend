import { showEror, showSuccess } from "./config.js";

// carrega erro da sessão e apaga
window.onload = function() {
    const errorMessage = sessionStorage.getItem('error'); // Recupera a mensagem de erro
    const successMessage = sessionStorage.getItem('success'); // Recupera a mensagem de erro

    if (errorMessage) {
        const parsedError = JSON.parse(errorMessage);
        showEror(parsedError.title, parsedError.text);
        sessionStorage.removeItem('error')
    }

    if (successMessage) {
        showSuccess(successMessage);
        sessionStorage.removeItem('success')
    }
};
