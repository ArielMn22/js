const URL = "http://5c9e69fb595c55001487bf36.mockapi.io/api/v2/estudios";

function carregarListaEstudios() {

  return fetch(URL)
    .then(resposta => resposta.json())
    .then(_data => {
      return _data;
    })
    .catch(error => console.log(error));
}