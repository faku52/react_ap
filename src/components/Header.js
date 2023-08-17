import { Container, Navbar , FormControl, NavDropdown} from "react-bootstrap";
import React from "react";

export const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand>
            <a href='/'>Shopping Cart</a>
        </Navbar.Brand>
        <Navbar.Text className="search">
            <FormControl style={{width: 500}} type="text" placeholder="Busca un producto" className="m-auto"/>
        </Navbar.Text>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
};
