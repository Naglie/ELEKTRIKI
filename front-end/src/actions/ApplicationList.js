import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

export default function ApplicationList() {
   const [application, setApplication] = React.useState([]);

   const getApplication = async () => {
      const response = await axios.get(`http://localhost:5000/application/`);
      setApplication(response.data);
   };

   React.useEffect(() => {
      getApplication();
   }, []);
   return (
      <Container className="mt-1">
         <h2>Cписок заявок</h2>
         <Card className="shadow">
            <Card.Body>
               <Row>
                  <Col md={{ span: 9, offset: 2 }}>
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
                                       to={`/detail/${application.id}`}
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
            </Card.Body>
         </Card>
      </Container>
   );
}
