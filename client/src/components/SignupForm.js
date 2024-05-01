import React, { useState } from 'react';
import './SignupForm.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    profilePicture: '',
    termsChecked: false,
    errors: {}
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      errors: {
        ...formData.errors,
        [name]: ''
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform client-side validation
    const errors = {};
    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.termsChecked) {
      errors.termsChecked = 'Please accept the terms and conditions';
    }

    if (Object.keys(errors).length === 0) {
      // Handle form submission (e.g., send data to server)
      console.log('Form submitted:', formData);
    } else {
      setFormData({ ...formData, errors });
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Signup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        {/* Username */}
        <div>
          <label className="signup-label">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="signup-input"
          />
          {formData.errors.username && <div className="error-message">{formData.errors.username}</div>}
        </div>

        {/* Email */}
        <div>
          <label className="signup-label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="signup-input"
          />
          {formData.errors.email && <div className="error-message">{formData.errors.email}</div>}
        </div>

        {/* Password */}
        <div>
          <label className="signup-label">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="signup-input"
          />
          {formData.errors.password && <div className="error-message">{formData.errors.password}</div>}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="signup-label">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="signup-input"
          />
          {formData.errors.confirmPassword && <div className="error-message">{formData.errors.confirmPassword}</div>}
        </div>

        {/* Name */}
        <div>
          <label className="signup-label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="signup-input"
          />
        </div>

        {/* Profile Picture */}
        <div>
          <label className="signup-label">Profile Picture:</label>
          <input
            type="file"
            name="profilePicture"
            onChange={handleChange}
            className="signup-input"
          />
        </div>

        {/* Terms and Conditions */}
        <div className="checkbox-container">
          <input
            type="checkbox"
            name="termsChecked"
            checked={formData.termsChecked}
            onChange={(e) => setFormData({ ...formData, termsChecked: e.target.checked })}
            className="signup-checkbox"
          />
          <label className="terms-text">Accept Terms and Conditions</label>
          {formData.errors.termsChecked && <div className="error-message">{formData.errors.termsChecked}</div>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="signup-button">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
