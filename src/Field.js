import React, { Component } from "react";

class Field extends Component {
    render() {
        const { label, type, name, value, error } = this.props.attr;
        const onChange = this.props.onChange;

        return(
            <div className="field">
                <div className="error">{error}</div>
                <div className="input">
                    <div className="label">{label}</div>
                    <input 
                    type={type}
                    name={name}
                    value={value}
                    onChange={(e) => onChange(e)} />
                </div>
            </div>
        );
    }
}

export default Field;