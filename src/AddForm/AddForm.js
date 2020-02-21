import React, { Component } from 'react';

export default class AddForm extends Component{

    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>
                <label>
                    <input name="add"/>
                </label>
                <button type="submit">Add Do To</button>
            </form>
        )
    }
}