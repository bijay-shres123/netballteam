import React, { useState } from "react"
import styled from 'styled-components'
import { Button, Form, Alert } from "react-bootstrap"
import Link from 'react-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Navigate } from 'react-router-dom';
import { PostData2 } from '../services/PostData2';

export default function SignUpForm() {
  const [Success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState('');
 
  const formik = useFormik({
    initialValues: {
      name: '',
      
      email: '',
      password: '',
      is_player:'False',
      is_coach:'False',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Please provide a user name!')
        .min(2, 'Seems a bit short...')
        .max(
          23,
          'A username is your identity.Keep it short .Less than 10 letters'
        ),
      
      email: Yup.string().label('Email').email().required(),
      password: Yup.string()
        .label('Password')
        .required('Required!')
        .min(7, 'Seems a bit short...'),
 
      // password2: Yup.string()
      //   .required('Required!')
      //   .test('passwords-match', 'Passwords must match !', function (value) {
      //     return this.parent.password === value;
      //   }),
    }),
    onSubmit: (values) => {
      if (
        values.name &&
        values.email &&
        values.password
      ) {
        if(values.picked=="coach"){
          values.is_coach = 'True'
          values.is_player = 'False'
          // values.remove('picked')
        }else{
          values.is_player = 'True'
          values.is_coach = 'False'
          // values.remove('picked')
        }
        // console.log(typeof(values))
        // console.log(values)
        PostData2(values).then((result) => {
          let responseJSON:any = result;
          console.log(responseJSON);
          if (responseJSON.status===200|| responseJSON.status===201) {
            console.log('User Created');
            setSuccess(true)
            //LOGGING THE USER AFTER ACCOUNT CREATION
        //     let values2 = {
        //       username: responseJSON.data.email,
        //       password: responseJSON.data.password,
        //     };
        //     PostData2('login', values2).then((result) => {
        //       let responseJSON:any = result;
        //       console.log(responseJSON);
    
        //       if (responseJSON.status===200||responseJSON.status===201) {
        //         localStorage.setItem('token', responseJSON.data.token);
        //         setSuccessLogin('True');
        //       } else if(responseJSON.status===400) {
                
    
        //         setTimeout(() => {
                  
        //         }, 10000); 
        //       }
        //     });
        //   } else if(responseJSON.status===400) {
        //     if(responseJSON.data.email){
        //         setErrorMessage(responseJSON.data.email);
        //     }else if(responseJSON.data.password){
        //         console.log(responseJSON.data.password)
        //         setErrorMessage(responseJSON.data.password[0]);
        //     }
            
        //     setTimeout(() => {
        //       setErrorMessage("")
        //     }, 10000);    
              }
        }
        );
      }
    },
  });
  if (Success == true){
    alert('User Created. Now you can sign in')
    return < Navigate to={'/login'} />
  }else{
 return (
      <>
      <Wrapper>
          <div className="row" style={{boxShadow:' -1px 1px 6px 10px #c8d3d7', }}>
            <div className="col-sm" style={{backgroundImage: 'url(/assets/images/signup.jpeg)', backgroundSize:'cover',textAlign:'center',boxShadow:'inset 0 0 0 2000px rgb(0 0 0 / 50%)'}}> 
                <h1 style={{color:'#fff',padding:'3% 0%'}}>Signup</h1>
            </div>
    
    <div className="col-sm">
    <Form  onSubmit={formik.handleSubmit} className="card-body cardbody-color ">
    <div className="text-center" >
              
            </div>
            <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          id="name"
         name="name"
          onChange={formik.handleChange}
         value={formik.values.name}
          placeholder="name"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
        id="email"
         name="email"
          type="email"
          onChange={formik.handleChange}
         value={formik.values.email}
          placeholder="email"
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
        id="password"
         name="password"
          type="password"
          onChange={formik.handleChange}
         value={formik.values.password}
          placeholder="password"
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
        id="password2"
         name="password2"
          type="password"
          onChange={formik.handleChange}
         value={formik.values.password2}
          placeholder="confirm password"
        />
      </Form.Group>
      <Form.Group>
      <Form.Label>Select User Type :</Form.Label><br></br>
      <div id="my-radio-group">User Type:</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label style={{marginRight:'20px'}}>
              <input type="radio" id="coach" name="picked"  onChange={formik.handleChange} value="coach"/>
              Coach  
            </label>
            <label>
              <input type="radio" id="player" name="picked" onChange={formik.handleChange} value="player" />
              Player
            </label>
           
          </div>
      {/* <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio"  name="is_coach"  value='true' onChange={formik.handleChange}/>
        <label className="form-check-label" for="is_coach">Coach</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio"  name="is_player" value='true' onChange={formik.handleChange}/>
        <label className="form-check-label" for="is_player">Player</label>
      </div> */}
     
      
      </Form.Group>
 
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
       
        type="submit"
        
      >
        Sign Up
      </Button>
      <div id="emailHelp" className="form-text text-center mb-5 text-dark">Already Registered? <a href="/login" className="text-dark fw-bold"> Sign In</a>
                </div>
    </Form>
    </div>
   </div>
    </Wrapper>
    </>
  )
}
}


const Wrapper = styled.section`
background-color: #ebf2fa;
padding: 2% 12%;


`

;