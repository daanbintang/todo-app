import React from "react";
import Input from "./Input";

const SeacrhInput = ({ searchTodo, handleSearch }) => {
  return (
    <Input
      name="searchTodo"
      value={searchTodo}
      onChange={handleSearch}
      placeholder="search todo"
    />
  );
};

export default SeacrhInput;
