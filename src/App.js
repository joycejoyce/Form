import React, { Component } from "react";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import SignUpSection from "./SignUpSection.js";
import './App.css';

Amplify.configure(awsconfig);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">Form</header>
        <SignUpSection />
      </div>
    );
  }
}

export default App;
