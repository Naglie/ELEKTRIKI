import React from 'react'
import { Container, Form, Card } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ApplicationForm() {
   const [name, setName] = useState('');
   const [surname, setSurname] = useState('');
   const [id_code, setId_code] = useState('');
   const [date_of_birth, setDate_of_birth] = useState('');
   const [education, setEducation] = useState('');
   const [address, setAddress] = useState('');
   const [city, setCity] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [courses, setCourses] = useState('');
   const navigate = useNavigate();

   const Send = async (e) => {
      e.preventDefault();
      try {
         await axios.post('http://localhost:5000/application/send', {
            name: name,
            surname: surname,
            id_code: id_code,
            date_of_birth: date_of_birth,
            education: education,
            address: address,
            city: city,
            email: email,
            phone: phone,
            courses: courses,
         });
         navigate('/');
         window.location.reload();
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <Container id="form">
         <div className="container">
            <div className="row justify-content-center formHeading">
               <h2>Форма для подачи заявки</h2>
            </div>
            <div className="justify-content-center">
               <Card className="shadow">
                  <Card.Body>
                     <Form onSubmit={Send}>
                        <div className="row mb-4">
                           <div className="col">
                              <div className="form-outline">
                                 <Form.Control
                                    type="text"
                                    className="form-control"
                                    id="applyForm"
                                    placeholder="Введите Ваше имя"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                 />
                                 <Form.Label
                                    className="form-label"
                                    for="applyForm"
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
                                    id="applyForm"
                                    placeholder="Введите Вашу фамилию"
                                    value={surname}
                                    onChange={(e) => setSurname(e.target.value)}
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
                              id="applyForm"
                              placeholder="Введите Ваш личный код"
                              value={id_code}
                              onChange={(e) => setId_code(e.target.value)}
                           />
                           <Form.Label className="form-label" for="applyForm">
                              Личный код
                           </Form.Label>
                        </div>

                        <div className="row mb-4">
                           <div className="col">
                              <div className="form-outline">
                                 <Form.Control
                                    type="date"
                                    id="applyForm"
                                    className="form-control"
                                    value={date_of_birth}
                                    onChange={(e) =>
                                       setDate_of_birth(e.target.value)
                                    }
                                 />
                                 <Form.Label
                                    className="form-label"
                                    for="applyForm"
                                 >
                                    Дата рождения
                                 </Form.Label>
                              </div>
                           </div>
                           <div className="col">
                              <div className="form-outline">
                                 <Form.Control
                                    as={'select'}
                                    id="applyForm"
                                    className="form-control"
                                    value={education}
                                    onChange={(e) =>
                                       setEducation(e.target.value)
                                    }
                                 >
                                    <option value="Среднее">Среднее</option>
                                    <option value="Среднее специальное">
                                       Среднее специальное
                                    </option>
                                    <option value="Высшее">Высшее</option>
                                 </Form.Control>
                                 <Form.Label
                                    className="form-label"
                                    for="applyForm"
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
                                    id="applyForm"
                                    className="form-control"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                 />
                                 <Form.Label
                                    className="form-label"
                                    for="applyForm"
                                 >
                                    Адрес проживания
                                 </Form.Label>
                              </div>
                           </div>
                           <div className="col">
                              <div className="form-outline">
                                 <Form.Control
                                    type="text"
                                    id="applyForm"
                                    className="form-control"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                 />
                                 <Form.Label
                                    className="form-label"
                                    for="applyForm"
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
                                    id="applyForm"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                 />
                                 <Form.Label
                                    className="form-label"
                                    for="applyForm"
                                 >
                                    Email
                                 </Form.Label>
                              </div>
                           </div>
                           <div className="col">
                              <div class="form-outline">
                                 <Form.Control
                                    type="number"
                                    id="applyForm"
                                    className="form-control"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                 />
                                 <Form.Label
                                    className="form-label"
                                    for="applyForm"
                                 >
                                    Номер телефона
                                 </Form.Label>
                              </div>
                           </div>
                        </div>

                        <div className="form-outline mb-4">
                           <Form.Control
                              as={'select'}
                              className="form-control text-center"
                              id="applyForm"
                              value={courses}
                              onChange={(e) => setCourses(e.target.value)}
                           >
                              <option value="Электрик внутренних работ, 3 года">
                                 Электрик внутренних работ, 3 года
                              </option>
                              <option value="Электрик внутренних работ, 2 года">
                                 Электрик внутренних работ, 2 года
                              </option>
                           </Form.Control>
                           <Form.Label className="form-label" for="applyForm">
                              Курс
                           </Form.Label>
                        </div>

                        <button
                           type="submit"
                           class="btn btn-success btn-block mb-4"
                        >
                           Подать заявку
                        </button>
                     </Form>
                  </Card.Body>
               </Card>
            </div>
         </div>
      </Container>
   );
}