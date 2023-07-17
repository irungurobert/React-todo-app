// App.js
import React, { Component, useEffect } from "react";
import TodoList from "./Components/todolist";
import Header from "./Components/header";
function App() {
  const [check, setCheck] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [todos, setTodos] = React.useState([
    { id: 1, title: "Buy groceries" },
    { id: 2, title: "Clean the house" },
    { id: 3, title: "Walk the dog" },
  ]);
  // useEffect(()=>{

  //   const savedCheck=localStorage.getItem('check');
  //   setCheck(JSON.parse(savedCheck));

  // })

  useEffect(() => {
    const storedData = localStorage.getItem("todos");
    storedData && setTodos(JSON.parse(storedData));
  }, []);

  function handleDelete(key) {
    const newTodos = todos.filter((todo) => {
      return todo.id != key;
    });
    setTodos(newTodos);
    saveTodo(newTodos);
  }

  function handleAdd(event) {
    event.preventDefault();
    let title = input;
    let id = new Date().getTime();
    let newTodo = [...todos, { id: id, title: title }];
    setTodos(newTodo);
    saveTodo(newTodo);
    setInput("");
  }
  function handleToggle(id,event) {
    
    const newTodos=todos.map(todo=>{
      if(todo.id===id){
        
        return {...todo,checked:event.target.checked};
      }
      return todo;
    })
    setTodos(newTodos);
    saveTodo(newTodos); 
  }

  function handleEdit(id){
   const newTodos=todos.map(todo=>{
     if(todo.id===id){
      return {...todo,isEditting:true};
     }
    return todo;
   })
    setTodos(newTodos);
  }

  function handleSaveTodo(id,newTitle){
     const newTodos=todos.map(todo=>{
      if(todo.id===id){
        return{...todo,title:newTitle}
      }
      return todo;
     })
   setTodos(newTodos);
   saveTodo(newTodos);
  }

  function handleUpdate(id){

    const newTodos=todos.map(todo=>{
      if(todo.id===id){
        return{...todo,isEditting:false}
      }
      return todo;
    })
    setTodos(newTodos);
    saveTodo(newTodos);
  }

  function saveTodo(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  return (
    <div style={{ textAlign: "center", marginTop: "2em"}} className="app__body">
      <header>
        <Header />
      </header>
      <div className="m-3">
        <form onSubmit={handleAdd}>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            type="text"
          ></input>
          <button
            disabled={!input}
            onClick={handleAdd}
            style={{ marginLeft: "1em" }}
          >
            Add todo
          </button>
        </form>
      </div>
      <main>
        <TodoList
          onToggle={handleToggle}
          todos={todos}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onSaveEdit={handleSaveTodo}
          onUpdate={handleUpdate}
        />
      </main>
    </div>
  );
}

export default App;
