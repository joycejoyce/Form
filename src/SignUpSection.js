import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUpForm from "./SignUpForm.js";
import CheckEmail from "./CheckEmail.js";
import { withRouter } from "react-router-dom";

class SignUpSection extends Component {
    render() {
        return (
            <div className="SignUpSection">
                <Router>
                    <Switch>
                        <Route path="/signUpForm" component={ SignUpForm } />
                        <Route path="/checkEmail" component={ CheckEmail } />
                        <Route component={ SignUpForm } />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default SignUpSection;
/*const SignUpSection_withRouter = withRouter(SignUpSection);
export default SignUpSection_withRouter;*/