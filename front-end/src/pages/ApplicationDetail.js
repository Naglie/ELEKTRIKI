import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, Button, Form } from 'react-bootstrap';
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

   const Reject = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:5000/application/reject/${id}`);
      navigate('/applications');
   };

   return (
      <Container className="mt-1">
         <h2 className="text-center mt-3">Заявка #{application.id}</h2>
         <Card className="shadow">
            <Card.Body>
            <Form>
               <div className="row mb-4">
                  <div className="col">
                     <div className="form-outline">
                        <Form.Control
                           type="text"
                           className="form-control"
                           id="applicantName"
                           value={application.name}
                           readOnly={true}
                        
                        />
                        <Form.Label
                           className="form-label"
                           for="applicantName"
                        >
                           Имя
                        </Form.Label>
                     </div>
                  </div>
                  <div className="col">
                     <div className="form-outline">
                        <Form.Control
                           type="text"
                           className="form-control"
                           id="applicantSurname"
                           value={application.surname}
                           readOnly={true}
                        />
                        <Form.Label class="form-label" for="applyForm">
                           Фамилия
                        </Form.Label>
                     </div>
                  </div>
               </div>

               <div className="form-outline mb-4">
                  <Form.Control
                     type="text"
                     className="form-control"
                     id="applicantId"
                     value={application.id_code}
                     readOnly={true}
                  />
                  <Form.Label className="form-label" for="applicantId">
                     Личный код
                  </Form.Label>
               </div>

               <div className="row mb-4">
                  <div className="col">
                     <div className="form-outline">
                        <Form.Control
                           type="date"
                           id="applicantBirthday"
                           className="form-control"
                           value={application.date_of_birth}
                           readOnly={true}
                        />
                        <Form.Label
                           className="form-label"
                           for="applicantBirthday"
                        >
                           Дата рождения
                        </Form.Label>
                     </div>
                  </div>
                  <div className="col">
                     <div className="form-outline">
                        <Form.Control
                           type="text"
                           id="applicantEducation"
                           className="form-control"
                           value={application.education}
                           readOnly={true}
                        />
                        <Form.Label
                           className="form-label"
                           for="applicantEducation"
                        >
                           Образование
                        </Form.Label>
                     </div>
                  </div>
               </div>

               <div className="row mb-4">
                  <div className="col">
                     <div className="form-outline">
                        <Form.Control
                           type="text"
                           id="applicantAddress"
                           className="form-control"
                           value={application.address}
                           readOnly={true}
                        />
                        <Form.Label
                           className="form-label"
                           for="applicantAddress"
                        >
                           Адрес проживания
                        </Form.Label>
                     </div>
                  </div>
                  <div className="col">
                     <div className="form-outline">
                        <Form.Control
                           type="text"
                           id="applicantCity"
                           className="form-control"
                           value={application.city}
                           readOnly={true}
                        />
                        <Form.Label
                           className="form-label"
                           for="applicantCity"
                        >
                           Город
                        </Form.Label>
                     </div>
                  </div>
               </div>

               <div className="row mb-4">
                  <div className="col">
                     <div className="form-outline">
                        <Form.Control
                           type="email"
                           id="applicantEmail"
                           className="form-control"
                           value={application.email}
                           readOnly={true}
                        />
                        <Form.Label
                           className="form-label"
                           for="applicantEmail"
                        >
                           Email
                        </Form.Label>
                     </div>
                  </div>
                  <div className="col">
                     <div class="form-outline">
                        <Form.Control
                           type="number"
                           id="applicantPhone"
                           className="form-control"
                           value={application.phone}
                           readOnly={true}
                        />
                        <Form.Label
                           className="form-label"
                           for="applicantPhone"
                        >
                           Номер телефона
                        </Form.Label>
                     </div>
                  </div>
               </div>

               <div className="form-outline mb-4">
                  <Form.Control
                     type="text"
                     className="form-control"
                     id="applicantCourse"
                     placeholder="Курс"
                     value={application.courses}
                     readOnly={true}
                  />
                  <Form.Label className="form-label" for="applicantCourse">
                     Курс
                  </Form.Label>
               </div>
               </Form>
               <div className="infoBtns">
                  <div className='actionBtns'>
                     <Button variant="success d-flex m-2" onClick={Approve}>
                        Принять
                     </Button>
                     <Button variant="danger d-flex m-2" onClick={Reject}>
                        Отклонить
                     </Button>
                  </div>
                  <div className='backBtn'>
                     <Button variant="link d-flex m-2" style={{ textDecoration: 'none' }} onClick={() => navigate('/applications')}>
                        Назад к списку
                     </Button>
                  </div>
               </div>
            </Card.Body>
         </Card>
      </Container>
   );
}
