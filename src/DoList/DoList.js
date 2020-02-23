import React, { Component } from 'react';
import ToDo from '../ToDo/ToDo';

class DoList extends Component {

    render() {
        return (
            <ul>
                {this.props.ToDoList.map((item) => (<ToDo name={item.name} />))}
            </ul>
        )
    }
}

export default DoList