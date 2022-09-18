import React from 'react'
import {Col, Form, Button} from 'react-bootstrap'
import StyleCreate from './create.module.css'
export default function CreateToDo() {
    return (
        <>
            <h1 className={StyleCreate.heading}>Create New Task</h1>
            <Col xl={12} lg={12} md={12} sm={12} xs={12} xxs={12} className={StyleCreate.container}>
                <Form className={StyleCreate.form}>
                    <Form.Group className={StyleCreate.formGroup}>
                        <Form.Label className={StyleCreate.formLabel}>Task title : </Form.Label>
                        <Form.Control className={StyleCreate.formControl} type="text" placeholder='Enter the title of the task' />
                    </Form.Group>
                    <Form.Group className={StyleCreate.formGroup}>
                        <Form.Label className={StyleCreate.formLabel}>Task Description : </Form.Label>
                        <Form.Control className={StyleCreate.formControl} as="textarea" rows="5" placeholder='Enter the description of the task' />
                    </Form.Group>
                    <Form.Group className={StyleCreate.formGroup}>
                        <Button className={StyleCreate.submitBtn}>Create</Button>
                    </Form.Group>
                </Form>
            </Col>
        </>
    )
}