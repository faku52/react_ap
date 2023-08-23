import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Rating } from '../components/Rating';

export const SingleProduct = ({ prod }) => {
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span> {prod.price.split('.')[0]}</span>
            { prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div> 4 days delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          <Button variant="danger" >
            Remover del carrito
          </Button>
          <Button disabled={ !prod.inStock} >
            {" "}
            {!prod.inStock ? "Sin Stock" : "Añadir al carrito"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
