import React, { useContext } from "react";
import { Col, Table } from "react-bootstrap";
import { TaskContext } from "../context/todoContext";
import StyleList from "./list.module.css";

export default function ListOfToDos() {
  const { tasks } = useContext(TaskContext);

  return (
    <>
      <h1 className={StyleList.heading}>List of all to do lists</h1>
      <Col
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        xxs={12}
        className={StyleList.container}
      >
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
            <tr>
              <td>1</td>
              <td>{tasks.title}</td>
              <td>{tasks.description}</td>
              <td>@whatever</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </>
  );
}
