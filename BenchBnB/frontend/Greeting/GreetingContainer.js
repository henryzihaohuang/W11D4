import {connect} from "react-redux";
import Greeting from "./Greeting";


const mapStatetoProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchtoProps = (dispatch) => ({
    logout: ()=>dispatch(logout())
})


export default connect(mapDispatchtoProps, mapDispatchtoProps)(Greeting);
