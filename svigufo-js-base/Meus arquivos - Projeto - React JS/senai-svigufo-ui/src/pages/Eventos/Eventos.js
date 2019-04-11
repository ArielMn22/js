import React, { Component } from "react";
import Rodape from "../../components/Rodape";
import Axios from "axios";
import Cabecalho from "../../components/Cabecalho";
import api from "../../services/api";

export default class Cadastro extends Component {
  constructor() {
    super();

    this.state = {
      titulo: "",
      dataEvento: "",
      descricao: "",
      tipoEventoId: "",
      instituicaoId: "",
      acessoLivre: "",
      listaTiposEventos: [],
      listaEventos: []
    };
  }

  //   buscarTiposEventos(event) {
  //     Axios.get("http://192.168.4.112:5000/api/tiposeventos").then(res => {
  //       const tiposeventos = res.data;
  //       this.setState({ listaTiposEventos: tiposeventos });
  //     });
  //   }

  //   buscarEventos() {
  //     Axios.get("http://192.168.4.112:5000/api/eventos").then(data => {
  //       console.log(data);
  //       this.setState({ listaEventos: data.data });
  //     });
  //   }

  componentDidMount() {
    // this.buscarTiposEventos();
    api // Utilizando o service API para carregar a lista de tiposEventos
      .tiposEventos()
      .getAll()
      .then(data => {
        this.setState({ listaTiposEventos: data.data });
        console.log(data);
      });

    api // Utilizando o service API para carregar a lista de tiposEventos
      .eventos()
      .getAll()
      .then(data => {
        this.setState({ listaEventos: data.data });
        console.log(data);
      });
    // this.setState({listaTiposEventos : ''});
    // this.buscarEventos();
  }

  atualizaEstadoTitulo(event) {
    this.setState({ titulo: event.target.value });
  }

  atualizaEstadoDataEvento(event) {
    this.setState({ dataEvento: event.target.value });
  }

  atualizaEstadoAcessoLivre(event) {
    this.setState({ acessoLivre: event.target.value });
  }

  atualizaEstadoDescricao(event) {
    this.setState({ descricao: event.target.value });
  }

  atualizaEstadoTipoEvento(event) {
    this.setState({ tipoEventoId: event.target.value });
  }

  cadastraEvento(event) {
    event.preventDefault();

    let evento = {
      titulo: this.state.titulo,
      dataEvento: this.state.dataEvento,
      acessoLivre: this.state.acessoLivre ? true : false,
      descricao: this.state.descricao,
      tipoEventoId: this.state.tipoEventoId,
      instituicaoId: 1
    };

    api.eventos(evento).post();

    // Axios.post("http://192.168.4.112:5000/api/eventos", evento, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "bearer " + localStorage.getItem("usuario-svigufo")
    //   }
    // })
    //   .then(res => {
    //     console.log(res);
    //     this.buscarEventos();
    //   })
    //   .catch(erro => console.log(erro));
  }

  render() {
    return (
      <div>
        <Cabecalho />
        <main className="conteudoPrincipal">
          <section className="conteudoPrincipal-cadastro">
            <h1 className="conteudoPrincipal-cadastro-titulo">Eventos</h1>
            <div className="container" id="conteudoPrincipal-lista">
              <table id="tabela-lista">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Evento</th>
                    <th>Data</th>
                    <th>Acesso Livre</th>
                    <th>Tipo do Evento</th>
                  </tr>
                  {this.state.listaEventos.map(evento => {
                    return (
                      <tr>
                        <td>{evento.id}</td>
                        <td>{evento.titulo}</td>
                        <td>{evento.dataEvento}</td>
                        {evento.acessoLivre === true ? (
                          <td style={{ color: "green" }}>Sim</td>
                        ) : (
                          <td style={{ color: "red" }}>Não</td>
                        )}
                        <td>{evento.tipoEvento.nome}</td>
                        {/* <td>{evento.instituicao.nomeFantasia}</td> */}
                      </tr>
                    );
                  })}
                </thead>

                <tbody id="tabela-lista-corpo" />
              </table>
            </div>

            <div className="container" id="conteudoPrincipal-cadastro">
              <h2 className="conteudoPrincipal-cadastro-titulo">
                Cadastrar Evento
              </h2>
              <form onSubmit={this.cadastraEvento.bind(this)}>
                <div className="container">
                  <input
                    type="text"
                    id="evento__titulo"
                    placeholder="título do evento"
                    value={this.state.titulo}
                    onChange={this.atualizaEstadoTitulo.bind(this)}
                  />

                  <input
                    type="text"
                    id="evento__data"
                    placeholder="dd/MM/yyyy"
                    value={this.state.dataCriacao}
                    onChange={this.atualizaEstadoDataEvento.bind(this)}
                  />

                  <select
                    id="option__acessolivre"
                    onChange={this.atualizaEstadoAcessoLivre.bind(this)}
                    value={this.state.acessoLivre}
                  >
                    <option value="1">Livre</option>
                    <option value="0">Restrito</option>
                  </select>

                  <select
                    id="option__tipoevento"
                    value={this.state.tipoEventoId}
                    onChange={this.atualizaEstadoTipoEvento.bind(this)}
                  >
                    <option value="0">Selecione</option>
                    {this.state.listaTiposEventos.map(element => {
                      return (
                        <option key={element.id} value={element.id}>
                          {element.nome}
                        </option>
                      );
                    })}
                  </select>

                  <textarea
                    rows="3"
                    cols="50"
                    placeholder="descrição do evento"
                    id="evento__descricao"
                    value={this.state.descricao}
                    onChange={this.atualizaEstadoDescricao.bind(this)}
                  />
                  <button className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro">
                    Cadastrar
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>

        <Rodape />
      </div>
    );
  }
}
