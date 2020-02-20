import React, { Component } from 'react';

class DoList extends Component{
    
    render(){
        return(
            <main>
             {this.props.ToDoList}
            </main>
        )
    }
}

export default DoList