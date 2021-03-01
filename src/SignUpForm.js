import React, { Component } from "react";
import { Auth } from "aws-amplify";
import Field from "./Field.js";

class SignUpForm extends Component {
    state = {
        submitError: "",
        minPwdLen: 6,
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
            },
            confirmPassword: {
                label: "Confirm Password",
                name: "confirmPassword",
                value: "",
                type: "password",
                error: "",
                valid: false
            },
            email: {
                label: "Email",
                name: "email",
                value: "",
                type: "email",
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
        this.validate(name, value);
    }

    validate = (name, value) => {
        let error = "";
        const fields = this.state.fields;
        
        if (name === "password") {
            const { minPwdLen } = this.state;
            if (value.length < minPwdLen) {
                error = `At least ${minPwdLen} characters`;

            }
        }
        else if (name === "confirmPassword") {
            const password = this.state.fields.password.value;
            if (value !== password) {
                error = "Passwords are not matched";
            }
        }
        else if (name === "email") {
            if (!value.includes("@")) {
                error = "Invalid email format";
            }
        }

        const valid = error.length > 0 ? false : true;
        
        fields[name] = { ...this.state.fields[name], error, valid };
        this.setState({ fields });
    }

    handleSubmit = async (e) => {
        try {
            e.preventDefault();
        
            const fields = this.state.fields;
            const username = fields.username.value;
            const password = fields.password.value;
            const email = fields.email.value;

            const response = await Auth.signUp({
                username,
                password,
                attributes: {
                    email
                }
            });
            console.log({response});

            this.props.history.push({
                pathname: '/checkEmail',
                state: { email }
            });
        } catch(error) {
            const submitError = error.message ? error.message : error;
            this.setState({ submitError });
        }
    }

    checkResponseSuccess = (response) => {
        return true;
    }

    checkIsFormValid = () => {
        const field = this.state.fields;
        if (field.username.valid &&
            field.password.valid &&
            field.confirmPassword.valid &&
            field.email.valid) {
            return true;
        }

        return false;
    }

    getErrMsg = () => {
        let errMsg = "";
        const field = this.state.fields;
        if (field.username.error !== "") {
            errMsg += field.username.label + ": " + field.username.error + "\n";
        }
        if (field.password.error !== "") {
            errMsg += field.password.label + ": " + field.password.error + "\n";
        }
        if (field.confirmPassword.error !== "") {
            errMsg += field.confirmPassword.label + ": " + field.confirmPassword.error + "\n"
        }
        if (field.email.error !== "") {
            errMsg += field.email.label + ": " + field.email.error + "\n"
        }

        return errMsg;
    }

    render() {
        const onChange = this.handleFieldChange;
        const fields = this.state.fields;
        const isFormValid = this.checkIsFormValid();

        return(
            <div className="signUpForm">
                <h2>Sign Up</h2>
                <div className="submitError">{this.state.submitError}</div>
                <Field attr={fields.username} onChange={onChange}></Field>
                <Field attr={fields.password} onChange={onChange}></Field>
                <Field attr={fields.confirmPassword} onChange={onChange}></Field>
                <Field attr={fields.email} onChange={onChange}></Field>
                <button className="signUpBtn" disabled={!isFormValid} onClick={(e) => this.handleSubmit(e)}>Sign Up</button>
            </div>
        );
    }
}

export default SignUpForm;