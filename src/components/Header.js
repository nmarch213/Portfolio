import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import nmLogo from '../nm_logo.png';
import * as FontAwesome from 'react-icons/lib/fa';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const logoStyle = {
      height: '3em',
      width: '2em'
    };
    return (
      <div>
        <Navbar color="faded" dark fixed expand="md">
          <NavbarBrand tag={Link} to="/">
            <img
              style={logoStyle}
              src={nmLogo}
              alt="Nicholas March Web Developer Logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink target="_blank" href="https://github.com/nmarch213">
                  <FontAwesome.FaGithub />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  target="_blank"
                  href="https://www.linkedin.com/in/nicholas-march-08111b4a/"
                >
                  <FontAwesome.FaLinkedin />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" href="https://www.twitch.tv/i2ival__">
                  <FontAwesome.FaTwitch />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/skills">
                  Skills
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/projects">
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <a
                  href="mailto:n.march213@gmail.com?Subject=Hey%20Nick,%20I%20have%20this%20great%20idea"
                  className="nav-link"
                  target="_blank"
                >
                  Email Me!
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
