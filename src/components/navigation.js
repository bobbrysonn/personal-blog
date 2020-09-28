import React from "react";
import {
    Navbar,
    Nav,
} from "react-bootstrap";
import "../css/navigation.css"
import logo from "../images/navbar-brand.png";

function Navigation(props) {

    let navbar = (
        <Navbar className="navigation" sticky="top" expand="md">
            <Navbar.Brand href="#home"><img alt="Navbar brand" src={logo} width="30" height="30"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#profile">Profile</Nav.Link>
                    <Nav.Link href="#technologies">Technologies</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );

    return navbar;
}

export default Navigation;