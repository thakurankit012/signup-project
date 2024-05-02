import React, { useState } from 'react';
import './Styles.css';

function SignupPage({ onSignUpSuccess, onSignUpFailed }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [place, setPlace] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationFailed, setRegistrationFailed] = useState(false);
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const userData = {
      name: fullName,
      email,
      password,
      password_confirmation: confirmPassword,
      mobile,
      place
    };
    try {
      const response = await fetch('http://localhost:8000/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response) {
        const data = await response.json();
        const { token, status, message } = data;
        if (status === "success") {
          localStorage.setItem('token', token);
          setRegistrationMessage(message);
          setRegistrationSuccess(true);
          onSignUpSuccess({ fullName, email, mobile, place });
        } else {
          setRegistrationFailed(true);
          setRegistrationSuccess(false);
          setRegistrationMessage(message);
          onSignUpFailed();
        }
      } else {
        console.error('Registration failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
  return (
    <div className="container">
      <form className="form">
        <h2>Sign Up</h2>
        <input className="input" type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <input className="input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="input" type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input className="input" type="text" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <input className="input" type="text" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        <input className="input" type="text" placeholder="Place" value={place} onChange={(e) => setPlace(e.target.value)} />
        <button className="button" onClick={handleSignup}> Sign Up </button>
        <p>Password Must be more then 5 charactor 1 special charecter and Start with capital letter</p>
        <p>Mobile number must be 10 letter</p>
      </form>
      {registrationSuccess && (
        <div className="alert alert-success" role="alert">
          {registrationMessage}
        </div>
      )}
      {registrationFailed && (
        <div className="alert alert-danger" role="alert">
          {registrationMessage}
        </div>
      )}
    </div>
  );
}
export default SignupPage;
