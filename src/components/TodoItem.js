import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoOption from "./TodoOption";

function TodoItem() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [tab, setTab] = useState("all");
  const [edit, setEdit] = useState({ id: "", text: "" });

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTodo = (e) => {
    const todo = {
      id: new Date().getTime(),
      text: inputValue,
      isDone: false,
    };
    setTodos([todo, ...todos]);
    setInputValue("");
  };

  const hanldeKeyPress = (e) => {
    if (e.key === "Enter") return addTodo();
  };

  const handleTabChange = (e) => {
    setTab(e.target.dataset.tab);
  };

  const handleDelete = (e) => {
    setTodos(todos.filter((i) => i.id !== Number(e.target.dataset.id)));
  };

  const handleIsDone = (e) => {
    setTodos(
      todos.map((i) =>
        i.id === Number(e.target.dataset.id)
          ? { ...i, isDone: e.target.checked }
          : i
      )
    );
  };

  const handleEdit = (e) => {
    const id = Number(e.target.dataset.id);
    const [{ text }] = todos.filter((i) => (i.id === id ? i.text : ""));
    setEdit({ id, text });
  };

  const handleEditValue = (e) => {
    setEdit({ ...edit, text: e.target.value });
  };

  const handleCancelEdit = () => {
    setEdit("");
  };

  const handleConfirmEdit = (e) => {
    setTodos(
      todos.map((i) =>
        i.id === Number(edit.id) ? { ...i, text: edit.text } : i
      )
    );
    setEdit("");
  };

  return (
    <>
      <h1>TODO LIST</h1>
      <div className="input">
        <input
          type="text"
          value={inputValue}
          onKeyPress={(e) => hanldeKeyPress(e)}
          onChange={(e) => handleInputChange(e)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <TodoOption tab={tab} handleTabChange={handleTabChange} />
      <TodoList
        todos={todos}
        tab={tab}
        edit={edit}
        handleDelete={handleDelete}
        handleIsDone={handleIsDone}
        handleEdit={handleEdit}
        handleEditValue={handleEditValue}
        handleCancelEdit={handleCancelEdit}
        handleConfirmEdit={handleConfirmEdit}
      />
    </>
  );
}

export default TodoItem;
