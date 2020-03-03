import React from 'react'
import axios from 'axios';
import Login from './Login.jsx';
import Address from './Address.jsx';
import Payment from './Payment.jsx';
import Membership from './Membership.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentForm: 0,
      formData: {}
    };

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.checkoutHandlerPrev = this.checkoutHandlerPrev.bind(this);
    this.checkoutHandlerNext = this.checkoutHandlerNext.bind(this);
  }

  // Track Previous and Next Form
  checkoutHandlerPrev(event) {
    this.setState({ currentForm: this.state.currentForm -= 1 });
  }

  checkoutHandlerNext(event) {
    this.setState({ currentForm: this.state.currentForm+= 1 });
  }


  handleSubmitForm(event) {
    event.preventDefault();
    // send information to DB of choice here
     this.setState({ currentForm: this.state.currentForm += 1 });
  }

  render() {
    if (this.state.currentForm > 0 && this.state.currentForm < 5) {
      return (
        <div>
          <Login currentStep={this.state.currentForm} handleSubmitForm={this.handleSubmitForm} checkoutPrev={this.checkoutHandlerPrev}/>
          <Address currentStep={this.state.currentForm} handleSubmitForm={this.handleSubmitForm} checkoutPrev={this.checkoutHandlerPrev}/>
          <Payment currentStep={this.state.currentForm} handleSubmitForm={this.handleSubmitForm} checkoutPrev={this.checkoutHandlerPrev}/>
          <Membership currentStep={this.state.currentForm} formData={this.state.formData}/>
        </div>
      );
    } else {
      return (
        <div>
          <img src="./images/logo.png" alt="logo" height="310" width="300"></img>
          {/* <h1>Busy Fit Guy</h1> */}
          <p>Subscribe by creating an account and have access to my Daily Pump immediately!</p>
          <button onClick={ this.checkoutHandlerNext }>Create an Account</button>
        </div>
      );
    }
  }
}

export default App;




