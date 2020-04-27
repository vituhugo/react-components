import React from 'react';

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
            <div className="col s4">
              <div className="card hoverable">
                <div className="card-image">
                  <img src="https://s2.glbimg.com/_lpAmBcCPXkfZYJv93WXlWGXrBE=/0x0:884x604/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2018/B/Z/V9c7KZQYOJvuhawTyB0w/ribery.png"  />
                  <span className="card-title">Ribery</span>
                </div>
                <div className="card-content">
                  <p><b>cor favorita:</b> Vermelho</p>
                  <p><b>comida favorita:</b> Lasanha  </p>
                </div>
                <div className="card-action">
                  <a href="http://github.com/ribery">Ver github</a>
                </div>
              </div>
            </div>
            <div className="col s4">
              <div className="card hoverable  ">
                <div className="card-image">
                  <img src="https://s2.glbimg.com/_lpAmBcCPXkfZYJv93WXlWGXrBE=/0x0:884x604/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2018/B/Z/V9c7KZQYOJvuhawTyB0w/ribery.png"  />
                  <span className="card-title">Ribery</span>
                </div>
                <div className="card-content">
                  <p><b>cor favorita:</b> Vermelho</p>
                  <p><b>comida favorita:</b> Lasanha  </p>
                </div>
                <div className="card-action">
                  <a href="http://github.com/ribery">Ver github</a>
                </div>
              </div>
            </div>
            <div className="col s4">
              <div className="card hoverable">
                <div className="card-image">
                  <img src="https://s2.glbimg.com/_lpAmBcCPXkfZYJv93WXlWGXrBE=/0x0:884x604/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2018/B/Z/V9c7KZQYOJvuhawTyB0w/ribery.png"  />
                  <span className="card-title">Ribery</span>
                </div>
                <div className="card-content">
                  <p><b>cor favorita:</b> Vermelho</p>
                  <p><b>comida favorita:</b> Lasanha  </p>
                </div>
                <div className="card-action">
                  <a href="http://github.com/ribery">Ver github</a>
                </div>
              </div>
            </div>
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
