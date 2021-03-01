import React, { Component } from "react";

class CheckEmail extends Component {
    handleClick = (e) => {
        e.preventDefault();
        this.props.history.push("/signUpForm");
    }

    render() {
        const { email } = this.props.location.state;
        return (
            <div className="checkEmail">
                <div className="message">A verification link has been sent to {email}</div>
                <button className="goBackBtn" onClick={(e) => this.handleClick(e)}>Back to sign up page</button>
            </div>
        )
    }
}

export default CheckEmail;