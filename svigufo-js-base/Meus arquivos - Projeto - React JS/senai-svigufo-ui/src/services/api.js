import axios from "axios";
import { AsyncSeriesHook } from "tapable";

// export let listaTiposEventos = function() {
//   return Axios.get("http://192.168.4.112:5000/api/tiposeventos").then(res => {
//     const tiposeventos = res.data;
//     return tiposeventos;
//     // this.setState({ listaTiposEventos: tiposeventos });
//   });
// }; // Não deu certo, ainda.

const url = "http://192.168.4.112:5000/api/";

const auth = "Bearer " + localStorage.getItem("usuario-svigufo");

export default {
  tiposEventos(tipoEvento) {
    return {
      getAll: () => axios.get(url + "tiposeventos"),

      post: () =>
        axios.post(
          url + "tiposeventos",
          { tipoEvento },
          { headers: { Authorization: auth } }
        )
    };
  },

  eventos(eventos) {
    return {
      getAll: () => axios.get(url + "eventos"),
      post: () =>
        axios.post(
          url + "eventos",
          eventos,
          { headers: { Authorization: auth } }
        )
    };
  }
};
