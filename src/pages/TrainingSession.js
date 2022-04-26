/**
******************************************************************************************
* The following code represents page "Training Sessions". Here user can look at the list
* of training sessions, open them. Also, user can request a session he or she wants. 
* Designed to be shown on page Training Session.
******************************************************************************************
*/

import {Nav,} from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import styled from 'styled-components'
import ShowMore from 'react-show-more-button';
import axios from 'axios';
import {useState,useEffect} from 'react'
const TrainingSession = () => {
	const [Data, setData] = useState([])
	useEffect(() => {
   
		axios.get(`http://localhost:8000/api/training_session/` )
		.then((res) => {
			// console.log(res.data)
			setData(res.data)
			console.log(res.data)
			console.log(Data)
		})
	  }, [])
    return (
	<>
    <h1 style={{textAlign:'center', margin:"25px 0"}}>Training Session</h1>

	{/* <!-- All Training Sessions --> */}
    <div className="container">

		{/* <!-- The row of 3 Training Sessions --> */}
  		<div className="row">
    		
				{Data.map(({id,title,highlighted_info,description,youtube_link})=>( 
					<div className="col-sm">
					<Card style={{ width: '18rem' ,color:"#000", margin:'20px 0' }}>
						<Card.Img variant="top" src="assets/images/sp.png" />
						<Card.Body>
							<Card.Title><Nav.Link href={`session/${id}`} style={{ padding: '0px'}}>{title}</Nav.Link></Card.Title>
							<Card.Text>
								
								<p>
								{description.length > 120 ?
									`${description.substring(0, 120)}...` : description
								}
								
								</p>
								{/* <!-- <ShowMore maxHeight={100}>
								<p>
								
									The other player in the pair stands around a metre opposite keeping a close eye on the ball. 
									They need to react as quickly as possible to gather the ball either before it bounces or after only 1 bounce.
								</p>
								<p>
									After 10, have the players swap over so that the passer is now reacting to the ball.
								</p>
								</ShowMore> --> */}
							</Card.Text>
						</Card.Body>
					</Card>
					</div>
				 ))}
			
			</div>
    </div>

	{/* <!-- Request/Create a Session Service --> */}
    <Wrapper>
		<div className='container'><span style={{fontSize:'22px'}}>Do you want to request for more training sessions?</span>
			<br/>
			<a class="btn btn-success" href="/trainingrequest" role="button">Request Here!</a>
		</div>
    </Wrapper>
    </>
	);
};
  
export default TrainingSession;

const Wrapper = styled.section`
  padding: 4em;
  min-height:200px;
  background-image: url(/assets/images/back1.jpeg);

  background-blend-mode: multiply;
  </Wrapper>
  box-shadow: inset 0 0 0 2000px rgb(0 0 0 / 50%);
  color:#fff;
`;
