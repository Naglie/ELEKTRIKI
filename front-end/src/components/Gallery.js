import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import gallery1 from '../assets/Gallery1.jpg';
import gallery2 from '../assets/Gallery2.jpg';
import gallery3 from '../assets/Gallery3.jpg';
import gallery4 from '../assets/Gallery4.png';

export default function Gallery() {
   return (
      <div id="gallery">
         <div style={{ width: '100%', height: '100%' }}>
            <div className="partnerHeading">
               <h2>Галерея</h2>
            </div>
            <Carousel>
               <Carousel.Item>
                  <img
                     className="d-block w-100 "
                     height={1335}
                     src={gallery1}
                     alt="ship"
                  />
               </Carousel.Item>

               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     height={1335}
                     src={gallery2}
                     alt="drink"
                  />
               </Carousel.Item>

               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     height={1335}
                     src={gallery3}
                     alt="beach"
                  />
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     height={1335}
                     src={gallery4}
                     alt="beach"
                  />
               </Carousel.Item>
            </Carousel>
         </div>
      </div>
   );
}
