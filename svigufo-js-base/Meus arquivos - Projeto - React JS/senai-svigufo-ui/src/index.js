import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/Home/App';
import Login from './pages/Login/Login';
import { usuarioAutenticado } from './services/auth';
import TiposEventos from './pages/TiposEventos/TiposEventos';
import Eventos from './pages/Eventos/Eventos';
import NaoEncontrada from './pages/NaoEncontrada/NaoEncontrada';

import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Orientação a objetos = Abstração, Encapsulamento, Polimorifsmo, Herança.

// let batata = ( 1 == 1 ) ? 3 : 5; // Operador ternário

const Permissao = ({ component : Component}) => (
    <Route
        render = {props => usuarioAutenticado() ?
            (<Component {...props}/>) :
            (<Redirect to={{ pathname : '/login', state: {from: props.location}}} />)
        }
    />
);

const rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} /> {/* O 'exact' é utilizado para que ele renderize a página quando o path for exatamente igual ao informado no path=""; */}
                <Permissao path="/tiposeventos" component={TiposEventos} />
                <Route path="/login" component={Login} />
                <Permissao path="/eventos" component={Eventos} />
                <Route component={NaoEncontrada} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
