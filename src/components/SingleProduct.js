import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Rating } from '../components/Rating';
import { CartState } from '../context/Context';

export const SingleProduct = ({ prod }) => {

  const {
    state: { cart }, 
    dispatch
  } = CartState()

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>$ {prod.price.split('.')[0]}</span>
            { prod.fastDelivery ? (
              <div> Envio Rápido</div>
            ) : (
              <div> Llega en 4 días</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {cart.some(p=>p.id ===prod.id) ? (
            <Button onClick={() => {
              dispatch({
                type: 'REMOVE_FROM_CART',
                payload: prod,
              });
            }} 
            variant="danger" >Remover del carrito</Button>
            ) : (
               <Button onClick={() => {
                 dispatch({
                   type: 'ADD_TO_CART',
                   payload: prod,
                 });
            }} disabled={ !prod.inStock} >
            {!prod.inStock ? "Sin Stock" : "Añadir al carrito"}
          </Button>
            )}     
        </Card.Body>
      </Card>
    </div>
  );
};
