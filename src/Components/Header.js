import { useState } from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Dropdown, ListGroup } from 'react-bootstrap';
import { Gear } from 'react-bootstrap-icons';
import { themeMode } from '../Lib/Pos'


function Header() {
    const [theme , setTheme] = useState('light');

    return (
        <Navbar bg={theme} variant={theme} expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Brand href="#">Nexus POS</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#product">Product</Nav.Link>
                        <Nav.Link href="#pos" active>POS</Nav.Link>
                        <Nav.Link href="#sale">Sale</Nav.Link>
                        <Nav.Link href="#customer">Customer</Nav.Link>
                        <NavDropdown title="Hold" id="navbarScrollingDropdown" variant={theme} >
                            <NavDropdown.Item href="#action3">
                                Customer 01
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Customer 02
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Remove All
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="primary">Search</Button>
                    </Form>
                    <Dropdown autoClose={false}>
                        <Dropdown.Toggle variant={theme === 'dark' ? 'primary' : 'info'} id="dropdown-autoclose-false" className="mx-3">
                            <Gear color={theme === 'dark' ? 'white' : '#343a40'} id="dropdown-basic" size={22} className="mx-3 setting-btn"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu variant={theme} align="end">
                            <ListGroup variant="flush">
                                <ListGroup.Item variant={theme}>
                                    <Form>
                                        <Form.Check
                                            type="switch"
                                            label={theme === 'light' ? "Dark" : 'Light'}
                                            onClick={() => {
                                                setTheme(themeMode(theme))
                                            }
                                            }
                                        />
                                    </Form>
                                </ListGroup.Item>
                                <ListGroup.Item variant={theme} action href='#'>Shortcuts</ListGroup.Item>
                            </ListGroup>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;