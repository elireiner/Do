import React, { Component } from 'react';

export default class Todo extends Component{
    render(){
        return(
           <>
           {this.props.children}
           </>
        )
    }
}