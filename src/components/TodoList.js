import React, { useState, useEffect } from "react";
import "../App.css";
import TodosManager from "../services/manager";
import AddTodo from "./AddTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import clsx from "clsx";
import EditTodo from "./EditTodo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const notify = () => toast.error("This todo is deleted !");
  const notify1 = () => toast.success("This todo is done.Good work !!");
  const getAllTodos = async () => {
    const data = await TodosManager.getAllTodos();
    setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const addTodo = async (todo) => {
    await TodosManager.addTodo(todo);
  };
  const deleteTodo = async (id) => {
    await TodosManager.deleteTodo(id);
    notify();
    getAllTodos();
  };
  const updateTodoStatus = async (id, todo) => {
    const newTodo = { ...todo, status: "done" };
    await TodosManager.updateTodo(id, newTodo);
    notify1();
    getAllTodos();
  };
  const updateTodo = async (id, todo) => {
    await TodosManager.updateTodo(id, todo);
  };
  useEffect(() => {
    getAllTodos();
  }, []);
  return (
    <div className="list container-fluid py-5">
      <div className="row d-flex py-5">
        <div className="col-md-12 col-lg-8 col-sm-12 mx-auto">
          <div className="card-hover-shadow-2x mb-3 card">
            <div className="card-header-tab card-header">
              <div className="card-header-title font-size-lg text-capitalize font-weight-normal w-100 d-flex align-items-center justify-content-between">
                <p className="p-0 m-0">
                  <i className="fa fa-tasks" />
                  &nbsp;Task Lists
                </p>

                <AddTodo addTodo={addTodo} getAllTodos={getAllTodos} />
              </div>
            </div>
            <div className="scroll-area-sm">
              <perfect-scrollbar className="ps-show-limits">
                <div style={{ position: "static" }} className="ps ps--active-y">
                  <div className="ps-content">
                    <ul className=" list-group list-group-flush">
                      {!todos.length ? (
                        <div className="d-flex justify-content-center py-5">
                          <div>
                            <span>Loading...</span>
                          </div>
                          <div
                            className="spinner-grow mx-3"
                            role="status"
                          ></div>
                        </div>
                      ) : (
                        todos.map((todo) => (
                          <li className="list-group-item" key={todo.id}>
                            <div className="todo-indicator bg-warning" />
                            <div className="widget-content p-0">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left mr-2">
                                  <div className="custom-checkbox custom-control">
                                    {" "}
                                    <label
                                      className="custom-control-label"
                                      htmlFor="exampleCustomCheckbox12"
                                    >
                                      &nbsp;
                                    </label>{" "}
                                  </div>
                                </div>
                                <div className="widget-content-left">
                                  <div
                                    className={clsx(
                                      "widget-heading",
                                      "tit",
                                      todo.status == "done"
                                        ? "text-decoration-line-through"
                                        : ""
                                    )}
                                  >
                                    {todo.title} --- {todo.description}
                                  </div>
                                  <div className="widget-subheading">
                                    <i>{todo.owner}</i>
                                  </div>
                                </div>
                                <div className="widget-content-right">
                                  {" "}
                                  <button
                                    className="border-0 btn-transition btn btn-outline-success"
                                    onClick={() =>
                                      updateTodoStatus(todo.id, todo)
                                    }
                                  >
                                    {" "}
                                    <i className="fa fa-check" />
                                  </button>{" "}
                                  <button
                                    className="border-0 btn-transition btn btn-outline-danger"
                                    onClick={() => deleteTodo(todo.id)}
                                  >
                                    {" "}
                                    <i className="fa fa-trash" />{" "}
                                  </button>{" "}
                                  <EditTodo
                                    todo={todo}
                                    getAllTodos={getAllTodos}
                                    updateTodo={updateTodo}
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                        ))
                      )}
                    </ul>
                  </div>
                </div>
              </perfect-scrollbar>
            </div>
            <div className="d-block text-right card-footer py-3">
              <p className="text-muted text-end">
                {" "}
                Completed:{" "}
                {todos.filter((todo) => todo.status === "done").length}/
                {todos.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
