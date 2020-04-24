import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'materialize-css/dist/css/materialize.css';
import Card from './Card';

var nome = "Victor Rodrigues";
var foto = "https://scontent.fbfh1-1.fna.fbcdn.net/v/t31.0-0/p640x640/13925482_1167008780007074_315248067200989696_o.jpg?_nc_cat=109&_nc_sid=13bebb&_nc_eui2=AeGOVOW777oBMjsp_c-6bXxRbggk3tl8NFxuCCTe2Xw0XEjLJJZMQv2meskccZ8iLohP_ea0jmHcRuYPJbW6lTYL&_nc_ohc=hnl_QCzIOwYAX8ppEYP&_nc_ht=scontent.fbfh1-1.fna&_nc_tp=6&oh=492c820faf13e83f172a255fa3a7bff6&oe=5EC69306";
var cor_favorita = "Verde";
var comida_favorita = "Lasanha";
var link_github = "http://github.com/vituhugo";

ReactDOM.render(
  <div>
      <nav>
        <div  className="container">
          <ul>
            <li><a href="#">Página principal</a></li>
          </ul>
        </div>
      </nav>
      <div className="container">
        
        <h2>Olá mundo! </h2>

        <div className="row">
        <div className="col s4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      </div>
    </div>,
  document.getElementById('root')
);
