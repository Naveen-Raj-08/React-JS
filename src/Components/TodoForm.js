import React from "react";

export const TodoForm = ({handleTodo, handleSubmit, editTodo, PutTodo}) => {
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="d-flex align-content-center">
        <div className="form-group">
          {editTodo === true ? (
            <input
              type="text"
              className="form-control"
              placeholder="Type something..."
              value={PutTodo}
            />
          ) : (
            <input
              type="text"
              className="form-control"
              placeholder="Type something..."
              onChange={handleTodo}
            />
          )}
        </div>

        <button className="btn btn-primary" type="submit">
          {editTodo === true ? <span>Update</span> : <span>Add</span>}
        </button>
      </fieldset>
    </form>
  );
};
