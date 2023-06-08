import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import img1 from '../assets/hariduskopter.png';
import img2 from '../assets/haridus-ja-noorteamet.png';
import img3 from '../assets/integratsiooni-sihtasutus.png';
import img4 from '../assets/kutsekoda.png';

export default class Footer extends Component {
   render() {
      return (
         <footer className="footer mt-auto pt-3">
            <div className="footerContent">
               <div className="d-flex flex-wrap footerPartners">
                  <div>
                     <h3>Партнеры по сотрудничеству</h3>
                  </div>
                  <div className="d-flex footerPartnerImages">                  
                     <img
                        src={img1}
                        width="255"
                        height="100"
                        alt="hariduskopter"
                     ></img>
                     <img 
                        src={img2} 
                        width="255" 
                        height="100" 
                        alt="harno"
                     ></img>
                  {/* <a href='https://hariduskopter.ee/'></a>
                           <a href='https://www.harno.ee/'></a> 
                           <a href='https://integratsioon.ee/'></a>
                           <a href='https://www.kutseregister.ee/ctrl/et/KAO/vaata/10583873'></a>
                     */}
                     <img
                        src={img3}
                        width="255"
                        height="100"
                        alt="integratsioon"
                     ></img>
                     <img
                        src={img4}
                        width="255"
                        height="100"
                        alt="kutsekoda"
                     ></img>
                  </div>
               </div>
               <div className="d-flex footerContacts">
                  <div>
                     <h3>Общий контакт</h3>
                  </div>
                  <div>
                     <span>Ida-Virumaa Kutsehariduskeskus</span>
                     <span>Tallinna maantee 13 Sillamäe 40202</span>
                     <span>Telefon: +372 3320 381</span>
                     <span>e-post: info@ivkhk.ee</span>
                  </div>
               </div>
               <div className="d-flex footerContacts">
                  <div>
                     <h3>Контакты</h3>
                  </div>
                  <div>
                     <span>Õppesekretär Jõhvi: +372 5831 4037</span>
                     <span>
                        Õppesekretär Narva: +372 356 9343, +372 510 8560
                     </span>
                     <span>
                        Täiendusõppe kursused: +372 5688 0405, +372 526 1318
                     </span>
                  </div>
               </div>
            </div>
            <div className="text-center" fluid>
               <div id="links">
                  <a href="https://kutsehariduskeskus.ee/ru">Главный сайт</a>
                  <a href="https://kutsehariduskeskus.ee/ru/sitemap">Карта главного сайта</a>
                  <a href="https://www.facebook.com/IVKHK">Facebook</a>
                  <a href="https://www.instagram.com/idavirumaa_kutsehariduskeskus/">Instagram</a>
                  <a href="https://www.youtube.com/channel/UC6TPd9ePy3n-vFQRgtbhx-w">Youtube</a>
                  <a href="https://vk.com/ivkhk">VKontakte</a>
                  <a href="https://www.youtube.com/channel/UCLxa63lO1rkF62tv8d7P4Cw/videos">Kooli TV</a>
                  <a href="/Login">Admin panel</a>
               </div>
               <div>
                  <p>
                     Copyright 2023 © Ida-Virumaa Kutsehariduskeskus. Daniil
                     Vassiljev, Daniil Divissenko, Jegor Golub
                  </p>
               </div>
            </div>
         </footer>
      );
   }
}
