import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { Link, Outlet } from "react-router";



function Layout(props) {
    return (
    <div>
        <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="WhackAMole">WhackAMole</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        <Outlet />
    </div>
    )

} export default Layout;