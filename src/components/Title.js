import React from 'react'

class Title extends React.Component {
    render() {
        return (
            <h2 className="title green-text text-darken-4"> {this.props.titulo} </h2>
        )
    }
}

export default Title;