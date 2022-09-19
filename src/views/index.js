import React, { useContext, useEffect } from 'react'
import MainLayout from '../components/layouts/main'
import CreateToDo from '../components/todo/create'
import ListOfToDos from '../components/todo/list'
import { TaskContext } from '../context/context'


export default function IndexView(){
    const {getTask} = useContext(TaskContext)
    useEffect(() => {
        console.log("heere")
        getTask()
    }, []);
    return (
        <>
        <MainLayout>
            <CreateToDo />
            <ListOfToDos />
        </MainLayout>
        </>
    )
}