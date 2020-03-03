import React from 'react'

class Payment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      if (this.props.currentStep === 3) {
        return (
          <div className='main'>
            <form onSubmit={this.props.handleSubmitForm}>
              <h2>Payment Information</h2>
                <div>
                  <label> Credit Card #:
                    <input type="text" name="cc" required/>
                  </label>
                </div>
                <div>
                  <label> Expiration Date:
                    <input type="text" name="expiry" required/>
                  </label>
                </div>
                <div>
                  <label> CVV:
                    <input type="text" name="cvv" required/>
                  </label>
                </div>
                <div>
                  <label> Billing Zip Code:
                    <input type="text" name="zip" required/>
                  </label>
                </div>
                <br></br>
                <button onClick={this.props.checkoutPrev}>Previous</button>
                <button type="submit" >Purchase!</button>
            </form>
          </div>
        );
    } else {
      return (
        <div></div>
      )
    }
  }
}
export default Payment;