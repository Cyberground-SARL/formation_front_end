import {React, useState, useContext} from 'react'
import {Col, Form, Button} from 'react-bootstrap'
import StyleCreate from './create.module.css'
import { TaskContext } from '../../context/context'
export default function CreateToDo() {
    const [tasktitle, setTitle] = useState("")
    const [taskdescription, setDescription] = useState("")

    const {postTask} = useContext(TaskContext);

    function createTask (e) {
        e.preventDefault();
        postTask(tasktitle, taskdescription)
    }

    return (
        <>
            <h1 className={StyleCreate.heading}>Create New Task</h1>
            <Col xl={12} lg={12} md={12} sm={12} xs={12} xxs={12} className={StyleCreate.container}>
                <Form onSubmit={createTask} className={StyleCreate.form}>
                    <Form.Group className={StyleCreate.formGroup}>
                        <Form.Label className={StyleCreate.formLabel}>Task title : </Form.Label>
                        <Form.Control className={StyleCreate.formControl} type="text" placeholder='Enter the title of the task'
                        onChange={e => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className={StyleCreate.formGroup}>
                        <Form.Label className={StyleCreate.formLabel}>Task Description : </Form.Label>
                        <Form.Control className={StyleCreate.formControl} as="textarea" rows="5" placeholder='Enter the description of the task' 
                        onChange={e => setDescription(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className={StyleCreate.formGroup}>
                        <Button className={StyleCreate.submitBtn} type="submit">Create</Button>
                    </Form.Group>
                </Form>
            </Col>
        </>
    )
}