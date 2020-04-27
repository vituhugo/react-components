import React from 'react';

class Card extends React.Component {
    render() {
        return (
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
        )
    }
}

export default Card;