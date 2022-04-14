import {Nav,} from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import ShowMore from 'react-show-more-button';
const TrainingSession = () => {
    return (<>
      <h1 style={{textAlign:'center', margin:"25px 0"}}>Training Session</h1>
      <div className="container">
  <div className="row">
    <div className="col-sm">
      <Card style={{ width: '18rem' ,color:"#000" }}>
        <Card.Img variant="top" src="assets/images/sp.png" />
        <Card.Body>
            <Card.Title>10 BALLS ANYWHERE</Card.Title>
            <Card.Title><Nav.Link href="/session1">Strength and Conditioning</Nav.Link></Card.Title>
            <Card.Text>
				Have the players get into pairs.
				<p>
					One player starts with the ball and drops, places or throws the ball in random places around a semi circular area.
				</p>
				<ShowMore maxHeight={100}>
				<p>
				
					The other player in the pair stands around a metre opposite keeping a close eye on the ball. 
					They need to react as quickly as possible to gather the ball either before it bounces or after only 1 bounce.
				</p>
				<p>
					After 10, have the players swap over so that the passer is now reacting to the ball.
				</p>
				</ShowMore>
            </Card.Text>
            
        </Card.Body>
        </Card>
        </div>
        <div className="col-sm">
      <Card style={{ width: '18rem' ,color:"#000" }}>
        <Card.Img variant="top" src="assets/images/sp.png" />
        <Card.Body>
            <Card.Title>TRIANGLE 2 VS 2</Card.Title>
            <Card.Title>Strength and Conditioning</Card.Title>
            <Card.Text>
            Have the players get into pairs.
				<p>
					Set up a triangle with cones. 2 players are attackers, 2 are defenders.
				</p>
				<p>
					Attacker starts on the top of the triangle and the other starts on one of the bottom corners.
				</p>
				<ShowMore maxHeight={100}>
				<p>
					They are defended by 2 defenders the whole time.
				</p>
				<p>
					The person at the top of the triangle starts with the ball, passes to the other attacker and runs 
					into the triangle to receive the ball back. Again they pass to the other attacker and cross the bottom line 
					of the triangle to be outside of the triangle.
				</p>
				<p>
					They receive the ball back again and the other attacker runs to take their space at the top of the triangle. 
					The attacker behind the line passes the ball to the new top attacker, takes one of the bottom corner spaces 
					and the drill repeats.
				</p>
			 	</ShowMore>
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
					Two players standing at each point of a cross.
				</p>
				<p>
					Have two balls start on opposite sides of the cross (white 1 and 3)
				</p>
				<ShowMore maxHeight={100}>
				<p>
					Blue 1 and 3 run straight across and receive a pass from the left. 
					They then pass on straight and join the end of the opposite line.
				</p>
				<p>
					White 1 and 3 then do the same, run straight and receive the ball from the left, 
					pass on straight and join the end of the opposite line. Repeat
				</p>
				</ShowMore>
            </Card.Text>
            
        </Card.Body>
        </Card>
        </div>
        
    </div>
    <div className="row" style={{marginTop:"20px", marginBottom:"20px"}}>
    <div className="col-sm">
      <Card style={{ width: '18rem' ,color:"#000" }}>
        <Card.Img variant="top" src="assets/images/sp.png" />
        <Card.Body>
            <Card.Title>Defensive Pressure</Card.Title>
            <Card.Text>
				<p>
					 Every player should be able to successfully demonstrate a 1st and 2nd stage 
					 defence to apply pressure to the ball carrier and force an error or turnover.
				</p>
				<ShowMore maxHeight={100}>
				<p>
					 The session begins with a fun warm-up where plays need to be quick to react 
					 for both attack and defence. The session looks particularly at stage 1 and 2 
					 defence, marking your player and applying pressure when they have the ball. 
					 These skills are crucial in defence to help mark your player out of the game 
					 or applying pressure to force a held ball or error. The session provides a series 
					 of drills allowing your players to practice these skills, as well as tips to become 
					 more successful. The session concludes with a modified game of netball, with certain 
					 conditions placed upon the game to get your players implementing what they have learnt.
				</p>
				<p>
					 Players should begin working as a unit and in partnerships to be more successful in defence.
				</p>
				</ShowMore>
            </Card.Text>
            
        </Card.Body>
        </Card>
        </div>
        <div className="col-sm">
      <Card style={{ width: '18rem' ,color:"#000" }}>
        <Card.Img variant="top" src="assets/images/sp.png" />
        <Card.Body>
            <Card.Title>Hitting circle edge </Card.Title>
            <Card.Text>
				<p>
					 It is important that your attacking players can hit circle edge to receive the ball. 
					 This helps reduce the pressure on the ball carrier, as a defender cannot 3ft 
					 mark and therefore increases the success of feeding the shooters. 
				</p>
				<ShowMore maxHeight={100}>
				<p>
					  The session begins with a fun warm-up focused on getting your players working to get the ball 
					  to a certain area. This will help your players think of different ways to get free and work 
					  the ball eventually to the circle edge. The session continues this theme, providing a number 
					  of drills where your players can practice offloading the ball to then hit circle edge, to work
					  the ball into the shooters. Players also get the opportunity to work on their angles and timing 
					  of their movement. The session concludes with a normal game of netball, with certain conditions 
					  placed upon the game to get your players demonstrating what they have learned. 
				</p>
				<p>
					  Players should not simply stand on the circle edge, instead use their skills to move on and off, 
					  repositioning around the circle. 
				</p>
				</ShowMore>
            </Card.Text>
            
        </Card.Body>
        </Card>
        </div>
        <div className="col-sm">
      <Card style={{ width: '18rem' ,color:"#000" }}>
        <Card.Img variant="top" src="assets/images/sp.png" />
        <Card.Body>
            <Card.Title>User-defined Title</Card.Title>
            <Card.Text>
            User-defined description
            </Card.Text>
            
        </Card.Body>
        </Card>
        </div>
        
    </div>
    </div>
      </>);
  };
  
  export default TrainingSession;