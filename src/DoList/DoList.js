import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ToDo from '../ToDo/ToDo';
import Context from '../Context'

class DoList extends Component {
    static defaultProps = {
        ToDoList: []
    }

    static contextType = Context;

    render() {

        const { ToDoList } = this.context

        return (
            <>
            <ul>
                {ToDoList.map((item) => (<ToDo name={item.name} />))}
            </ul>
            <Link to={`/AddForm`}>Add ToDo</Link>
            </>
        )
    }
}

export default DoList