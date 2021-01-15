import React from "react";
import {Link} from "react-router-dom";

class Greeting extends React.Component {
    constructor(props){
        super(props)

        this.handleLogout = this.handleLogout(this);
    }


    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
            let user = this.props.currentUser;
            
            if (user) {
                return(
                    <div>
                        <p>{user.username}</p>
                        <button onClick= {this.handleLogout}> Log Out </button>
                    </div>
                )

            } else {
                return(
                    <div>
                        <Link to="/signup"> Sign Up </Link>
                        <Link to="/login"> Sign Up </Link>
                    </div>
                )
            }
            
    }
}

export default Greeting;