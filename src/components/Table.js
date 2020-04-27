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
                <TableRow />
                <TableRow />
                <TableRow />
            </tbody>
          </table>
        )
    }
}
export default Table;