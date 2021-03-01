import React, { Component } from "react";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import SignUpSection from "./SignUpSection.js";
import LoginSection from "./LoginSection.js";
import './App.css';

Amplify.configure(awsconfig);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Form</h1>
        <main>
          <SignUpSection />
          <div className="line" />
          <LoginSection />
        </main>        
      </div>
    );
  }
}

export default App;
