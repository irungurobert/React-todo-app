// TodoItem.js
import React from "react";


function TodoItem({ title, id, handleDelete, onToggle, checked, handleEdit,isEditting,handleSaveTodo,handleUpdate }) {
  return (
    <div>
    {isEditting ? (
      <>
      <form onSubmit={()=>{handleUpdate(id)}}>
      <input type="text"
          value={title}
          onChange={(e)=>{handleSaveTodo(id,e.target.value)}}     
      />
      <button type="submit" onClick={()=>{handleUpdate(id)}}>update</button>

      </form>
      </>
    ) : (
       <>
        <input
          checked={checked}
          onChange={(event) => {
            onToggle(id, event);
          }}
          id={id}
          style={{ marginRight: "0.5em" }}
          type="checkbox"
        />
        <span>{title}</span>
        <button onClick={() => handleEdit(id)} style={{ marginLeft: "0.5em" }}>
          Edit
        </button>
        <button
          onClick={() => handleDelete(id)}
          id={id}
          style={{ marginLeft: "10px" }}
        >
          Delete
        </button>
      </>
    )}
  </div>
  
  );
}

export default TodoItem;
