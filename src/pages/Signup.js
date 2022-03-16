import React, { useState } from "react"
import styled from 'styled-components'
import { Button, Form, Alert } from "react-bootstrap"
import Link from 'react-dom'

const SignUpForm = ({ authenticate, resetPassword, onSuccess }) => {
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  const[username,setUsername]= useState("")
  const [email, setEmail] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  

  const submit = async () => {
    setError(null)
    setStatus("loading")
    try {
      const result = await authenticate({ email, password1 })
      if (result.success) {
        onSuccess(result)
        return
      }
      throw new Error()
    } catch (err) {
      console.log("err", err)
      setError("Not Verified")
      setStatus("error")
    }
  }

  const isValidEmail = email && email.indexOf("@") > -1
  const isValid = status !== "loading" && isValidEmail && !!password1

  return (
      <Wrapper>
          <div className="row" style={{boxShadow:' -1px 1px 6px 10px #c8d3d7', }}>
            <div className="col-sm" style={{backgroundImage: 'url(/assets/images/signup.jpeg)', backgroundSize:'cover',textAlign:'center',boxShadow:'inset 0 0 0 2000px rgb(0 0 0 / 50%)'}}> 
                <h1 style={{color:'#fff',padding:'3% 0%'}}>Signup</h1>
            </div>
    
    <div className="col-sm">
    <Form onSubmit={(e) => e.preventDefault()} className="card-body cardbody-color ">
    <div className="text-center" >
              
            </div>
            <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="name"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="email"
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          onChange={(e) => setPassword1(e.target.value)}
          value={password1}
          placeholder="password"
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="conf_password"
          onChange={(e) => setPassword2(e.target.value)}
          value={password2}
          placeholder="confirm password"
        />
      </Form.Group>
      <Form.Group>
      <Form.Label>Select User Type :</Form.Label><br></br>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="user_type" id="inlineRadio1" value="coach"/>
        <label className="form-check-label" for="inlineRadio1">Coach</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="user_type" id="inlineRadio2" value="player"/>
        <label className="form-check-label" for="inlineRadio2">Player</label>
      </div>
      
      </Form.Group>
 
      {error && <Alert variant="danger">{error}</Alert>}
      <br></br>
      <div className="form-check d-flex justify-content-center mb-5">
                    
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>
      <Button 
      className="btn btn-color px-5 mb-5 w-100"
        style={{ marginTop: 30,BackgroundColor:'#0e1c36',
            color: '#fff' }}
        variant="primary"
        size="sm"
        block
        onClick={submit}
        type="submit"
        
      >
        Sign Up
      </Button>
      <div id="emailHelp" className="form-text text-center mb-5 text-dark">Already Registered? <a href="#" className="text-dark fw-bold"> Sign In</a>
                </div>
    </Form>
    </div>
   </div>
    </Wrapper>
  )
}

export default SignUpForm

const Wrapper = styled.section`
background-color: #ebf2fa;
padding: 2% 12%;


`

;