import React from 'react';
import TableRow from './TableRow';

class Table extends React.Component {
    render() {
        return (
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
              {this.props.users.map((user) => 
                <TableRow titulo={user.titulo} cor={user.cor} comida={user.comida} />)
              }
            </tbody>
          </table>
        )
    }
}
export default Table;