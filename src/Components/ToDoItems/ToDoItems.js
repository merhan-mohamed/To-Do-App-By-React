import React from "react";

const ToDoItems = (props) => {
        const {items, deleteItem} = props
        let length = items.length
        const itemlist = length ? 
        (items.map((i) => {
            return(
                <div key={i.id}>
                    <span className="name">{i.name}</span>
                    <span className="age">{i.age}</span>
                    <span className="action icon" onClick={() => deleteItem(i.id)}>&times;</span>
                </div>
               
                
            )
        })):(<p>There is no items</p>)
    
    return(
        <div className="ListItems">
            <div>
                <span className="name">Name</span>
                <span className="age">Age</span>
                <span className="action title">Action</span>
            </div>
           {itemlist}
        </div>
    )
}

export default ToDoItems