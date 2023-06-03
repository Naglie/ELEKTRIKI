import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../assets/elektrik1.png';

export default function Cover() {
  return (
    <Container
      fluid
      style={{
        height: '1080px',
        width: '100%',
        backgroundSize: 'cover',
        backgroundImage: 'url(' + img + ')',
      }}
    >
      <div
        style={{
          width: '50%',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '50%',
            color: 'white',
          }}
        >
          <h1>Светлое будущее начинается с нами!</h1>
        </div>
      </div>
    </Container>
  );
}
