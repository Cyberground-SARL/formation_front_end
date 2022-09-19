import React, { createContext, useState } from "react";
import axios from "axios";

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [sucess, setSuccess] = useState();
  const [loading, setLoading] = useState(false);
  const createTask = (url, task) => {
    setLoading(true);
    axios
      .post(url, task)
      .then((res) => {
        setTasks([...tasks], {
          title: task.title,
          description: task.description,
        });
        setSuccess(res.message);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  // .get
  const getTask = (url) => {
    setLoading(true);
    axios
      .get("http://localhost:4444/")
      .then((res) => {
        setTasks(res.data);
        setSuccess(res.message);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  // .delete
  const deleteTask = (url, id) => {
    setLoading(true);
    axios.delete(`http://localhost:4444/${id}`).then((res) => {
      setTasks(
        [...tasks],
        tasks.filter((task) => task.id !== id)
      );
      setSuccess(res.message);
      setLoading(false).catch((err) => {
        console.log(err);
        setLoading(false);
      });
    });
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, getTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
export const TaskContext = createContext([]);
