import React from 'react'
import { Container, Form } from 'react-bootstrap';

export default function ApplicationForm() {
function ababaz() {
}
  return (
    <Container id="form">
        <div className="container">
            <div className="row justify-content-center">
                <h2>Form</h2>
            </div>
            <div className="justify-content-center">
                <Form onSubmit={ababaz}>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <Form.Control type="text" className="form-control" id="applyForm" placeholder="Введите Ваше имя"/>
                                <Form.Label className="form-label" for="applyForm">Имя</Form.Label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <Form.Control type="text" className="form-control" id="applyForm" placeholder="Введите Вашу фамилию"/>
                                <Form.Label class="form-label" for="applyForm">Фамилия</Form.Label>
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-outline mb-4">
                        <Form.Control type="text" className="form-control" id="applyForm" placeholder="Введите Ваш личный код"/>
                        <Form.Label className="form-label" for="applyForm">Личный код</Form.Label>
                    </div>
                    
                    <div className='row mb-4'>
                        <div className='col'>
                            <div className="form-outline">
                                <Form.Control type="date" id="applyForm" className="form-control" />
                                <Form.Label className="form-label" for="applyForm">Дата рождения</Form.Label>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="form-outline">
                                <Form.Control type="text" id="applyForm" className="form-control"/>
                                <Form.Label className="form-label" for="applyForm">Образование</Form.Label>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-4'>
                        <div className='col'>
                            <div className="form-outline">
                                <Form.Control type="text" id="applyForm" className="form-control" />
                                <Form.Label className="form-label" for="applyForm">Адрес проживания</Form.Label>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="form-outline">
                                <Form.Control type="text" id="applyForm" className="form-control"/>
                                <Form.Label className="form-label" for="applyForm">Город</Form.Label>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <Form.Control type="email" id="applyForm" className="form-control" />
                                <Form.Label className="form-label" for="applyForm">Email</Form.Label>
                            </div>
                        </div>
                        <div className="col">
                            <div class="form-outline">
                                <Form.Control type="number" id="applyForm" className="form-control" />
                                <Form.Label className="form-label" for="applyForm">Номер телефона</Form.Label>
                            </div>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-success btn-block mb-4">Подать заявку</button>
                </Form>
            </div>
        </div>      
    </Container>
  )
}
