import {Nav,} from 'react-bootstrap'
import Card from "react-bootstrap/Card";

const Session1 = () => {
    return (
     <div className='container'>
  <h1 style={{padding: "24px 0", fontSize: "24px",fontWeight:'bolder',fontFamily:'None'}}>Strength and Conditioning</h1>
  <div className="embed-responsive embed-responsive-21by9">
  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/W4ON1MiXlXc"></iframe>
</div>
<div style={{padding: "40px",textAlign:'left'}}>
<blockquote className="blockquote text-center">
  <p className="mb-0">Something important highlighted over here</p>
  
</blockquote>
<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
</div>

<h2>Recommended Learning Sessions</h2>
<div className="row">
    <div className="col-sm">
      <Card style={{ width: '18rem' ,color:"#000" }}>
        <Card.Img variant="top" src="assets/images/sp.png" />
        <Card.Body>
            <Card.Title><Nav.Link href="/session1">The Grip</Nav.Link></Card.Title>
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

    )
  };
  
  export default Session1;