import React, { Component } from "react";
import styled from "@emotion/styled";
import { ReactComponent as BackImg } from './assets/arrow-circle-left-solid.svg';

const BackBtn = styled(BackImg)`
    width: 30px;
    color: #BA55D3;
`;

class CheckEmail extends Component {
    handleClick = (e) => {
        e.preventDefault();
        this.props.history.push("/signUpForm");
    }

    render() {
        const { email } = this.props.location.state;
        return (
            <div className="checkEmail">
                <div>
                    <div className="message">A verification link has been sent to</div>
                    <div className="emailStr">{email}</div>
                </div>
                <div className="goBack" onClick={(e) => this.handleClick(e)}>
                    <BackBtn />
                    <div className="text">Back to sign up page</div>
                </div>
            </div>
        )
    }
}

export default CheckEmail;