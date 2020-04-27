import React from 'react';

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.titulo}</td>
                <td>{this.props.cor}</td>
                <td>{this.props.comida}</td>
                <td><a href="http://github.com/ribery">ver Github</a></td>
            </tr>
        )
    }
}

export default TableRow;