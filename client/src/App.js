import React from 'react';
import './App.css';
import SignupForm from './components/SignupForm';
import PostListScreen from './components/PostListScreen';

const App = () => {
  return (
    <div>
     
      <SignupForm/>
      <PostListScreen />
    </div>
  );
};

export default App;
