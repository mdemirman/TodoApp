import React, { useState } from "react";

export default function Home() {
  const [ todos, setTodos ] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-3xl font-bold mb-4"> TODO App </h1>
      <div className="flex">
        <input
          className="border border-gray-400 mr-2 px-4 py-2 flex-grow"
          type="text"
          placeholder="Enter a todo item"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white
         font-bold py-2 px-4 rounded"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <ul className="list-disc list-inside my-4">
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            {todo}
            <button
              className="bg-red-500 text-white font-bold py-1 px-2 rounded"
              onClick={() => handleDeleteTodo(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
