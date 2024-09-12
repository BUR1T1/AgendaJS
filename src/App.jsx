import { useState } from 'react';

import Todo from './components/Todo';
import TodoFormulario from './components/TodoFormulario';
import Search from './components/Search';
import Filter from './components/filter';

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Estudar conceitos de Spring Boot',
      categoria: 'Estudo',
      isComplete: false,
    },
    {
      id: 2,
      text: 'Finalizar o layout do portfólio',
      categoria: 'Projeto',
      isComplete: false,
    },
    {
      id: 3,
      text: 'Comprar mantimentos para a semana',
      categoria: 'Pessoal',
      isComplete: false,
    },
   
  ]);

  const [search , setSearch] = useState("");


  const addTodo = (text , categoria) => {

    const newTodos = [
      ...todos, 
      {
      id: Math.floor(Math.random() * 1000),
      text,
      categoria,
      isComplete: false,
      },
  ];

  setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);

    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? (todo.isComplete = !todo.isComplete) : todo);

    setTodos(newTodos);
  }
  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter />
      <div className="todolist">
        {todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())).map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      <TodoFormulario addTodo={addTodo}/>
    </div>
  );
}

export default App;
