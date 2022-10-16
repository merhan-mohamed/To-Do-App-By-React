import React , {Component} from "react";
import ToDoItems from "./Components/ToDoItems/ToDoItems"
import AddItem from "./Components/AddItems/Additems"
class App extends Component {
  state = {
    items: [
      {id:1,name: "Dana" , age: 25},
      
    ]
  }
  Delete = (id) => {
     let items = this.state.items.filter((item) => {
      return item.id !== id
    })
     this.setState({items})
  }

   addItem = (item) => {
    
   
    let items = this.state.items
    item.id = Math.random()
    items.push(item)
    this.setState({items})

   }
    
  render(){
    return(
      <div className="App container">
        <h1 className="Text-center">Todo List</h1>
        <ToDoItems items={this.state.items} deleteItem={this.Delete} />
        <AddItem addItem={this.addItem}/>

      </div>
    )
  }
}

export default App
