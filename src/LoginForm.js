import React, { Component } from "react";
import { Auth } from "aws-amplify";
import Field from "./Field.js";

class LoginForm extends Component {
    state = {
        submitError: "",
        fields: {
            username: {
                label: "Username",
                name: "username",
                value: "",
                type: "text",
                error: "",
                valid: false
            },
            password: {
                label: "Password",
                name: "password",
                value: "",
                type: "password",
                error: "",
                valid: false
            }
        }
    }

    handleFieldChange = (e) => {
        const { name, value } = e.target;
        const field = { name, value };
        this.changeField(field, "value");
    }

    changeField = async (field, prop) => {
        const { name, value } = field;
        const fields = this.state.fields;
        fields[name] = { ...this.state.fields[name], [prop]: value };
        await this.setState({ fields });
    }

    checkIsFormValid = () => {
        const { fields } = this.state
        const username = fields.username.value;
        const password = fields.password.value;
        if (username.length > 0 &&
            password.length > 0) {
            return true;
        }

        return false;
    }

    handleSubmit = async (e) => {
        try {
            e.preventDefault();
        
            const fields = this.state.fields;
            const username = fields.username.value;
            const password = fields.password.value;

            const response = await Auth.signIn(username, password);
            console.log({response});

            this.props.history.push({
                pathname: '/welcomePage',
                state: { username }
            });
        } catch(error) {
            const submitError = error.message ? error.message : error;
            this.setState({ submitError });
        }
    }

    render() {
        const onChange = this.handleFieldChange;
        const fields = this.state.fields;
        const isFormValid = this.checkIsFormValid();

        return (
            <div className="loginForm">
                <h2>Login</h2>
                <div className="submitError">{this.state.submitError}</div>
                <Field attr={fields.username} onChange={onChange}></Field>
                <Field attr={fields.password} onChange={onChange}></Field>
                <button className="loginBtn" disabled={!isFormValid} onClick={(e) => this.handleSubmit(e)}>Login</button>
            </div>
        );
    }
}

export default LoginForm;