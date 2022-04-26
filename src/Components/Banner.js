/**
******************************************************************************************
* The following function creates a banner for a home page. It consists of a background 
* image, well-designed text at the center and an example of training session.
* Designed to be used at Home page.
******************************************************************************************
*/

import { Button } from 'bootstrap';
import styled from 'styled-components'
import Card from "react-bootstrap/Card";

export default function Banner(){
  return(
  <Wrapper>
    <div className="jumbotron" style={{background:'none'}}>
      <div className="container text-center text-lg-left">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="display-4">The fast & visual way
            to <HighlightWord>learn NetBall</HighlightWord></h1>
            <p className="lead">
            Share plans, video & files, with all the coaches able to access them via your clubs SportsHub. Stay connected and build a portfolio of best practice for your club.
            </p>

            {/* <!-- Button "Try it" under the text --> */}
            <span className="text-center d-inline-block">
              <a className="btn  btn-lg w-100" href="/trainingsession" role="button" style={{border:'1px solid #fff',background:'#08425a',color:'#fff'}}>Start Today</a>
              {/* <p className="text-muted">No credit card required</p> */}
            </span>
          </div>
          <div className="col-lg-4 align-items-center d-flex">
            <Card style={{ width: '18rem' ,color:"#000" }}>
              <Card.Img variant="top" src="assets/images/sp.png" />
              <Card.Body>
                <Card.Title>The Grip</Card.Title>
                <Card.Text> 
                Have the players get into pairs. One player starts with the ball and drops, places or throws the ball in random places.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>)
}

// Definition of auxilliary objects

// Container of the main content which has background image
const Wrapper = styled.section`
  padding: 4em;
  min-height:700px;
  background-image: url(/assets/images/back1.jpeg);
  background-size:cover;
  background-blend-mode: multiply;
  box-shadow: inset 0 0 0 2000px rgb(0 0 0 / 50%);
  color:#fff;
`;

// A style that makes black transparent background so the text is seen better
const HighlightWord = styled.span`
  position: relative;
  z-index: 0;
  white-space: nowrap;
  &:before {
        content: '';
        background: url(https://cdn2.hubspot.net/hubfs/1951809/text-highlight.png?t=1542708765973) no-repeat center center;
        background-size: 100% auto;
        width: 108%;
        height: 100%;
        display: block;
        position: absolute;
        z-index: -1;
        transform: translate(-3%,0);
        box-shadow: inset 0 0 0 2000px rgb(0 0 0 / 20%);
  }
`;