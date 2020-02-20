import React, { Component } from 'react';

class DoList extends Component{
     
    render(){
    
        return(
            <ul>
             {this.props.ToDoList.map((ToDo) => (
            <li>{ToDo.name}</li>)
        )}
            </ul>
        )
    }
}

export default DoList