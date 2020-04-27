import React from 'react';

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>Ribery</td>
                <td>Vermelho</td>
                <td>Lasanha</td>
                <td><a href="http://github.com/ribery">ver Github</a></td>
            </tr>
        )
    }
}

export default TableRow;