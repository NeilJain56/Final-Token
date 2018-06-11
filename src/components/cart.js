import React, {Component} from 'react';
import './cartstyle.css';
import {Button} from 'react-bootstrap';
import axios from 'axios';

class Cart extends Component {
  handleSubmit = () => {
    let i = 1;
    let total = 0;
    while(i < this.props.cart.length){
      total += Number.parseFloat(this.props.cart[i].price);
      var qs = require('qs');
      var instance = axios.create({
      baseURL: 'https://token-payment-server.herokuapp.com',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      });
      instance.post('/index.php', qs.stringify({
          number: this.props.cart[i].number,
          exp_month: '12',
          exp_year: '2019',
          cvc: this.props.cart[i].cvc,
          amount: this.props.cart[i].price * 100
      }))
      .then(function (response, data) {
        if(response.data !== ""){
          //There is something wrong with the transaction, display error message
          alert(response.data);
          console.log(response.data);
        }
      })
      .catch(function (error) {
        //There is something wrong with the transaction, display error message
        console.log("Something went wrong. Please try again later.")
      });
      i++;
    }
    console.log("The total charge is " + total)
    /*var generate = axios.create({
    baseURL: 'https://token-payment-server.herokuapp.com'
    });
    generate.post('/card.php')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });*/
  };
  createCart = () => {
    if(this.props.cart.length > 1){
      const listItems = this.props.cart.map((user) => <li key={user.name} className="cart">{user.name}  {user.price}</li>);
      return listItems;
    }
  };
  render(){
    return(
      <div>
        {this.createCart()}
        <div className="center">
          <li><Button bsStyle="primary" onClick={this.handleSubmit}> Pay </Button></li>
        </div>
      </div>
    );
  }


}
export default Cart;
