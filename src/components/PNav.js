import React from 'react';
import {Navbar,Form,Button,NavDropdown,Nav} from 'react-bootstrap';

export default class PNav extends React.Component{

    render(){
        const text ="Exlcusify";
        return(
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand  href="#home">
                        <h4>{text}</h4>
                        <h6>Grow your Business</h6>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Why Exclusify?</Nav.Link>
                            <Nav.Link href="#link">How It works! </Nav.Link>
                            <Nav.Link href="#link">Our Partners </Nav.Link>
                            <Nav.Link href="#link">Testimonials </Nav.Link>
                        </Nav>
                        <Form inline>
                            <Button className = "bg-primary text-white text-center" >Sign Up!</Button>
                        </Form>
                     </Navbar.Collapse>
              </Navbar>
            </div>
            
        );
    }
}