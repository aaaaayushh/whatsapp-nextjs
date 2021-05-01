import styled from "styled-components";
import Head from "next/head";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
function login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src="https://i.pinimg.com/564x/f7/5d/94/f75d94874d855a7fcfcc922d89ac5e80.jpg" />
        <Button variant="outlined" onClick={signIn}>
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
}

export default login;
const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;
const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
  object-fit: contain;
  margin-bottom: 50px;
`;
