import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders SignupScreen component when navigating to /signup route', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const signupElement = screen.getByText(/Signup/i);
  expect(signupElement).toBeInTheDocument();
});
