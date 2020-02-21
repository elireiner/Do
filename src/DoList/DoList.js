import React, { Component } from 'react';
import ToDo from '../ToDo/ToDo';

class DoList extends Component {

    render() {
        return (
            <ul>
                {this.props.ToDoList.map((ToDo) => (<ToDo>{ToDo.name}</ToDo>))}
            </ul>
        )
    }
}

export default DoList