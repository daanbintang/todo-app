import React from "react";
import Button from "./Button";

const ListItem = (
  { todos, showFormattedDate, handleDelete, handleArchived },
) => {
  return (
    <div className="flex flex-wrap container mx-auto justify-center gap-5">
      {todos.length === 0 ? <p className="text-white font-bold">Tidak ada data</p> : (
        <>
          {todos.map((todo) => (
            <ul
              key={todo.id}
              className="rounded-xl text-white w-96 flex flex-col gap-3 bg-gray-800 p-3"
            >
              <li className="font-bold text-center">{todo.title}</li>
              <li className="text-sm font-light">{todo.body}</li>
              <li className="flex justify-center gap-x-3">
                <Button
                  textcolor={"bg-red-500"}
                  onClick={() => handleDelete(todo.id)}
                >
                  Hapus
                </Button>
                <Button
                  textcolor={"bg-yellow-700"}
                  onClick={() => handleArchived(todo.id)}
                >
                  {todo.archived ? "Aktifkan" : "Arsipkan"}
                </Button>
              </li>
              <li className="text-xs">{showFormattedDate(todo.createdAt)}</li>
            </ul>
          ))}
        </>
      )}
    </div>
  );
};

export default ListItem;
