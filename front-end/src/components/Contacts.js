import React from "react";
import { Container } from 'react-bootstrap';

export default function Contacts() {
  return (
    <Container id="contacts">
        <div className="contactContainer">
            <div className="map">
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2282.255705541596!2d27.39842451401827!3d59.36202125589221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469465160e5e67bd%3A0xb8ed670e5bf3cb7c!2sIda-Virumaa%20Kutsehariduskeskus%20J%C3%B5hvi%20%C3%B5ppekoht!5e0!3m2!1sen!2see!4v1685433633343!5m2!1sen!2see"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>
            </div>
            <div className="contactInfoBox">
                <div className="contactInfo">
                    <div className="infoHeading">
                        <h2>Контактные данные</h2>
                    </div>
                    <div className="info">
                        <p>Информация о поступлении (по рабочим дням с 9:00 до 15:00):</p>
                        <ul>
                            <li>Силламяэ: телефон +372 5628 1728</li>
                            <li>Йыхви: телефон +372 5308 8342</li>
                            <li>Нарва: телефон +372 5697 1102</li>
                        </ul>
                    </div>
                    <div className="info">
                        <p>Дополнительная информация по э-почте: <span className="text-decoration-underline">vastuvott@ivkhk.ee</span></p>
                        <p>Galina Trofimova, erialade juht (tehnoloogia)</p>
                        <ul>
                            <li className="text-decoration-underline">galina.trofimova@ivkhk.ee</li>
                            <li>+372 5283 670</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  );
}
