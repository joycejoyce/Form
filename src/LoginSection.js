import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from "./LoginForm.js";
import WelcomePage from "./WelcomePage.js";
//import { withRouter } from "react-router-dom";

class LoginSection extends Component {
    render() {
        return (
            <div className="loginSection">
                <Router>
                    <Switch>
                        <Route path="/loginForm" component={ LoginForm } />
                        <Route path="/welcomePage" component={ WelcomePage } />
                        <Route component={ LoginForm } />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default LoginSection;
/*const LoginSection_withRouter = withRouter(LoginSection);
export default LoginSection_withRouter;*/