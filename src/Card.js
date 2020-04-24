import React from 'react';

var nome = "Victor Rodrigues";
var foto = "https://scontent.fbfh1-1.fna.fbcdn.net/v/t31.0-0/p640x640/13925482_1167008780007074_315248067200989696_o.jpg?_nc_cat=109&_nc_sid=13bebb&_nc_eui2=AeGOVOW777oBMjsp_c-6bXxRbggk3tl8NFxuCCTe2Xw0XEjLJJZMQv2meskccZ8iLohP_ea0jmHcRuYPJbW6lTYL&_nc_ohc=hnl_QCzIOwYAX8ppEYP&_nc_ht=scontent.fbfh1-1.fna&_nc_tp=6&oh=492c820faf13e83f172a255fa3a7bff6&oe=5EC69306";
var cor_favorita = "Verde";
var comida_favorita = "Lasanha";
var link_github = "http://github.com/vituhugo";

class Card extends React.Component {
    render() {
        return (
            <div class="card">
              <div class="card-image">
                <img src={foto}  />
                <span class="card-title">{nome}</span>
              </div>
              <div class="card-content">
                <p><b>cor favorita:</b> {cor_favorita}</p>
                <p><b>comida favorita:</b> {comida_favorita}  </p>
              </div>
              <div class="card-action">
                <a href={link_github}>Ver github</a>
              </div>
            </div>
        );
    }
}

export default Card;