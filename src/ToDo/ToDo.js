import React, { Component } from 'react';

export default class Todo extends Component {
    render() {
        return (
            <>
                {this.props.name.map((name) => (<li>{name}</li>))}
            </>
        )
    }
}