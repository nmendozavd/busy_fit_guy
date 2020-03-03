import React from 'react'
import Buttons from './Buttons.jsx';

const Workout = (props) => (
  <div className='workouts'>
    <img src="./images/dailypump.png" alt="logo" height="312" width="470"></img>
    <h2>NEW WORKOUT POSTED EVERY DAY BETWEEN 10-11AM PACIFIC</h2>
    <br></br>
    <Buttons/>
    <br></br>
    <h2><strong>TODAYS ROUTINE</strong></h2>
    <h1><strong>QUADS/ADDUCTORS</strong></h1>
    <p>
    <strong>Barbell Squat</strong>
    <br></br>
    (Inside shoulder width stance)
    <br></br>
    12,10,8,6,4,4
    </p>

    <p>
    <strong>Leg Extension</strong>
    <br></br>
    (extra pad on shins)
    <br></br>
    12,10,8,8
    </p>

    <p>
    <strong>Leg Press (feet low, inside shoulder width)/Goblet Squat (inside shoulder width)/Body weight Sissy Squat</strong>
    <br></br>
    3 sets of 10/10/F
    </p>

    <p>
    <strong>Leg Extension</strong>
    <br></br>
    (yes, again)
    <br></br>
    3 sets of 6
    <br></br>
    (1:0:1:4)
    </p>

    <p>
    <strong>Adductor Machine</strong>
    <br></br>
    12,12,10,10,8,8
    </p>
    <br></br>
      <h2><strong>YESTERDAY'S ROUTINE</strong></h2>
    <h1><strong>ABS/CALVES</strong></h1>
    <p>
      <strong>Decline Bench Oblique Sit up</strong>
      <br></br>
      15,12,10,10
    </p>

    <p>
      <strong>Decline Bench Sit up</strong>
      <br></br>
      15,12,10,10
    </p>

    <p>
      <strong>Hanging Leg Raise</strong>
      <br></br>
      6 sets to Failure
      <br></br>
      (1:0:1:4)
    </p>

    <p>
      <strong>Leg Press Calf Extension</strong>
      <br></br>
      (Toes pointed in)
      <br></br>
      15,12,10,10
    </p>

    <p>
      <strong>Leg Press Calf Extension</strong>
      <br></br>
      (Toes pointed out)
      <br></br>
      3 sets of 30
    </p>

  </div>
);

export default Workout;