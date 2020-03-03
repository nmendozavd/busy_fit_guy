import React from 'react'
import NavBar from './NavBar.jsx';
import Workout from './Workout.jsx';

class Membership extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRevealed: false
    }
    this.toggleWorkouts = this.toggleWorkouts.bind(this);
  }

  toggleWorkouts() {
    this.setState({
      isRevealed: !this.state.isRevealed
    });
  }

  render() {
    if (this.props.currentStep === 4) {
      return (

        <div className='membership'>
          <NavBar/>
          <h1>Welcome to the Daily Pump</h1>
          <p>The most consistent online-programming you'll ever follow. My workout, posted every single morning.</p>
          <br></br>

          <br></br>
          <button onClick={this.toggleWorkouts}>TODAY'S WORKOUT</button>
          {this.state.isRevealed ? <Workout /> :  <div></div>}

          <br></br>

        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default Membership;