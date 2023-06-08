import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ApplicationDetail() {
   const [application, setApplication] = React.useState('');
   const { id } = useParams();
   const navigate = useNavigate();

   React.useEffect(() => {
      const getApplication = async () => {
         const response = await axios.get(
            `http://localhost:5000/application/detail/${id}`
         );
         setApplication(response.data);
      };
      getApplication();
   }, [id]);

   const Approve = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:5000/application/approve/${id}`);
      navigate('/applications');
   };

   return (
      <Container className="mt-1">
         <h2 className="text-center mt-3">Заявка #{application.id}</h2>
         <Card className="shadow">
            <Card.Body>
               <div className="d-flex justify-content-center m-">
                  <div className="name">
                     <h3>Имя: {application.name}</h3>
                  </div>

                  <div className="surname">
                     <h3>Фамилия: {application.surname}</h3>
                  </div>
               </div>

               <div className="id_code">
                  <h3>
                     Идентификационный код: <br /> {application.id_code}
                  </h3>
               </div>
               <div className="d-flex justify-content-center">
                  <div className="birthday">
                     <h3>Дата рождения: {application.date_of_birth}</h3>
                  </div>
                  <div className="education">
                     <h3>Образование: {application.education}</h3>
                  </div>
               </div>
               <div className="d-flex justify-content-center">
                  <div className="address">
                     <h3>Адрес: {application.address}</h3>
                  </div>
                  <div className="city">
                     <h3>Город: {application.city}</h3>
                  </div>
               </div>
               <div className="d-flex justify-content-center">
                  <div className="email">
                     <h3>Email: {application.email}</h3>
                  </div>
                  <div className="phone">
                     <h3>Телефон: {application.phone}</h3>
                  </div>
               </div>
               <div className="approved">
                  <h3>Статус: {application.approved}</h3>
               </div>
               <div className="course">
                  <h3>Курс: {application.courses}</h3>
               </div>

               <Button variant="success" onClick={() => Approve}>
                  Принять
               </Button>
            </Card.Body>
         </Card>
      </Container>
   );
}
