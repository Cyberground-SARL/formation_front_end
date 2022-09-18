import React from 'react'
import MainLayout from '../components/layouts/main'
import CreateToDo from '../components/todo/create'
import ListOfToDos from '../components/todo/list'
export default function IndexView(){
    return (
        <>
        <MainLayout>
            <CreateToDo />
            <ListOfToDos />
        </MainLayout>
        </>
    )
}