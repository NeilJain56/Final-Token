import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Cart from '../components/cart';
import 'font-awesome/css/font-awesome.min.css';
import './navbar.css'

class Navbars extends Component {
  render(){
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="" id="name"><i class="fa fa-credit-card-alt" aria-hidden="true"></i> TOKEN </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown eventKey={3} title="Cart" id="basic-nav-dropdown">
              <Cart cart={this.props.cart}/>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default Navbars;
