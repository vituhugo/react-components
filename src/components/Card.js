import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="col s4">
              <div className="card hoverable">
                <div className="card-image">
                  <img src={this.props.foto}  />
                  <span className="card-title">{this.props.titulo}</span>
                </div>
                <div className="card-content">
                  <p><b>cor favorita:</b> {this.props.cor}</p>
                  <p><b>comida favorita:</b> {this.props.comida}  </p>
                </div>
                <div className="card-action">
                  <a href={this.props.github}>Ver github</a>
                </div>
              </div>
            </div>
        )
    }
}

export default Card;