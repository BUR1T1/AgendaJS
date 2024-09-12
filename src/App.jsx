import { useState } from 'react';
import Todo from './components/Todo';
import TodoFormulario from './components/TodoFormulario';
import Search from './components/Search';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Estudar conceitos de Spring Boot', categoria: 'Estudo', isComplete: false },
    { id: 2, text: 'Finalizar o layout do portfólio', categoria: 'Projeto', isComplete: false },
    { id: 3, text: 'Comprar mantimentos para a semana', categoria: 'Pessoal', isComplete: false },
  ]);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Asc');
  const [activeTab, setActiveTab] = useState(''); // Estado para controlar a aba ativa

  const addTodo = (text, categoria) => {
    const newTodos = [...todos, { id: Math.floor(Math.random() * 1000), text, categoria, isComplete: false }];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <header className="header">
        <button onClick={() => setActiveTab('create')}>Criar Tarefa</button>
        <button onClick={() => setActiveTab('search')}>Pesquisar</button>
        <button onClick={() => setActiveTab('filter')}>Filtrar</button>
      </header>

      <div className="tab-content">
        {activeTab === 'create' && <TodoFormulario addTodo={addTodo} />}
        {activeTab === 'search' && <Search search={search} setSearch={setSearch} />}
        {activeTab === 'filter' && <Filter filter={filter} setFilter={setFilter} setSort={setSort} />}
      </div>

      <div className="todolist">
        {todos
          .filter((todo) => (filter === 'All' ? true : filter === 'Completo' ? todo.isComplete : !todo.isComplete))
          .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => (sort === 'Asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)))
          .map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}
      </div>
    </div>
  );
}

export default App;
