import React from 'react';
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
  DropdownItem } from 'reactstrap';
  import './navBar.css';
  import {Link} from 'react-router-dom'


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar-dark bg-dark" color="dark" expand="md">
          <NavbarBrand href="/">Easy Solar Estimator</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink  className="NavItem" activeClassName="is-active" exact={true} to="/" tag={Link}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  className="NavItem" to="/Months"  activeClassName="is-active" exact={true} tag={Link}>Monthly Breakdown</NavLink>
              </NavItem>              
              <NavItem>
                <NavLink  className="NavItem" to="/SystemDetails"  activeClassName="is-active" exact={true} tag={Link}>System Details</NavLink>
              </NavItem>       
              
              <NavItem>
              <NavLink  className="NavItem" href="https://github.com/saifsm1994">GitHub</NavLink>
            </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret  className="NavItem">
                  Other features / Settings
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Compare 2 Locations (Alpha)
                  </DropdownItem>
                  <DropdownItem>
                    Change Locations (Alpha)
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={clearStorage}>
                    Reset Data
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function clearStorage(){
    localStorage.clear();
  
  }
  