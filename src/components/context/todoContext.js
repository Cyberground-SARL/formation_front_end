import React, { createContext, useState } from "react";
import axios from 'axios'
export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [sucess, setSuccess] = useState()
  const [loading, setloading] = useState(false)
  const createTask = (url,task) => {
    setLoading(true)
    axios.post(url,task)
    .then((res) => {
     setTasks([...tasks, {
        title: task.title,
        description: task.description,
      }])
      setSuccess(res.message)
      setLoading(false)
    })
    .catch((err)=>{
      console.log(err)
      setLoading(false)
    })
    
  };
  return (
    <TaskContext.Provider value={{ tasks, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};
export const TaskContext = createContext([]);
