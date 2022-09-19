import React, {createContext, useState} from 'react'
// import MainLayout from '../components/layouts/main'
import axios from 'axios'



export const TodoContext = createContext();

export const TodoContextProvider = ({children}) => {
    const [todo, setTodo] = useState([]);
    const [loading, setLoading] = useState([]);
    const [sucess, setSucess] = useState ([]);

    const postTodo = (url,title, description) => {
        axios.post(url, {
            title : title
            description : description
        })
        .then((res)=>{
            setTodo([...todo], {
                title: title,
                description: description,
            })
        })
        .catch((err) => {
        
        })
       
       

            axios.delete(`http://localhost:4444/${this.Todo.id}`).then((res) => {
                this.setState({
                  todo: this.state.Todo.filter((todo) => todo.id !== id),
                });
              });
    }
    const getAllTasks = () => {
     axios.get("http://localhost:4444/")
            .then((res) => setTodo(res.data))
            .catch((err)=>{console.log(err)})
    }
    return (
        <TodoContext.Provider> 
            {children}
        </TodoContext.Provider>
    );
}

