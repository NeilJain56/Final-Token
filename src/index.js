import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Cards from 'react-credit-cards';
import Navvy from './components/Navbar';
import 'react-credit-cards/es/styles-compiled.css';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import Tut from './components/tutorial'
import './style.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      focused: "",
      cart: ["c"],
      price: "",
    };

  }
  validateName(){
    if(this.state.name.length > 0){
      return 'success';
    }
    return null;
  }
  validateCard(){
    if(this.state.number.length > 13 && this.state.number.length < 20) return 'success';
    else if(this.state.number.length < 14 && this.state.number.length !== 0) return 'warning';
    else if(this.state.number.length > 19) return 'error';
    return null;
  }
  validateExp(){
    if(this.state.expiry.length === 5) return 'success';
    else if(this.state.expiry.length > 5) return 'error';
    else if(this.state.expiry.length > 0) return 'warning';
    return null;
  }
  validateCVC(){
    if(this.state.cvc.length === 4 || this.state.cvc.length === 3) return 'success';
    else if(this.state.cvc.length > 0 && this.state.cvc.length < 4) return 'warning';
    return null;
  }
  Nchange = e => {
    this.setState({
      number: e.target.value,
      focused: "number"
    });
  };
  expChanged = e => {
    this.setState({cvc: e.target.value.substr(0, 4), focused:"cvc"})
  };
  chargeChanged = e => {
    var value = e.target.value.replace(".", "");
    if(!isNaN(value)){
      value = value / 100;
      this.setState({price: value.toFixed(2), focused: "name"});
    }
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.state.cart.push(this.state);
    console.log(this.state.cart);
    this.setState({
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      price: "",
      focused: "",
    });

  }
  render(){
    return (
      <div>
        <div className="whole">
          <Navvy cart ={this.state.cart}/>
          <div className="container-fluid" id="wrap">
            <div className="row">
              <div className="col-sm-6">
                <div className="card">
                  <Cards
                  number={this.state.number}
                  name={this.state.name}
                  expiry={this.state.expiry}
                  cvc={this.state.cvc}
                  focused={this.state.focused}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="cardform">
                  <form>
                    <FormGroup validationState={this.validateName()}>
                      <FormControl placeholder="Cardholder"
                      autoComplete='cc-name'
                      value={this.state.name}
                      onChange={e=>this.setState({name: e.target.value, focused:"name"})} />
                    </FormGroup>
                    <FormGroup validationState={this.validateCard()}>
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-credit-card"></i></span>
                          <FormControl
                          autoComplete='cc-number'
                          name="number" id="topper"
                          placeholder="Card Number"
                          value={this.state.number}
                          onChange={e=>this.Nchange(e)}/>
                      </div>
                    </FormGroup>
                    <FormGroup validationState={this.validateExp()}>
                      <FormControl placeholder="Expiration Date"
                        autoComplete='cc-exp'
                        value={this.state.expiry}
                        onChange={e=>this.setState({expiry: e.target.value.substr(0, 5), focused:"exp"})} />
                    </FormGroup>
                    <FormGroup validationState={this.validateCVC()}>
                      <FormControl placeholder="CVC"
                      autoComplete='cc-csc'
                      value={this.state.cvc}
                      onChange={this.expChanged} />
                    </FormGroup>
                    <FormGroup>
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-usd"></i></span>
                          <FormControl placeholder="Price"
                            value={this.state.price}
                            onChange={this.chargeChanged} />
                      </div>
                    </FormGroup>
                    <Button bsStyle="primary" onClick={e => this.onSubmit(e)}>Add</Button>
                  </form>
                </div>
                </div>
              </div>
            </div>
          </div>
        <Tut />
      </div>
    );
  }
}
ReactDOM.render(<App / >, document.getElementById("root"));
