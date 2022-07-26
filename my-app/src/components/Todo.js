import React, { useState } from "react";
import Showtodo from "./Showtodo";
import "./Todo.css";

const Todo = () => {
  const [Task, setTask] = useState("input here...");
  const [data, setData] = useState([]);

  const onChangeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newData = Task;
    setData([...data, newData]);
    setTask("");
  };

  const deleteItem = (a) => {
    const finalData = data.filter((curEle, index) => {
      return index !== a;
    });
    setData(finalData);
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center main-row">
        <div className="col shadow main-col bg-white">
          <div className="row bg-primary text-white">
            <div className="col p-2">
              <h4 className="text-center">Todo App</h4>
            </div>
          </div>
          <form onSubmit={submitHandler}>
            <div className="row justify-content-between text-white p-2">
              <div className="form-group flex-fill mb-2 col-9">
                <input
                  type="text"
                  id="todo-input"
                  className="form-control"
                  value={Task}
                  onChange={onChangeHandler}
                />
              </div>
              <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">
                Add todo
              </button>
            </div>
          </form>
          {data.map((value, index) => {
            return (
              <Showtodo
                key={index}
                id={index}
                Task={value}
                onSelect={deleteItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
