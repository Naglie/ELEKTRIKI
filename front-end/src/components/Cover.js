import React from 'react';
import { Container } from 'react-bootstrap';

export default function Cover() {
  return (
    <Container
      id="cover"
      fluid
      style={{
        height: '1080px',
        width: '100%',
        backgroundSize: 'cover',
        // background: 'linear-gradient(rgba(0, 0, 0, 0.7)), "url(' + img + ')"',
        // backgroundImage: 'url(' + img + ')',
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
          <h1 style={{ 
            fontSize: '98px',
          }}>Светлое будущее начинается с нами!</h1>
          <a className='btn btn-warning btn-lg cover-btn' href='#description'>Подробнее</a>
        </div>
      </div>
    </Container>
  );
}
