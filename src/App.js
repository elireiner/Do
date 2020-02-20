import React, { Component } from 'react';
import AddForm from './AddForm/AddForm'
import DoList from './DoList/DoList'

class App extends Component {
  state = {
    ToDoList: []
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newToDo = { name: e.target.add.value }
    const ToDoList = this.state.ToDoList.concat(newToDo)
    this.setState({ ToDoList: ToDoList }, () => {
       console.log(this.state.ToDoList)
    })
  }

  render() {
    return (
      <>
        <AddForm handleSubmit={this.handleSubmit} />
        <DoList ToDoList={this.state.ToDoList}/>
      </>
    )
  }
}

export default App;