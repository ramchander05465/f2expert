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
  DropdownItem   } from 'reactstrap';

//import './header.css'

const Header = (props) => {  
  return(
    <header className="header-top">
      <Navbar color="light" light expand="md">
          <NavbarBrand href="/">F2Expert</NavbarBrand>
          <NavbarToggler onClick={props.toggleNavbar} />
          <Collapse isOpen={props.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>              
              <NavItem>
                <NavLink href="/components/">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Testimonials</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Trainings</NavLink>
              </NavItem>
              <NavItem> 
                <NavLink href="/components/">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </header>
  )
}

export default Header