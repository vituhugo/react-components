import React from 'react';
import Card from './Card';

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="green darken-4">
          <div className="container">
            <ul>
              <li><a href="#">Página principal</a></li>
              <li><a href="#">Página Interna 1</a></li>
              <li><a href="#">Página Interna 2</a></li>
              <li><a href="#">Página Interna 3</a></li>
            </ul>
          </div>
        </nav>
        <div className="container">
          
          <h2 className="title green-text text-darken-4"> Olá mundo! </h2>
          
          <h3 className="title green-text"> Listagem de usuários </h3>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Cor Favorita</th>
                <th>Comida Favorita</th>
                <th>Github</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ribery</td>
                <td>Vermelho</td>
                <td>Lasanha</td>
                <td><a href="http://github.com/ribery">ver Github</a></td>
              </tr>
              <tr>
                <td>Ribery</td>
                <td>Vermelho</td>
                <td>Lasanha</td>
                <td><a href="http://github.com/ribery">ver Github</a></td>
              </tr>
              <tr>
                <td>Ribery</td>
                <td>Vermelho</td>
                <td>Lasanha</td>
                <td><a href="http://github.com/ribery">ver Github</a></td>
              </tr>
            </tbody>
          </table>
          
          <h3 className="title green-text"> Cartões de usuários </h3>
          <div className="row">
            <Card />
            <Card />
            <Card />
          </div>

          <h3 className="title green-text"> Adicionar usuário </h3>
          <form>
            <div className="input-field col s6">
              <input id="first_name" name="nome" type="text" className="validate" />
              <label htmlFor="first_name">Nome</label>
            </div>
            <div className="input-field col s6">
              <input id="cor_favorita" name="cor_favorita" type="text" className="validate" />
              <label htmlFor="cor_favorita">Cor favorita</label>
            </div>
            <div className="input-field col s6">
              <input id="comida_favorita" name="comida_favorita" type="text" className="validate" />
              <label htmlFor="comida_favorita">Comida favorita</label>
            </div>
            <div className="input-field col s6">
              <input id="link_github" name="link_github" type="text" className="validate" />
              <label htmlFor="link_github">Github</label>
            </div>
            <div className="right-align">
              <a class="waves-effect waves-light green btn">button</a>
            </div>
          </form>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default App;
