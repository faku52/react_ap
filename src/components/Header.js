import { Container, Form, Navbar, Nav, Dropdown, Badge } from 'react-bootstrap';
import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
            <img
              src="https://st4.depositphotos.com/14009552/38450/v/450/depositphotos_384500344-stock-illustration-shopping-cart-logo-design-letter.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />{' '}
            <Link to="/">FastShop</Link>
        </Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Busca un producto"
            className="m-auto"
            aria-label="Search"
          />
        </Form>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="secondary">
              <HiShoppingCart color="white" font-size="20px" />
              <Badge bg="none">{10}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}> El Carrito esta vacio </span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
