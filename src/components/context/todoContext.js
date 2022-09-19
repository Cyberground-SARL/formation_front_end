import React, { createContext, useState } from "react";

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, description, id) => {
    setTasks = {
      id: id,
      title: title,
      description: description,
    };
  };
  return (
    <TaskContext.Provider value={{ tasks, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};
export const TaskContext = createContext([]);
