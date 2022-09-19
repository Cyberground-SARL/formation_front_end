import {React, createContext, useState} from "react";
import axios from "axios";


const URL = 'http://localhost:4444/tasks'
export const TaskContext = createContext([]);

export const TaskProvider =( {children}) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    const [tasks, setTask] = useState ([])


    const postTask = (title, description) => {
        setLoading(true);
        const task = {
            title: title,
            description: description
        }
        axios.post(URL, task )
        .then ( (response) => {
            setTask([...tasks, {
                id: response.data.id,
                title: response.data.title,
                description: response.data.description
            }])
            setLoading(false) 
            setSuccess(response.message)
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
            setError(error)
        })
        

    } 


    const getTask = () => {
        setLoading(true)
        axios.get(URL)
        .then ( (response) => {
            let responseTask = []
            response.data.map(({id, title, description}) => {
                console.log(title)
                responseTask= [...responseTask,{
                    id: id,
                    title: title,
                    description: description
                }]
            })
            setLoading(false)
            setSuccess(response.message)

            setTask([...responseTask])
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
            setError(error)
        })
    }


    const deleteTask = (id) => {
        setLoading(true)
        axios.delete(URL+"/"+id)
        .then ((response) => {
            setTask(tasks.filter(task => task.id != id))
            setLoading(false)
            setSuccess(response.message)
        })

        .catch((error) => {
            console.log(error)
            setLoading(false)
            setError(error)
        })
    }

    //edit function is still not working yet, needs to be developed

    const editTask = (id, title, description) => {
        console.log(id)
        const task = {
            title: title,
            description: description
        }
        setLoading(true)
        axios.put(URL+"/"+id, task)
        .then ((response) => {
            setTask()
            setLoading(false)
            setSuccess(response.message) 
        })
        .catch((error) => {
            setLoading(error)
            setError(error)
        })
    }

    return (
        <TaskContext.Provider value={{tasks, postTask, getTask, deleteTask, editTask}}>{children}</TaskContext.Provider>
    )
}
