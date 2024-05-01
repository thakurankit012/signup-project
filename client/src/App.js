import React from 'react';
import './App.css';
import SignupForm from './components/SignupForm';
import PostListScreen from './components/PostListScreen';

const App = () => {
  return (
    <div>
      {/* Render your PostListScreen component */}
      <SignupForm/>
      <PostListScreen />
    </div>
  );
};

export default App;
