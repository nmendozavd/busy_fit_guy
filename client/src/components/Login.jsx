import React from 'react'

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentStep === 1) {
      return (
        <div className='main'>
          <form onSubmit={this.props.handleSubmitForm}>
            <h2>Personal Information</h2>
              <div>
                <label> Name:
                  <input type="text" name="name" required/>
                </label>
              </div>
              <div>
                <label> E-mail:
                  <input type="text" name="email" required/>
                </label>
              </div>
              <div>
                <label> Password:
                  <input type="text" name="password" required/>
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

export default Login;