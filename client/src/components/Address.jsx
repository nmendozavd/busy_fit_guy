import React from 'react'

class Address extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentStep === 2) {
      return (
        <div className='main'>
          <form onSubmit={this.props.handleSubmitForm}>
            <h2>Address</h2>
              <div>
                <label> Line 1:
                  <input type="text" name="line1" required/>
                </label>
              </div>
              <div>
                <label> Line 2:
                  <input type="text" name="line2" />
                </label>
              </div>
              <div>
                <label> City:
                    <input type="text" name="city" required/>
                </label>
              </div>
              <div>
                <label> State:
                    <input type="text" name="state" required/>
                </label>
              </div>
              <div>
                <label> Zip Code:
                    <input type="text" name="zip" required/>
                </label>
              </div>
                <div>
                  <label> Phone Number:
                    <input type="text" name="phone" required/>
                  </label>
                </div>
              <br></br>
              <button onClick={this.props.checkoutPrev}>Previous</button>
              <button type="submit">Next</button>
            </form>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}
export default Address;