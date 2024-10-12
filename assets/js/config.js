const API_URL = 'http://localhost:3000/api';

const showEror = (title, text) => {
    if(document.querySelector(".alert-success")) document.querySelector(".alert-success").style.display = 'none';
    document.querySelector(".alert-danger").style.display = 'block';
    document.querySelector(".alert-danger #alert-title").innerHTML = title;
    document.querySelector(".alert-danger #alert-text").innerHTML = text;
}

const showSuccess = (text) => {
    if(document.querySelector(".alert-danger")) document.querySelector(".alert-danger").style.display = 'none';
    document.querySelector(".alert-success").style.display = 'block';
    document.querySelector(".alert-success #alert-text").innerHTML = text;
}

// guarda erro na sessão para redirecionar
function handleErrorSession(title, text, redirect) {
    const errorObject = { title, text }; // Armazena a mensagem de erro como uma string JSON
    sessionStorage.setItem('error', JSON.stringify(errorObject));// Armazena a mensagem de erro
    window.location.href = redirect;// Redireciona para a página desejada
}

// guarda sucesso na sessão para redirecionar
function handleSuccessSession(text, redirect) {
    sessionStorage.setItem('success', text);// Armazena a mensagem de erro
    window.location.href = redirect;// Redireciona para a página desejada
}

export {
    API_URL,
    showEror,
    showSuccess,
    handleErrorSession,
    handleSuccessSession
}