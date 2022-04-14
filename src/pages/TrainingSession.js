import {Nav,} from 'react-bootstrap'
import Card from "react-bootstrap/Card";
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
      </>);
  };
  
  export default TrainingSession;