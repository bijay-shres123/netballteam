import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Container } from 'react-bootstrap'
import styled from "styled-components";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function NavBar() {
    return(
    
        <Navbar collapseOnSelect expand="lg" style={{background:"#09425A"}} variant="dark">
        <Container>
            
        <Navbar.Brand href="/">Train-Netball</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/forum">Forum</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown title="Training Session" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='navbar-nav ml-auto'>
          
            <Nav.Link href="/login" style={{color:'#fff'}}>
            <FontAwesomeIcon icon={faUser} style={{padding: '0px 2px'}} />
             Login
            </Nav.Link> 
            <Nav.Link href="/signup" style={{color:'#fff'}}>
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    
    )
}