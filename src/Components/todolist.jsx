// TodoList.js
import React, { Component } from "react";
import TodoItem from "./todoitem";

function TodoList({ todos, onDelete, onToggle, onEdit,onSaveEdit,onUpdate }) {
  return (
    <>
    <div style={{display:'flex',flexDirection:'column',justifyContent:"center",alignItems:'center'}}>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          checked={todo.checked}
          handleEdit={onEdit}
          title={todo.title}
          onToggle={onToggle}
          id={todo.id}
          isEditting={todo.isEditting} 
          handleDelete={onDelete}
          handleSaveTodo={onSaveEdit}
          handleUpdate={onUpdate}
        />
      ))}
    </div>
    

    </>
  );
}

export default TodoList;
