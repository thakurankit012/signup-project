import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './Styles.css';
function LoginPage({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        const loginData = {
            email,
            password
        };
        try {
            const response = await fetch('http://localhost:8000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });
            if (response.ok) {
                const data = await response.json();
                const { token } = data;
                localStorage.setItem('token', token);
                onLogin();
            } else {
                const errorData = await response.json();
                setLoginError(errorData.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setLoginError('An error occurred during login.');
        }
    };
    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h2>SignIn</h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control input"
                        id="exampleInputEmail1"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control input"
                        id="exampleInputPassword1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {loginError && <div className="alert alert-danger">{loginError}</div>}
                <button type="submit" className="btn btn-primary button">SignIn</button>
            </form>
        </div>
    );
}
export default LoginPage;
