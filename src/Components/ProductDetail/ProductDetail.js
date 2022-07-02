import React from 'react';
import {Container, Row} from "react-bootstrap";


const ProductDetail = ({product}) => {
    return (
    <Container fluid>
        <Row>
            <Col>
                <Card>
                    <Card.Img variant={"right"} src={}>
                        Product
                    </Card.Img>
                    <Card.Body>
                        <Card.Title>
                            ProductTitle
                        </Card.Title>
                        <Card.Text>
                            ProductDescription Goes Here
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Container>
                    Description
                </Container>
            </Col>
            <Col>
                <Container>
                    SellingItems
                </Container>
            </Col>
        </Row>
    </Container>
    )
}


export default ProductDetail;