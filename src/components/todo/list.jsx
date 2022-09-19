import {React, useContext} from 'react'
import {Col, Table} from 'react-bootstrap'
import StyleList from './list.module.css'
import { TaskContext } from '../../context/context'
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'



export default function ListOfToDos() {
    const {tasks, deleteTask, editTask} = useContext(TaskContext)
    

     
    const handleEdit = () => {
        editTask()
        console.log(tasks)
    }

    
    
    return (
        <>
        <h1 className={StyleList.heading}>List of all to do lists</h1>
            <Col xl={12} lg={12} md={12} sm={12} xs={12} xxs={12} className={StyleList.container}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => (
                        <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>@mdo</td>
                        <td><button onClick={() => deleteTask(task.id)}>delete</button></td>
                        <td><button onClick={handleEdit}>edit</button></td>
                        </tr>))}
                    </tbody>
                </Table>
            </Col>
        </>
    )
}