import React from 'react'
import {NavLink} from 'react-router-dom';
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem  } from 'reactstrap'


//import './header.css'
import logo from '../../images/f2e.jpg'

const Header = (props) => {  
  return(
    <header className="header-top">
      <Navbar color="light" light expand="md">
          <NavbarBrand><img src={logo} alt='Welcome to F2Expert' /></NavbarBrand>
          <NavbarToggler onClick={props.toggleNavbar} />
          <Collapse isOpen={props.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink  to="/home" activeClassName="active">Home</NavLink >
              </NavItem>              
              <NavItem>
                <NavLink to="/about" activeClassName="active">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName="active" to="/team">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName="active" to="/testimonials">Testimonials</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName="active" to="/trainings">Trainings</NavLink>
              </NavItem>
              <NavItem> 
                <NavLink activeClassName="active" to="/contact">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </header>
  )
}

export default Header