import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import "./todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  const onClickAddHandler = () => {
    dispatch(addTodo(inputData), setInputData(""));
  };

  const onClickRemoveHandler = () => {
    dispatch(removeTodo());
  };

  const onClickDeleteHandler = (elem) => {
    dispatch(deleteTodo(elem.id), setInputData(""));
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items Here...."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
              ref={(input) => input && input.focus()}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => onClickAddHandler()}
            />
          </div>
          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-trash-alt add-btn"
                      title="delete item"
                      onClick={() => onClickRemoveHandler(elem)}
                      // dispatch(deleteTodo(elem.id), setInputData(""))
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="remove All"
              onClick={() => onClickRemoveHandler()}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
