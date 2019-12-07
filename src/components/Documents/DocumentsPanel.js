import React from 'react'

import './Documents.css'
import doc from './doc_1.png'

import {Col, Container, Row} from "react-bootstrap";

const DocumentsPanel = (props) => {

    const {title, text} = props[0];

    return (
        <div className="documents-panel">
            <Container>
                <Row>
                    <Col sm={12} md={3} lg={3}>
                        <img src={doc} alt=""/>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <img src={doc} alt=""/>
                    </Col>
                    <Col sm={12} md={true} lg={true} className="order-first order-lg-last">
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default DocumentsPanel