import React, { Component } from "react";
import { Auth } from "aws-amplify";

class WelcomePage extends Component {
    state = {
        submitError: ""
    }

    handleClick = async (e) => {
        try {
            e.preventDefault();

            const response = await Auth.signOut();
    
            this.props.history.push("/loginForm");
        } catch(error) {
            const submitError = error.message ? error.message : error;
            this.setState({ submitError });
        }
        
    }

    render() {
        const { username } = this.props.location.state;
        return (
            <div className="welcomePage">
                <div className="submitError">{this.state.submitError}</div>
                <div className="message">Welcome, {username}!</div>
                <button className="signOutBtn" onClick={(e) => this.handleClick(e)}>Sign Out</button>
            </div>
        )
    }
}

export default WelcomePage;