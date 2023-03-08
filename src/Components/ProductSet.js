import { useState, useEffect } from "react";
import { Card, Button, Badge, Form, Row, Col } from "react-bootstrap";
import { PlusCircleFill, DashCircleFill, Trash3Fill } from "react-bootstrap-icons";
import { productIncrease, productDecrease, priceTotal } from '../Lib/Pos'

const ProductSet = (props) => {
    const [count, setCount] = useState(1)
    const [total, setTotal] = useState(props.price)
    const [singleCheckbox, setSingleCheckbox] = useState(false)

    const priceSet = () => {
        setTotal(priceTotal(props.price, count))
    }
    useEffect(() => {
        priceSet()
    })

    return (
        <>
            <Card className="mt-2" border="primary">
                <Badge bg='secondary' className="product-id">Code:    {props.code}</Badge>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                <Row>
                    <Col xs={5}>
                        <h5><Badge bg='primary'>Rs. {props.price} x {count}</Badge> <br/><span>Rs. {total}</span></h5>
                    </Col>
                    <Col xs={7}>

                        <Row>
                            <Col xs={3} style={{padding:'0px'}}>
                                <Button
                                    variant="success"
                                    onClick={() => {
                                        setCount(productDecrease(count))
                                    }}
                                >
                                    <DashCircleFill />
                                </Button>
                            </Col>
                            <Col xs={5} style={{ padding: '0px' }}>
                                <Form.Control
                                    type="number"
                                    value={count}
                                    onChange={(e) => {
                                        setCount(e.target.value)
                                        if (count > 50) {
                                            setCount(50)
                                        }
                                    }}
                                    
                                />
                            </Col>
                            <Col xs={3} style={{ padding: '0px' }}>
                                <Button
                                    variant="primary"
                                    onClick={() => {
                                        setCount(productIncrease(count, 50))
                                    }}
                                    style={{ marginLeft: '10px' }}
                                >
                                    <PlusCircleFill />
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Form.Check
                    type='checkbox'
                    className="float-start mt-2"
                    checked={props.checkbox || singleCheckbox ? true : false}
                    onChange={() => {
                        singleCheckbox ? setSingleCheckbox(false) : setSingleCheckbox(true)
                    }}
                    
                />                    
                <Button variant="danger" className="float-end" size="sm"><Trash3Fill /> </Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProductSet;