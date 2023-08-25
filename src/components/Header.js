import { Container, Form, Navbar, Nav, Dropdown, Badge, Button } from 'react-bootstrap';
import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';

export const Header = () => {

  const { state: {cart}, 
  dispatch
} = CartState(); 

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
            />
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
          <Dropdown >
            <Dropdown.Toggle style={{ marginRight: 130 }} variant="secondary">
              <HiShoppingCart color="white" font-size="20px" />
              <Badge bg="none">{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 90 }}>
              { cart.length > 0 ? (
              <>
                {cart.map((prod) =>(
                  <span className='cartitem' key={prod.id}>
                    <img
                      src={prod.image}
                      className="cartItemImg"
                      alt={prod.name}
                    />
                    <div className='cartItemDetail'>
                      <span>{prod.name}</span>
                      <span>$ {prod.price.split(".")[0]}</span>
                    </div>
                    <AiFillDelete
                      fontSize="20px"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        })
                      }
                    />
                  </span>
                ))}
                <Link to="/cart" >
                      <Button variant='success' style={{ width: "95%", margin: "0 5px" }}>
                        Ir al carrito
                      </Button>
                </Link>
              </>
              ) : ( 
              <span style={{ padding: 5 }}>El carrito esta vacio</span>
              )}
              
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
