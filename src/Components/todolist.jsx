// TodoList.js
import React, { Component } from "react";
import TodoItem from "./todoitem";
import FlipMove from 'react-flip-move';

function TodoList({ todos, onDelete, onToggle, onEdit,onSaveEdit,onUpdate }) {
  return (
    <>
    

    <div style={{display:'flex',flexDirection:'column',justifyContent:"center",alignItems:'center'}}>
  <FlipMove>

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
  </FlipMove>
    </div>
    
    

    </>
  );
}

export default TodoList;
