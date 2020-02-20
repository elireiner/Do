import React, { Component } from 'react';
import AddForm from './AddForm/AddForm'
import DoList from './DoList/DoList'

class App extends Component {
  state = {
    toDos: []
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const toDo = {name: e.target.add.value}
    this.setState({toDos: this.state.toDos.push(toDo) })
    console.log(this.state.toDos)
}
  render() {
    return (
      <>
      <AddForm handleSubmit={this.handleSubmit}/>
      <DoList/>
      </>
    )
  }
}

export default App;