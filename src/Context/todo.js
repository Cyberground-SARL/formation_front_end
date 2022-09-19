import React, {createContext, useState} from 'react'
// import MainLayout from '../components/layouts/main'
import axios from 'axios'



export const TodoContext = createContext();

export const TodoContextProvider = ({children}) => {
    const [todo, setTodo] = useState([])
    const postTodo = (url,title, description) => {
        axios.post(url, {
            title : title
            description : description
        })
        .then((res)=>{
            setTodo([...todo], {
                title: title,
                description: description
            })
        })
        .catch((err) => {
        
        })
        
        console.log(todo)
    }
    return (
        <TodoContext.Provider> 
            {children}
        </TodoContext.Provider>
    );
}

