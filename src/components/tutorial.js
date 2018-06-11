import React from 'react';
import {Grid,  Row,  Col} from 'react-bootstrap';
import './tutorial.css';
import 'font-awesome/css/font-awesome.min.css';

const Tut = () => {
  return(
    <Grid>
      <Row className="show-grid text-center">
        <Col sm={3} xs={9} className="person-wrapper">
          <i className="fa fa-address-card-o fa-5x" aria-hidden="true"></i>
          <h3>Add Cards</h3>
          <p>Simply put in all of your card information and click the Add button, keep adding cards as long as you need!</p>
        </Col>
        <Col sm={3} xs={9} className="person-wrapper">
          <i className="fa fa-check-circle-o fa-5x" aria-hidden="true"></i>
          <h3>Check Payment</h3>
          <p>Make sure to check your payment before hitting pay! </p>
        </Col>
        <Col sm={3} xs={9} className="person-wrapper">
          <i className="fa fa-credit-card fa-5x" aria-hidden="true"></i>
          <h3>Click Pay</h3>
          <p>Click the pay button in your cart and wait for your one-time use card to be generated!</p>
        </Col>
      </Row>
    </Grid>
  );
}
export default Tut;
