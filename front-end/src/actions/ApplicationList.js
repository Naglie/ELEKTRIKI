import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

export default function ApplicationList() {
   const [application, setApplication] = React.useState([]);
   const [approved, setApproved] = React.useState([]);
   const [rejected, setRejected] = React.useState([]);
   const [pending, setPending] = React.useState([]);

   const getApplication = async () => {
      const response = await axios.get(`http://localhost:5000/application/`);
      setApplication(response.data);
   };

   const approvedApplication = async () => {
      const response = await axios.get(
         `http://localhost:5000/application/approved`
      );
      setApproved(response.data);
   };

   const rejectedApplication = async () => {
      const response = await axios.get(
         `http://localhost:5000/application/rejected`
      );
      setRejected(response.data);
   };

   const pendingApplication = async () => {
      const response = await axios.get(
         `http://localhost:5000/application/pending`
      );
      setPending(response.data);
   };

   React.useEffect(() => {
      getApplication();
      approvedApplication();
      rejectedApplication();
      pendingApplication();
   }, []);
   return (
      <Container id="appList" className="mt-5">
         <h2>Cписок заявок</h2>
         <div>
            <p style={{ color: 'black' }}>
               Количество заявок всего: {application.length}
            </p>
         </div>

         <Card className="shadow">
            <Card.Body>
               <Row>
                  <Col md={{ span: 8, offset: 2 }}>
                     <Table striped>
                        <thead>
                           <tr>
                              <th>ID</th>
                              <th>Фамилия</th>
                              <th>Почта</th>
                              <th>Статус</th>
                              <th className="text-center">Действия</th>
                           </tr>
                        </thead>
                        <tbody>
                           {application.map((application, index) => (
                              <tr key={application.id}>
                                 <td>
                                    {index + 1}. #{application.id}
                                 </td>
                                 <td>{application.surname}</td>
                                 <td>{application.email}</td>
                                 <td>{application.approved}</td>
                                 <td className="text-center">
                                    <Link
                                       to={`/applications/${application.id}`}
                                       className="me-1"
                                    >
                                       <Button variant="success" size="sm">
                                          Detail
                                       </Button>
                                    </Link>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </Table>
                  </Col>
               </Row>
               <div className="d-flex flex-row justify-content-center">
                  <div className="m-3">
                     <p style={{ color: 'black' }}>
                        Количество заявок на рассмотрении: {pending.length}
                     </p>
                  </div>
                  <div className="m-3">
                     <p style={{ color: 'black' }}>
                        Количество отклоненных заявок: {rejected.length}
                     </p>
                  </div>
                  <div className="m-3">
                     <p style={{ color: 'black' }}>
                        Количество принятых заявок: {approved.length}
                     </p>
                  </div>
               </div>
            </Card.Body>
         </Card>
      </Container>
   );
}
