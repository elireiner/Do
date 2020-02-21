import React, { Component } from 'react';
import ToDo from '../ToDo/ToDo';

class DoList extends Component {

    render() {
        return (
            <ul>
                {this.props.ToDoList.map((ToDo) => (<ToDo name={ToDo.name}/>))}
            </ul>
        )
    }
}

export default DoList