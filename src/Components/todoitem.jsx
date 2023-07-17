// TodoItem.js
import React from "react";
import './todoitem.css';


function TodoItem({ title, id, handleDelete, onToggle, checked, handleEdit,isEditting,handleSaveTodo,handleUpdate }) {
  return (
    <div>
    {isEditting ? (
      <>
      <div style={{ borderRadius:'60px', padding:'1rem 3rem', backgroundColor: 'rgb(247, 242, 242)', textAlign: 'center' }}  className="m-2">
      <form onSubmit={()=>{handleUpdate(id)}}>
      <input type="text"
      className="todo__input"
          value={title}
          onChange={(e)=>{handleSaveTodo(id,e.target.value)}}     
      />
      <button className="m-3" type="submit" onClick={()=>{handleUpdate(id)}}>update</button>

      </form>

      </div>
      </>
    ) : (
       <>
       <div style={{ borderRadius:'60px', padding:'1rem 3rem', backgroundColor: 'rgb(247, 242, 242)', textAlign: 'center' }}  className="m-2">

        <input
          checked={checked}
          onChange={(event) => {
            onToggle(id, event);
          }}
          id={id}
          style={{ marginRight:'30px' }}
          type="checkbox"
        />
        <span style={{fontSize:'20px'}}>{title}</span>
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
       </div>
      </>
    )}
  </div>
  
  );
}

export default TodoItem;
