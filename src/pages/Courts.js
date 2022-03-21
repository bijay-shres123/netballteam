/* class Court extends React.Component {

	render () {
		return (
		<div>
		<button className="square" onClick={function() { console.log('click'); }}>
			{this.props.value}
		</button>
		</div>
		);
	}
}

class ListOfCourts extends React.Component {

	renderCourt(){
		return <Court value={i} />;
	}

	render() {
	  return (
		<h1>Courts</h1>
		<p>This is a Courts page. Hello there, user!</p>
		<Wrapper>
			<p>A list of courst is provided below, check it out</p>
			<div className="CourtList">
				{this.renderCourt(0)}
				{this.renderCourt(1)}
				{this.renderCourt(2)}
			</div>
		</Wrapper>
	  )
	}
} 

export default ListOfCourts  */ 

import { Button } from 'bootstrap';
import styled from 'styled-components'
import Card from "react-bootstrap/Card";
import React from 'react';

/*
class Court extends React.Component {

	render () {
		return (
		<div className="col-lg-4 align-items-center d-flex">
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
		)
	}
};
*/

const Courts = () => {
    return (<>
      <h1>Courts</h1>
      <p>This is a Forum page.</p>
      

			    <div width="30%">
				  <Card style={{ width: '18rem' ,color:"#000" }}>
					<Card.Img variant="top" src="assets/images/sp.png" />
						<Card.Body>
							<Card.Title>Court one</Card.Title>
							<Card.Text>
							I am a description! text to build on the card title and make up the bulk of
							the card's content.
							</Card.Text>
						</Card.Body>
					</Card>

				  <Card style={{ width: '18rem' ,color:"#000" }}>
					<Card.Img variant="top" src="assets/images/sp.png" />
						<Card.Body>
							<Card.Title>Title two</Card.Title>
							<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
							</Card.Text>
						</Card.Body>
					</Card>

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
				
	  
      </>
	  );
  };
  
  export default Courts;