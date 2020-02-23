import React, { Component } from 'react';
import AddForm from './AddForm/AddForm';
import { Route } from 'react-router-dom';
import DoList from './DoList/DoList';
import Context from './Context'

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
    const value = {
      ToDoList: this.state.ToDoList,
      handleSubmit: this.handleSubmit
    }
    return (
      <>
      {console.log('hi')}
        <Context.Provider value={value}>
          <Route exact path="/" component={DoList} />
          <Route path="/AddForm" component={AddForm} />
        </Context.Provider>

      </>
    )
  }
}

export default App;