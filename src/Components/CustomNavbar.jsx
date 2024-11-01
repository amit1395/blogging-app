import { Navbar,NavbarBrand,Collapse,Nav,NavItem,NavLink,NavbarText
    ,NavbarToggler,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem
 } from "reactstrap";
 import React,{useState} from "react";
 import { NavLink as ReactLink } from "react-router-dom";

const CustomNavbar=()=>{
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
        <Navbar color="dark"
        dark
        expand="md"
        fixed=" "
        >
          <NavbarBrand tag={ReactLink} to="/">MyBlogs</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink  tag={ReactLink} to="/About">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/login">
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/signup">
                  Sign up
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={ReactLink} to="/services">Services</DropdownItem>
                  <DropdownItem>Contact us</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Youtube</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Youtube</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
}

export default CustomNavbar;