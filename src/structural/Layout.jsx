import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router";



function Layout(props) {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand as={Link} to="/">Badger Arcade</Navbar.Brand>
                    
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="HighScores">High Scores</Nav.Link>
                        <Nav.Link as={Link} to="GameRules">Game Rules</Nav.Link>
                        <NavDropdown title="Games">
                            <NavDropdown.Item as={Link} to="WhackAMole">Whack-A-Bucky</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="Memorization">Mendota Memorizer</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )

} export default Layout;