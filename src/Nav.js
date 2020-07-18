import React from 'react'
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
  import Home from './Home';
  import AboutUs from './AboutUs';
  import ContactUs from './ContactUs';
  import "./Nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,  } from '@fortawesome/free-solid-svg-icons';
  

class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div>
                 <div className="container-fluid flu">
                <div className="row">
                    <div className="col-md-12 col-lg-12 ">
                       
                        <Router>
                            <Navbar className="Navbarr" bg="light" variant="light"  expand="lg" sticky="top">
                                <Navbar.Brand href="#home"><img src="/img/log.png" className="log" alt="loog"></img></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse className="coll"  id="basic-navbar-nav">
                                    <Nav className="naved">
                                    <Nav.Link className="" href="/">Home</Nav.Link>
                                    <Nav.Link href="/contact-us/#top">Contact Us</Nav.Link>
                                    <Nav.Link href="/about-us/#top">About Us</Nav.Link>
                                    {/* <NavDropdown title="More" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown> */}
                                    </Nav>
                                    {/* <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button  variant="outline-success" className="" >Search</Button>
                                    </Form> */}
                                </Navbar.Collapse>
                            </Navbar>
                            <Form inline className="navedd">
                                    <FormControl type="text" placeholder="Search" className="" />
                                    <Button  variant="outline-success" className="" ><span>Search</span> <FontAwesomeIcon className="ico" icon={faSearch}  size="lg"   /></Button>
                                    </Form>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/about-us">
                                    <AboutUs />
                                </Route>
                                <Route path="/contact-us">
                                    <ContactUs />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                    </div>
                </div>
            </div>
        
        
            )  
    }
}

export default BootstrapNavbar;