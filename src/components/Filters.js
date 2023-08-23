import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Rating } from '../components/Rating';

export const Filters = () => {
  const [rate, setRate] = useState(3);

  return (
    <div className="filters">
      <span className="title">Filtrar Productos</span>
      <span>
        <Form.Check
          inline
          label="Ascendente"
          name="group1"
          type="radio"
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descendente"
          name="group1"
          type="radio"
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Sin stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Envio Rápido"
          name="group1"
          type="checkbox"
          id={`inline-4`}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={rate}
          onClick={(i) => setRate(i + 1)}
          style={{ cursor: 'pointer' }}
        />
      </span>
      <Button variant="light">Eliminar filtros</Button>
    </div>
  );
};
