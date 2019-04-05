import React, { Component } from 'react';

export default class Titulo extends Component {
    constructor(props){
        super(props); // o super() é utilizado para dar mais funcionalidades ao js.
    } // O método construtor com props é utilizado em casos mais complexos;
    
    render() {
        return (
            <h1 className="conteudoPrincipal-cadastro-titulo">
                {this.props.mensagem}
            </h1>
        );
    }
}