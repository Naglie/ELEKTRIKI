import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import logo from '../assets/logo.png';

export default function Header() {
    const [name, setName] = React.useState('');
    const [role, setRole] = React.useState('');
    let navbar_admin = [];

    React.useEffect(() => {
        refreshToken();
    });

    const refreshToken = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/users/token`);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setRole(decoded.role);
        } catch (error) {
            if (error.response){}
        }
    };

    if (role === 'admin') {
        navbar_admin = [
            {name: 'Logout', href: '/logout'},
        ];
    }
    return (
    <header>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="logo" width="50" height="50" />
                </Navbar.Brand>
                <NavbarToggle aria-controls="responsive-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/#description">Описание</Nav.Link>
                        <Nav.Link href="/#requirements">Условия</Nav.Link>
                        <Nav.Link href="/#gallery">Галерея</Nav.Link>
                        <Nav.Link href="/#contacts">Контакты</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Navbar.Text>{name}</Navbar.Text>
                        {navbar_admin.map((item, index) => (
                            <Nav.Link key={index} href={item.href}>{item.name}</Nav.Link>
                        ))}
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    </header>
  )
}
