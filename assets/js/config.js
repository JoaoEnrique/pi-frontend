const API_URL = 'http://localhost:3000/api';

const showEror = (title, text) => {
    document.querySelector(".alert-danger").style.display = 'block';
    document.querySelector(".alert-danger #alert-title").innerHTML = title;
    document.querySelector(".alert-danger #alert-text").innerHTML = text;
}


export {
    API_URL,
    showEror
}