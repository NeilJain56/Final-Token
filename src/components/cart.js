import React, {Component} from 'react';
import './cartstyle.css'
import {Button} from 'react-bootstrap';

class Cart extends Component {
  createCart = () => {
    if(this.props.cart.length >1){
      const listItems = this.props.cart.map((user) => <li key={user.name} className="cart">{user.name}  {user.price}</li>);
      return listItems;
    }
  };
  render(){
    return(
      <div>
        {this.createCart()}
        <div className="center">
          <li><Button bsStyle="primary"> Pay </Button></li>
        </div>
      </div>
    );
  }


}
export default Cart;
