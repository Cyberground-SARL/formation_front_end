import React, {createContext, useState} from 'react'
// import MainLayout from '../components/layouts/main'




export const TodoContext = createContext();

export const TodoContextProvider = ({children}) => {
    const [todo, setTodo] = useState()
    const postTodo = (title, description) => {
        setTodo(todo, {
            title: title,
            description: description
        })
        console.log(todo)
    }
    return (
        <TodoContext.Provider> 
            {children}
        </TodoContext.Provider>
    );
}

