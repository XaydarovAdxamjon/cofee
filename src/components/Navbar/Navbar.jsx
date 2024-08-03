import React, { useState } from 'react';
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
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import logo from '../../images/logo.png'
import st from './navbar.module.css'
import { useNavigate } from 'react-router-dom';

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navigate = useNavigate()
  const MainClik = () => {
    navigate('/')
  }
  const HandleClikler = () => {
    navigate('/home')

  }
  const AboutClik = () => {
    navigate('/about')

  }
  const PlanClik = () => {
    navigate('/plan')

  }

  return (
    <div className={st.navbar} style={{ paddingTop: '15px', paddingBottom: '15px' }}>
      <Navbar {...args} expand='sm'>
        <NavbarBrand onClick={() => MainClik()} className={st.logo}>
          <img src={logo} alt="" />
          coffeeroasters
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink className={st.nav__link} onClick={() => HandleClikler()}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={st.nav__link} onClick={() => AboutClik()}>About us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={st.nav__link} onClick={() => PlanClik()} style={{ marginRight: '0' }}>Create your plan</NavLink>
            </NavItem>

          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;