import React from 'react'
import {Container, Row} from 'react-bootstrap'

export default function MainLayout({children}){
    return (
        <>
            <Container>
                <Row>
                    {children}
                </Row>
            </Container>
        </>
    )
}