import { showEror, showSuccess } from "./config.js";

function createDivsMessage(){
    // Seleciona o elemento h1 dentro de .main-content
    const mainHeading = document.querySelector(".main-content h1");

    // Cria as divs de alerta
    const errorAlert = document.createElement('div');
    errorAlert.className = "alert alert-danger alert-dismissible fade show d-none";
    errorAlert.role = "alert";
    errorAlert.innerHTML = `
        <strong id="alert-title"></strong> 
        <span id="alert-text"></span>
    `;

    const successAlert = document.createElement('div');
    successAlert.className = "alert alert-success alert-dismissible fade show d-none";
    successAlert.role = "alert";
    successAlert.innerHTML = `
        <strong id="alert-title"></strong> 
        <span id="alert-text"></span>
    `;

    // Insere as divs de alerta antes do h1
    mainHeading.insertAdjacentElement('afterend', errorAlert);
    mainHeading.insertAdjacentElement('afterend', successAlert);
}

createDivsMessage();

// carrega erro da sessão e apaga
window.onload = function() {
    const errorMessage = sessionStorage.getItem('error'); // Recupera a mensagem de erro
    const successMessage = sessionStorage.getItem('success'); // Recupera a mensagem de sucesso

    if (errorMessage) {
        const parsedError = JSON.parse(errorMessage);
        showEror(parsedError.title, parsedError.text);
        sessionStorage.removeItem('error')
    }

    if (successMessage) {
        console.log(successMessage);
        
        showSuccess(successMessage);
        sessionStorage.removeItem('success')
    }
};
