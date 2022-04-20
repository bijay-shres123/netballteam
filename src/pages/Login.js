/**
******************************************************************************************
* The following code represents page "Login". Here user can write his credentials 
* to login. Also there are link to "Forgot Password" service and "Create Account"
* 
******************************************************************************************
*/

import React, { useState } from "react"
import styled from 'styled-components'
import { Button, Form, Alert } from "react-bootstrap"
import axios from 'axios';
import {PostData} from '../services/PostData'
import { useFormik } from 'formik';
import { Link, Navigate } from 'react-router-dom';
const LoginForm = ({ authenticate, resetPassword, onSuccess }) => {
  const [ErrorLogin, setErrorLogin] = useState('');
  const [SuccessLogin, setSuccessLogin] = useState('');
  const formik = useFormik({
     initialValues: {
       username: '',
       password:'',

     },
     onSubmit: (values) => {

      if (values.username && values.password) {
        PostData(values).then((result) => {
          let responseJSON:any= result;
          console.log(responseJSON);

          if (responseJSON.status===200) {
            localStorage.setItem('token', responseJSON.data.token);
            setSuccessLogin('True');
          } else if(responseJSON.status===400) {
            console.log(PostData.Data)
            setErrorLogin(responseJSON.data.non_field_errors[0]);

            setTimeout(() => {
              setErrorLogin("")
            }, 10000); 
          }
        });
      }
    },
   });

  //  if (localStorage.getItem('token')) {
  //   return <Navigate to={'/'} />;
  // }
  if (SuccessLogin === 'True') {
     alert('Logged IN')
    
     return < Navigate to={'/'} />
    
     
  } 
  
  return (
      <Wrapper>
    <Form  onSubmit={formik.handleSubmit} className="card-body cardbody-color " style={{boxShadow:' -1px 1px 6px 10px #c8d3d7'}}>
    <div className="text-center">
              <img src="assets/images/user.jpeg" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="160px" alt="profile"/>
            </div>
      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
        id="username"
         name="username"
          type="username"
          onChange={formik.handleChange}
         value={formik.values.username}
          placeholder="username"
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
      
      <Button 
      className="btn btn-color px-5 mb-5 w-100"
        style={{ marginTop: 30,BackgroundColor:'#0e1c36',
            color: '#fff' }}
        variant="primary"
        size="sm"
        block
       
        type="submit"
        
      >
        Login
      </Button>
      <div
          id="forgotPassword"
          className="form-text text-center mb-5 text-dark"
        >
          Forgot Password?
          <a href="/forgot-password" class="text-dark fw-bold">
            {" "}
            Reset Password
          </a>
        </div>
      <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
              Registered? <a href="#" class="text-dark fw-bold"> Create an
                Account</a>
                </div>
    </Form>
    </Wrapper>
  )
}

export default LoginForm

const Wrapper = styled.section`
background-color: #ebf2fa;
padding: 2% 36%;

`

;