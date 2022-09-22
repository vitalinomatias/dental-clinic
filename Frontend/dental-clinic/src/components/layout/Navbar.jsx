import { Link } from "react-router-dom"


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavbarPrincipal(){
    return (
        <Navbar bg="secondary" expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand>Dental Clinic</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className='nav-link' to='/home' >Inicio</Link>
                    <Link className='nav-link' to='/users'>Usuarios</Link>
                    <Link className='nav-link' to='/specialities'>Especialidades</Link>
                    <Link className='nav-link' to='/specialists'>Especialistas</Link>
                    <Link className='nav-link' to='/pieces'>Piezas</Link>
                    <Link className='nav-link' to='/areas'>Areas</Link>
                    <Link className='nav-link' to='/patients'>Pacientes</Link>
                    <Link className='nav-link' to='/reservations'>Reservasiones</Link>
                    <Link className='nav-link' to='/reports'>Reportes</Link>
                    {/* <NavDropdown  className='dropdown-toggle' title="Reportes" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <Link className='dropdown-item' to='/ruta'>Pacientes Atendidos</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link className='dropdown-item' to='/ruta'>Inasistencias</Link>
                        </NavDropdown.Item>
                    </NavDropdown> */}
                    <Link className='nav-link' to='/pruebas'>Pruebas</Link>
                    
                    <Link className='nav-link' to='/logout'>Cerrar Sesion</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarPrincipal