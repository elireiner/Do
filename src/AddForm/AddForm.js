import React, { Component } from 'react';
import Context from '../Context'

export default class AddForm extends Component{

    static contextType = Context;

    render(){
        return(
            <form onSubmit={this.context.handleSubmit}>
                <label>
                    Add to do:
                    <input name="add"/>
                </label>
                <button type="submit">Add Do To</button>
            </form>
        )
    }
}