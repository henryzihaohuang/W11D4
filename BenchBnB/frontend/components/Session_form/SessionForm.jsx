import React from "react";
import { Link } from "react-router-dom";
import errorsReducer from "../../reducers/errors_reducer";

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {
        const formType = this.props.formType;

        if (formType === "login") {
            return (
                <div>
                    <Link to="/signup"> Sign Up</Link>
                    <ul>{errors.map(e => )}</ul>
                </div>
                )
        } else {
            return (
                <div>
                    <Link to="/login"> Sign Up</Link>
                </div>
            )


        }
        
    }
}