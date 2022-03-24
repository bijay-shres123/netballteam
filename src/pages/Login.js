import React, { useState } from "react";
import styled from "styled-components";
import { Button, Form, Alert } from "react-bootstrap";

const LoginForm = ({ authenticate, resetPassword, onSuccess }) => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    setError(null);
    setStatus("loading");
    try {
      const result = await authenticate({ email, password });
      if (result.success) {
        onSuccess(result);
        return;
      }
      throw new Error();
    } catch (err) {
      console.log("err", err);
      setError("Not Verified");
      setStatus("error");
    }
  };

  const isValidEmail = email && email.indexOf("@") > -1;
  const isValid = status !== "loading" && isValidEmail && !!password;

  return (
    <Wrapper>
      <Form
        onSubmit={(e) => e.preventDefault()}
        className="card-body cardbody-color "
        style={{ boxShadow: " -1px 1px 6px 10px #c8d3d7" }}
      >
        <div className="text-center">
          <img
            src="assets/images/user.jpg"
            class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
            width="160px"
            alt="profile"
          />
        </div>
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
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="password"
          />
        </Form.Group>
        {error && <Alert variant="danger">{error}</Alert>}
        <Button
          className="btn btn-color px-5 mb-5 w-100"
          style={{ marginTop: 30, BackgroundColor: "#0e1c36", color: "#fff" }}
          variant="primary"
          size="sm"
          block
          onClick={submit}
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
        <div id="emailHelp" className="form-text text-center mb-5 text-dark">
          Not Registered?{" "}
          <a href="/signup" class="text-dark fw-bold">
            {" "}
            Create an account
          </a>
        </div>
      </Form>
    </Wrapper>
  );
};

export default LoginForm;

const Wrapper = styled.section`
  background-color: #ebf2fa;
  padding: 2% 36%;
`;
