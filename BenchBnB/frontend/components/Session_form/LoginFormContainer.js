import { connect } from "react-redux";
import { createSession } from "../../actions/session";
import SessionForm from "./SessionForm";

const mapStatetoProps = (state, ownProps) => {
    return {
        errors: state.errors,
        formType: 'login',
    }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
    return { processForm: (user) => dispatch(createSession(user)) }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(SessionForm);