// import { Link } from 'react-router-dom';
// import * as userService from '../../utilities/users-service';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';



// export default function NavBar({ user, setUser }) {
//   function handleLogOut() {
//     userService.logOut();
//     setUser(null);
//   }

//   return (
//     <nav>
//        <Navbar bg="dark" data-bs-theme="light">
//         <Container>
//           <img src="Logo.png" alt="logo" className="navLogo"/>
//           <Navbar.Brand>Hi {user.name}</Navbar.Brand>
//           <Nav className="me-auto">
//           <Link to="/search/new">New Search</Link>
//            &nbsp; | &nbsp;
//           <Link to="/plan">Rotation Plans</Link>
//           <Nav.Link to="" onClick={handleLogOut} class="align-rt" id='LogOut'>Log Out</Nav.Link>
//         </Nav>
//         </Container>
//       </Navbar>
//     </nav>
//   );
// }

import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <Navbar bg="light" variant="light" fixed="top">
      <Container>
        <img src="Logo.png" alt="logo" className="navLogo"/>
        <Navbar.Brand>Hi {user.name}</Navbar.Brand>
        <Link to="/search/new" className="nav-link">
          New Search
        </Link>
        <Link to="/plan" className="nav-link">
          Rotation Plans
        </Link>
        <Link to="/hardiness" className="nav-link">
          Hardiness Zone
        </Link>
        <Nav className="ml-auto">
          <Button variant="outline-light" onClick={handleLogOut}>
            Log Out
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
