import React, { Component } from "react";

class Field extends Component {
    render() {
        const { label, type, name, value, error } = this.props.attr;
        const onChange = this.props.onChange;

        return(
            <div className="Field">
                <div className="FieldError">{error}</div>
                <div className="FieldLabel">{label}</div>
                <input className="FieldInput"
                 type={type}
                 name={name}
                 value={value}
                 onChange={(e) => onChange(e)} />
            </div>
        );
    }
}

export default Field;