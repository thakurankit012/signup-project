import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupPage from './Screen/SignupPage';
import UserDetails from './Screen/UserDetails';
import LoginPage from './Screen/LoginPage';
function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [registrationFailed, setRegistrationFailed] = useState(false);

  const handleLogin = (details) => {
    setUserDetails(details);
    setIsLoggedIn(true);
  };
  const handleSignUpSuccess = (details) => {
    setUserDetails(details);
    setIsSignedUp(true);
  };
  const handleSignUpFailed = () => {
    setRegistrationFailed(true);
  };
  return (
    <div>
      {isLoggedIn ? (
        <UserDetails userDetails={userDetails} />
      ) : (
        <>
          {isSignedUp && !registrationFailed ? (<LoginPage onLogin={handleLogin} />) : (<SignupPage onSignUpSuccess={handleSignUpSuccess} onSignUpFailed={handleSignUpFailed} />)}
        </>
      )}
    </div>
  );
}
export default App;

