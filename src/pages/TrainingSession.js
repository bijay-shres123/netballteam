import {Nav,} from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import styled from 'styled-components'
const TrainingSession = () => {
    return (<>

      <h1 style={{textAlign:'center', margin:"25px 0"}}>Training Session</h1>
      <div className="container">
  <div className="row">
    <div className="col-sm">
      <Card style={{ width: '18rem' ,color:"#000" }}>
        <Card.Img variant="top" src="assets/images/sp.png" />
        <Card.Body>
            <Card.Title><Nav.Link href="/session1">Strength and Conditioning</Nav.Link></Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            
        </Card.Body>
        </Card>
        </div>
        <div className="col-sm">
      <Card style={{ width: '18rem' ,color:"#000" }}>
        <Card.Img variant="top" src="assets/images/sp.png" />
        <Card.Body>
            <Card.Title>Strength and Conditioning</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            
        </Card.Body>
        </Card>
        </div>
        <div className="col-sm">
      <Card style={{ width: '18rem' ,color:"#000" }}>
        <Card.Img variant="top" src="assets/images/sp.png" />
        <Card.Body>
            <Card.Title>The Grip</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
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
            <Card.Title>The Grip</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            
        </Card.Body>
        </Card>
        </div>
        <div className="col-sm">
      <Card style={{ width: '18rem' ,color:"#000" }}>
        <Card.Img variant="top" src="assets/images/sp.png" />
        <Card.Body>
            <Card.Title>The Grip</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            
        </Card.Body>
        </Card>
        </div>
        <div className="col-sm">
      <Card style={{ width: '18rem' ,color:"#000" }}>
        <Card.Img variant="top" src="assets/images/sp.png" />
        <Card.Body>
            <Card.Title>The Grip</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            
        </Card.Body>
        </Card>
        </div>
        
    </div>
   
    </div>
    <Wrapper>
    <div className='container'><span style={{fontSize:'22px'}}>Do you want to request for more training sessions?</span><br/>
    <button type="button" class="btn btn-success">Request Here!</button>
    </div>
    </Wrapper>
      </>);
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
