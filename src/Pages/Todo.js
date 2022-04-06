import React from "react";
import {useState} from "react/cjs/react.development";
import {TodoForm} from "../Components/TodoForm";
import {TodoList} from "../Components/TodoList";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, completeTodo, removeTodo} from "../redux/todoSlice";

export const Todo = () => {
  const [Todo, setTodo] = useState("");
  // const [Todos, setTodos] = useState();
  // const [UpdateTodo, setUpdateTodo] = useState("");
  // const [isEdit, setIsEdit] = useState(false);

  // Redux
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handletodo = (e) => {
    let todo = e.target.value;
    setTodo(todo);
  };
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo({id}));
  };

  const handleComplete = (id, check) => {
    dispatch(completeTodo({id: id, completed: check}));
  };

  const handlesbumit = (e) => {
    e.preventDefault();
    // setTodos([...Todos, {id: Math.random(), todo: Todo}]);
    if (Todo) {
      dispatch(addTodo({title: Todo}));
    }
    e.target.reset();
  };

  // const handleUpdateTodo = (id, todo) => {
  //   let updateId = Todos.map((item) => {
  //     if (item.id === id) {
  //       setUpdateTodo(todo);
  //       setIsEdit(true);
  //     }
  //   });

  //   return updateId;
  // };

  return (
    <div className="container my-4">
      <h3 className="text-center">Todo App</h3>
      <div className="todo-container">
        <TodoForm
          handleTodo={handletodo}
          handleSubmit={handlesbumit}
          // editTodo={isEdit}
          // PutTodo={UpdateTodo}
        />

        {state.map((todo) => {
          return (
            <TodoList
              key={todo.id}
              data={todo}
              isCompleted={todo.completed}
              removeTodo={handleRemoveTodo}
              completeTodo={handleComplete}
            />
          );
        })}

        {/* <div className="row m-0 my-4 ">
          {Todos.length <= 0 ? (
            <p className="text-danger text-center">
              Sorry you don't have a list anymore..!
            </p>
          ) : (
            todos.map((list, index) => {
              return (
                <TodoList
                  key={index}
                  todo={list}
                  removeTodo={handleRemoveTodo}
                  updateTodo={handleUpdateTodo}
                />
              );
            })
          )}
        </div> */}
      </div>
    </div>
  );
};
