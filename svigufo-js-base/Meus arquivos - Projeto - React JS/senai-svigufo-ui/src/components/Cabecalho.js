import React, {Component} from 'react';
import logo from '../assets/img/icon-login.png'

export default class Cabecalho extends Component {
  render() {
    return (
      <header className="cabecalhoPrincipal">
        <div className="container">
          <img src={logo} />

          <nav className="cabecalhoPrincipal-nav">Administrador</nav>
        </div>
      </header>
    );
  }
}
