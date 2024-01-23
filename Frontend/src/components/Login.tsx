/* eslint-disable prefer-const */
import { useToast } from '@chakra-ui/react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider, auth } from "../firebase";
import GoogleButton from "react-google-button";
import React from "react";
import './Login.css';


interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const toast = useToast();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        if (credential) {
          console.log("login successful");

          onLoginSuccess();
          const user = result.user;
          console.log(user);

          toast({
            title: "Logged In.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });

          let name = user.displayName;
          let email = user.email;
          let profilePic = user.photoURL;

          if (name) localStorage.setItem("name", name);
          if (email) localStorage.setItem("email", email);
          if (profilePic) localStorage.setItem("profilePic", profilePic);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode, errorMessage);
      });
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <div className="login-flex">
            <div className="login-heading">
              <h1>Welcome to Weather Bot Manager</h1>
            </div>
            <hr />
            <div className="login-subheading">
              <h2>Please sign in to continue</h2>
            </div>
            <hr />
            <div className="login-google-button">
              <GoogleButton onClick={handleLogin} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
