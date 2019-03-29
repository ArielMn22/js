const URL = "http://5c9e69fb595c55001487bf36.mockapi.io/api/v2/estudios";


function carregarListaEstudios() {

    // let estudios = [];
    
    return fetch(URL)
        .then(resposta => resposta.json())
        .then(data => data)
        .catch(erro => console.log(erro))


    // return estudios;
}