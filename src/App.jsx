import React from "react";
import FormTodo from "./components/FormTodo";
import { useState } from "react";
import { getInitialData, showFormattedDate } from "./utils/index";
import ListItem from "./components/ListItem";
import Limit from "./components/Limit";
import SeacrhInput from "./components/SeacrhInput";

const App = () => {
  const data = getInitialData();
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState(data);
  const [body, setBody] = useState("");
  const [searchTodo, setSearchTodo] = useState("");
  const limit = 50;

  const handleForm = (e) => {
    e.preventDefault();
    const newTodo = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date(),
      archived: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setBody("");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "title") return setTitle(value);
    if (name === "body") return setBody(value);
  };

  const handleDelete = (id) => {
    let ques = confirm("Anda yakin untuk menghapus data ini?");
    if (!ques) return;
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos);
  };

  const handleArchived = (id) => {
    setTodos((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) return { ...item, archived: !item.archived };
        return item;
      });
    });
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTodo(value);
  };

  const filterItems = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTodo.toLowerCase())
  );

  const archivedItems = filterItems.filter((todo) => todo.archived === true);
  const activedItems = filterItems.filter((todo) => todo.archived === false);
  
  return (
    <div className="bg-gradient-to-br from-gray-800 to-slate-900 min-h-screen">
      <Limit limit={limit} titleLength={title.length} />
      <FormTodo
        handleInput={handleInput}
        handleForm={handleForm}
        title={title}
        body={body}
        limit={limit}
      />

      <SeacrhInput handleSearch={handleSearch} searchTodo={searchTodo} />

      <h3 className="text-center font-bold text-white my-5 bg-blue-700">
        Catatan Aktif
      </h3>
      <ListItem
        todos={activedItems}
        showFormattedDate={showFormattedDate}
        handleDelete={handleDelete}
        handleArchived={handleArchived}
      />

      <h3 className="text-center font-bold text-white my-5 bg-blue-700">
        Arsip
      </h3>
      <ListItem
        todos={archivedItems}
        showFormattedDate={showFormattedDate}
        handleDelete={handleDelete}
        handleArchived={handleArchived}
      />
    </div>
  );
};

export default App;
