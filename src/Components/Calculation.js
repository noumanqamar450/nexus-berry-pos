import ProductSet from "./ProductSet"
import { Form, Button, ListGroup, ButtonGroup, Modal } from "react-bootstrap";
import { CashCoin, PlusCircleFill, PrinterFill, SlashCircleFill, Trash3Fill, XCircleFill } from "react-bootstrap-icons";
import { useState } from "react";

const cart = [
    {
        id: 1,
        title: 'iPhone 9',
        price: 50000
    },
    {
        id: 2,
        title: 'iPhone X',
        price: 65000
    },
    {
        id: 3,
        title: 'iPhone 14 Pro',
        price: 95000
    },
    {
        id: 4,
        title: 'iPhone 13 Pro',
        price: 85000
    }
]

const Calculation = () => {
    const [checkbox, setCheckbox ] = useState(false)
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <div className="cal-handle">
                <Form.Check
                    type='checkbox'
                    className="float-start mt-2"
                    label='Select All'
                    onChange={()=>{
                        checkbox ? setCheckbox(false) : setCheckbox(true)
                    }}
                    checked={checkbox}
                /> 
                {checkbox && <Button variant='success' className="float-start mx-2"><Trash3Fill /> </Button>}
                <Button variant='primary' className="float-end" onClick={handleShow}><PlusCircleFill /> </Button>
                <Form.Select className="float-end w-auto mx-1">
                    <option>Select Customer</option>
                    <option value="1">Ali</option>
                    <option value="2">Nouman</option>
                    <option value="3">Afaq</option>
                </Form.Select>
            </div><br />
            <div className="card-section">
                {
                    cart.map((c, i) => (
                        <ProductSet checkbox={checkbox} code={c.id} title={c.title} price={c.price} key={i}/>
                    ))
                }
            </div>
            <ListGroup variant="flush">
                <ListGroup.Item>Total <strong className="float-end">Rs. 7550000</strong></ListGroup.Item>
                <ListGroup.Item>Discount <strong className="float-end">5%</strong></ListGroup.Item>
                <ListGroup.Item>GST <strong className="float-end">7%</strong></ListGroup.Item>
                <ListGroup.Item variant='primary'>Grand Total <strong className="float-end">Rs. 8500000</strong></ListGroup.Item>
            </ListGroup>
            <div className='row mt-2'>
                <div className="col-3">
                    <strong>Payment:</strong> 
                </div>
                <div className="col-3">
                    <Form.Check
                        type="radio"
                        label="Cash"
                        name="paymentMethod"
                        id="paymentMethodCash"
                    />
                </div>
                <div className="col-3">
                    <Form.Check
                        type="radio"
                        label="Card"
                        name="paymentMethod"
                        id="paymentMethodCheck"
                    />
                </div>
                <div className="col-3">
                    <Form.Check
                        type="radio"
                        label="Credit"
                        name="paymentMethod"
                        id="paymentMethodCredit"
                    />
                </div>
            </div>
            <ButtonGroup className="my-1 mt-2 w-100" >
                <Button variant="primary"><CashCoin/> Collect Cash</Button>
                <Button variant="secondary"><PrinterFill/> Print Invoice</Button>
            </ButtonGroup>
            <ButtonGroup className="mt-2 w-100">
                <Button variant="danger"><XCircleFill/> Cancel Order</Button>
                <Button variant="success"><SlashCircleFill/> Hold Order</Button>
            </ButtonGroup>

            {/* Modal for Customer */}
            <Modal
                show={showModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Customer Name</Form.Label>
                            <Form.Control type="text" placeholder="Customer Name" />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="number" placeholder="Mobile Number" />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary">Add Customer</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Calculation;