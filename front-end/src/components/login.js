import React, { useState } from "react";
import useStore from "../store/store";
import { Container, Form, Button } from "../Styles/GlobalStyles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useStore((state) => state.login);

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleLogin}>Login</Button>
      </Form>
    </Container>
  );
};

export default Login;