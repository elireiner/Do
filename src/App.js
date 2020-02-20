import React, { Component } from 'react';
import AddForm from './AddForm/AddForm'
import DoList from './DoList/DoList'

class App extends Component {
  state = {
    ToDos: []
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newToDo = { name: e.target.add.value }
    const toDos = this.state.ToDos.concat(newToDo)
    this.setState({ ToDos: toDos })
    console.log(this.state.ToDos)
  }
  render() {
    return (
      <>
        <AddForm handleSubmit={this.handleSubmit} />
        <DoList />
      </>
    )
  }
}

export default App;