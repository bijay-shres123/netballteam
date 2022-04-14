import React, { useState } from "react"
import styled from 'styled-components'
import { Button, Form, Alert } from "react-bootstrap"
import Link from 'react-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PostData2 } from '../services/PostData2';

export default function SignUpForm() {
  const [SuccessLogin, setSuccessLogin] = useState('');
  const [ErrorMessage, setErrorMessage] = useState('');
 
  const formik = useFormik({
    initialValues: {
      name: '',
      
      email: '',
      password: '',
      is_player:'',
      is_coach:'',
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
        PostData2(values).then((result) => {
          let responseJSON:any = result;
          console.log(responseJSON);
          if (responseJSON.status===200|| responseJSON.status===201) {
            console.log('User Created');
 
            //LOGGING THE USER AFTER ACCOUNT CREATION
            let values2 = {
              username: responseJSON.data.email,
              password: responseJSON.data.password,
            };
            PostData2('login', values2).then((result) => {
              let responseJSON:any = result;
              console.log(responseJSON);
    
              if (responseJSON.status===200||responseJSON.status===201) {
                localStorage.setItem('token', responseJSON.data.token);
                setSuccessLogin('True');
              } else if(responseJSON.status===400) {
                
    
                setTimeout(() => {
                  
                }, 10000); 
              }
            });
          } else if(responseJSON.status===400) {
            if(responseJSON.data.email){
                setErrorMessage(responseJSON.data.email);
            }else if(responseJSON.data.password){
                console.log(responseJSON.data.password)
                setErrorMessage(responseJSON.data.password[0]);
            }
            
            setTimeout(() => {
              setErrorMessage("")
            }, 10000);    
             }
        });
      }
    },
  });
  
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
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" id ="is_player" name="user_type"  value={formik.values.is_coach} onChange={formik.handleChange}/>
        <label className="form-check-label" for="is_coach">Coach</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" id ="is_player" name="user_type" value={formik.values.is_player} onChange={formik.handleChange}/>
        <label className="form-check-label" for="is_player">Player</label>
      </div>
     
      
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
      <div id="emailHelp" className="form-text text-center mb-5 text-dark">Already Registered? <a href="#" className="text-dark fw-bold"> Sign In</a>
                </div>
    </Form>
    </div>
   </div>
    </Wrapper>
    </>
  )
}



const Wrapper = styled.section`
background-color: #ebf2fa;
padding: 2% 12%;


`

;