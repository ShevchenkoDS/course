import React, {Component} from 'react';
import {Container, Form, FormControl, Nav, Navbar, Button} from "react-bootstrap";
import logo from '../assets/connectivity.png'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "../Pages/Home";
import Contacts from "../Pages/Contacts";
import GalleryPicture from "../Pages/GalleryPicture";
import Tidings from "../Pages/Tidings";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar sticky={"top"} collapseOnSelect expand="md" bg="dark" variant={"dark"}>
          <Container>
            <Navbar.Brand href={"/"}>
              <img
                src={logo}
                height='30'
                width="30"
                className="d-lg-inline-block align-top"
                alt={'logo'}
                backgroundColor='white'
                borderRadius="3px"
              /> ANLIFE
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto my-2 my-lg-0">
                <Nav.Link href='/'> MAIN </Nav.Link>
                <Nav.Link href='/galleryPicture'> GALLERY PICTURE </Nav.Link>
                <Nav.Link href='/news'> HISTORY </Nav.Link>
                <Nav.Link href='/contacts'> CONTACTS </Nav.Link>
              </Nav>
              <Form style={{display: "flex"}}>
                <FormControl
                  type='text'
                  placeholder='Search'
                  className='mr-sm-2'
                />
                <Button style={{marginLeft: '10px'}} variant='outline-info'>Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/galleryPicture' element={<GalleryPicture/>}/>
            <Route exact path='/news' element={<Tidings/>}/>
            <Route exact path='/contacts' element={<Contacts/>}/>
          </Routes>
        </Router>
      </>
    );
  }
}

export default Header;
