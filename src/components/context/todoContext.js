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
        setTasks([
          ...tasks,
          {
            title: task.title,
            description: task.description,
          },
        ]);
        setSuccess(res.message);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  // .get
  axios
    .get("http://localhost:4444/")
    .then((res) => setTasks({ tasks: res.data }));

  // .delete
  axios.delete(`http://localhost:4444/${this.tasks.id}`).then((res) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });
  });

  return (
    <TaskContext.Provider value={{ tasks, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};
export const TaskContext = createContext([]);
