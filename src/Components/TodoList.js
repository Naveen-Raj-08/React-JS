import React from "react";
export const TodoList = ({data, removeTodo, completeTodo, isCompleted}) => {
  const handleDeleteTodo = () => {
    removeTodo(data.id);
  };

  const handleComplete = (e) => {
    let check = e.target.checked;
    completeTodo(data.id, check);
  };

  return (
    <div className={isCompleted === true ? "list completed" : "list"}>
      <div className="todo">
        <input type="checkbox" id={data.id} onChange={handleComplete} />
        <label className="mx-2" htmlFor={data.id}>
          {data.title}
        </label>
      </div>
      <div className="actions">
        {/* <button className="btn btn-secondary" onClick={handleEdit}>
          Edit
        </button> */}
        <button className="btn btn-danger" onClick={handleDeleteTodo}>
          Delete
        </button>
      </div>
    </div>
  );
};
