import { useState, useEffect } from "react";
import { Card, Button, Badge, Form, Row, Col } from "react-bootstrap";
import { PlusCircleFill, DashCircleFill } from "react-bootstrap-icons";
import { productIncrease, productDecrease, priceTotal } from '../Lib/Pos'

const Products = (props) => {
    const [count, setCount] = useState(1)
    const [total, setTotal] = useState(props.price)
    
    const totalSet = () => {
        setTotal(priceTotal(props.price, count))
    } 
    useEffect(() => {
        totalSet()
    })
    


    return(
        <>
            <Card className="mt-4" border="primary">
                <Badge bg='success' className="product-id">Code: {props.id}</Badge>
                <Card.Img variant="top" src={props.thumbnail} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <h5><Badge bg='primary'>Rs. {props.price} x {count}</Badge> <span className="float-end">Rs. {total}</span></h5>

                    <Row>
                        <Col xs={3}>
                            <Button
                                variant="success"
                                onClick={() => {
                                    setCount(productDecrease(count))
                                }}
                                >
                                <DashCircleFill />
                            </Button>
                        </Col>
                        <Col xs={6}>
                            <Form.Control
                                type="number"
                                value={count}
                                onChange={(e)=>{
                                    setCount(e.target.value)
                                    if (count > props.stock){
                                        setCount(props.stock)
                                    }
                                }}
                                
                            />
                        </Col>
                        <Col xs={3}>
                            <Button 
                                variant="primary" 
                                onClick={()=>{
                                    setCount(productIncrease(count, props.stock))
                                }}
                            >
                                <PlusCircleFill />
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
                <Button variant="primary">Add </Button>
            </Card>
        </>
    )
}

export default Products;