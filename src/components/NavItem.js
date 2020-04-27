import React from 'react';

class NavItem extends React.Component {
    render() {
        return (
            <li>
                <a href="#">
                    { this.props.titulo }
                </a>
            </li>
        );
    }
}

export default NavItem;