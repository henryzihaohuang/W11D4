import {connect} from "react-redux";
import {postUser} from "../../actions/session";
import SessionForm from "./SessionForm";

const mapStatetoProps = (state, ownProps) => {
    return {
        errors: state.errors,
        formType: 'signup',
    }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
    return {processForm: (user) => dispatch(postUser(user))}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(SessionForm);