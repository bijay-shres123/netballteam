/**
******************************************************************************************
* The following code represents an example of a Training Session. Here the title, 
* description and all available information related to a Session shown including a YouTube video.
* Designed to be opened from list of Training Sessions.
******************************************************************************************
*/
import axios from 'axios';
import {useState} from 'react'
import Card from "react-bootstrap/Card";
import { useEffect } from "react";
import {useParams} from 'react-router-dom';
const SessionPage = () => {
  const [data, setData] = useState([])
  const axios = require('axios');
  const {id} = useParams();
  
  useEffect(() => {
    
    axios.get(`http://localhost:8000/api/training_session/${id}/` )
    .then((res) => {
      setData(res.data)
    })
  },[])

  return (
    
    data.id > 0 && 
    
    <div className='container'>
      <h1 style={{padding: "24px 0", fontSize: "24px",fontWeight:'bolder',fontFamily:'None'}}>{data.title}</h1>

      {/* <!-- YouTube block --> */}
      <div className="embed-responsive embed-responsive-21by9">
        <iframe className="embed-responsive-item" src={data.youtube_link}></iframe>
      </div>

      {/* <!-- Training Description --> */}
      <div style={{padding: "40px",textAlign:'left'}}>
        <blockquote className="blockquote text-center">
          <p className="mb-0">{data.highlighted_info}</p>
        </blockquote>
          <p>
            {data.description}
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
  
export default SessionPage;