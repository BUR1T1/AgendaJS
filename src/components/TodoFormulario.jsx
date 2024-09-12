import { useState } from "react";

const TodoFormulario = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [categoria, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !categoria) return;
    addTodo(value, categoria);
    setValue("");
    setCategory("");
  };

  return (
    <div className="formulario">
      <h2>criar tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          placeholder="digite o titulo"
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={categoria} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Estudo">Estudo</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Projeto">Projeto</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Saúde">Saúde</option>
          <option value="Casa">Casa</option>
          <option value="Finanças">Finanças</option>
          <option value="Lazer">Lazer</option>
        </select>
        <button type="submit">criar tarefa</button>
      </form>
    </div>
  );
};

export default TodoFormulario;
