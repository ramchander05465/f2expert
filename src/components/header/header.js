import React from 'react'
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem   } from 'reactstrap'

//import './header.css'
import logo from '../../images/f2e.jpg'

const Header = (props) => {  
  return(
    <header className="header-top">
      <Navbar color="light" light expand="md">
          <NavbarBrand><img src={logo} /></NavbarBrand>
          <NavbarToggler onClick={props.toggleNavbar} />
          <Collapse isOpen={props.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/home">Home</NavLink>
              </NavItem>              
              <NavItem>
                <NavLink href="/about">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/team">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/testimonials">Testimonials</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/trainings">Trainings</NavLink>
              </NavItem>
              <NavItem> 
                <NavLink href="/contact">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </header>
  )
}

export default Header