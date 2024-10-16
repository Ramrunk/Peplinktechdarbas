import { useState } from "react";

const List = () => {
  const [todos, setTodos] = useState<
    { title: string; description: string; priority: string }[]
  >([]);
  const [inputValues, setInputValues] = useState({
    title: "",
    description: "",
    priority: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [position, setPosition] = useState("end");

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdateTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? inputValues : todo
      );
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      if (position === "end") {
        setTodos([...todos, inputValues]);
      } else {
        setTodos([inputValues, ...todos]);
      }
    }
    setInputValues({ title: "", description: "", priority: "" });
  };

  const handleEdit = (index: any) => {
    setEditIndex(index);
    setInputValues(todos[index]);
  };

  const handleDelete = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleMoveUp = (index: number) => {
    if (index > 0) {
      const newTodos = [...todos];
      const [movedItem] = newTodos.splice(index, 1);
      newTodos.splice(index - 1, 0, movedItem);
      setTodos(newTodos);
    }
  };

  const handleMoveDown = (index: number) => {
    if (index < todos.length - 1) {
      const newTodos = [...todos];
      const [movedItem] = newTodos.splice(index, 1);
      newTodos.splice(index + 1, 0, movedItem);
      setTodos(newTodos);
    }
  };

  return (
    <div>
      <h2>TODO List</h2>
      <form onSubmit={handleAddOrUpdateTodo}>
        <input
          type="text"
          name="title"
          value={inputValues.title}
          onChange={handleChange}
          placeholder="Pavadinimas"
          required
        />
        <input
          type="text"
          name="description"
          value={inputValues.description}
          onChange={handleChange}
          placeholder="Aprašymas"
          required
        />
        <input
          type="number"
          name="priority"
          value={inputValues.priority}
          onChange={handleChange}
          placeholder="Svarbumas(Skaičius)"
          required
        />
        <select
          onChange={(e) => setPosition(e.target.value)}
          defaultValue="end"
        >
          <option value="end">Pridėt į galą</option>
          <option value="start">Pridėt į pradžia</option>
        </select>
        <button type="submit">
          {editIndex !== null ? "Atnaujinti" : "Pridėti"}
        </button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span>
              {todo.title} - {todo.description} (Svarbumas: {todo.priority})
            </span>
            <button onClick={() => handleEdit(index)}>Redaguoti</button>
            <button onClick={() => handleDelete(index)}>Ištrinti</button>
            <button onClick={() => handleMoveUp(index)} disabled={index === 0}>
              ↑
            </button>
            <button
              onClick={() => handleMoveDown(index)}
              disabled={index === todos.length - 1}
            >
              ↓
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
