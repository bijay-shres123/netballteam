/**
******************************************************************************************
* The following code represents an example of a Training Session. Here the title, 
* description and all available information related to a Session shown including a YouTube video.
* Designed to be opened from list of Training Sessions.
******************************************************************************************
*/

import {Nav,} from 'react-bootstrap'
import Card from "react-bootstrap/Card";

const Session1 = () => {
  return (
    <div className='container'>
      <h1 style={{padding: "24px 0", fontSize: "24px",fontWeight:'bolder',fontFamily:'None'}}>Strength and Conditioning</h1>

      {/* <!-- YouTube block --> */}
      <div className="embed-responsive embed-responsive-21by9">
        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/W4ON1MiXlXc"></iframe>
      </div>

      {/* <!-- Training Description --> */}
      <div style={{padding: "40px",textAlign:'left'}}>
        <blockquote className="blockquote text-center">
          <p className="mb-0">Training: 10 BALLS ANYWHERE</p>
        </blockquote>
          <p>
            Have the players get into pairs. One player starts with the ball and drops, places or throws the ball in random places around a semi circular area.
            The other player in the pair stands around a metre opposite keeping a close eye on the ball. 
            They need to react as quickly as possible to gather the ball either before it bounces or after only 1 bounce.
            After 10, have the players swap over so that the passer is now reacting to the ball.
          </p>
          <p>
            They are defended by 2 defenders the whole time.
						The person at the top of the triangle starts with the ball, passes to the other attacker and runs 
						into the triangle to receive the ball back. Again they pass to the other attacker and cross the bottom line 
						of the triangle to be outside of the triangle.
						They receive the ball back again and the other attacker runs to take their space at the top of the triangle. 
						The attacker behind the line passes the ball to the new top attacker, takes one of the bottom corner spaces 
						and the drill repeats.
          </p>
      </div>

      {/* <!-- Reccomended trainings --> */}
      <h2>Recommended Learning Sessions</h2>
      <div className="row">
        <div className="col-sm">
          <Card style={{ width: '18rem' ,color:"#000" }}>
            <Card.Img variant="top" src="assets/images/sp.png" />
            <Card.Body>
              <Card.Title>TRIANGLE 2 VS 2</Card.Title>
              <Card.Text>
                Have the players get into pairs.
                <p>
                  Set up a triangle with cones. 2 players are attackers, 2 are defenders...
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
            </div>
            <div className="col-sm">
          <Card style={{ width: '18rem' ,color:"#000" }}>
            <Card.Img variant="top" src="assets/images/sp.png" />
            <Card.Body>
              <Card.Title>CROSSROADS</Card.Title>
              <Card.Text>
                <p>
                  This drill is for a minimum group of eight.
                </p>
                <p>
                  Two players standing at each point of a cross...
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm">
          <Card style={{ width: '18rem' ,color:"#000" }}>
            <Card.Img variant="top" src="assets/images/sp.png" />
            <Card.Body>
              <Card.Title>Defensive Pressure</Card.Title>
              <Card.Text>
                <p>
                  Every player should be able to successfully demonstrate a 1st and 2nd stage 
                  defence to apply pressure to the ball carrier and force an error or turnover...
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
			  </div>
        
      </div>
      <br />
    </div>
  )
};
  
export default Session1;